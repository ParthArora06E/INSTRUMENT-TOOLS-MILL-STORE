import fitz
import os

pdf_path = r"C:\Users\parth\Documents\sunil\CATLOGUE 2026.pdf"
out_dir = r"C:\Users\parth\Documents\sunil\public\images"

targets = {
    '033-': '033-digital-force-gauge-eco',
    '034-': '034-digital-force-gauge-commercial'
}

doc = fitz.open(pdf_path)

for page_num in range(len(doc)):
    page = doc[page_num]
    
    # Get all text blocks
    text_instances = []
    blocks = page.get_text("dict")["blocks"]
    for b in blocks:
        if b["type"] == 0:
            text = " ".join([span["text"] for line in b["lines"] for span in line["spans"]]).strip()
            text_instances.append({
                "text": text,
                "bbox": b["bbox"]
            })
    
    page_targets = []
    for t_name, t_slug in targets.items():
        for ti in text_instances:
            if t_name in ti['text']:
                page_targets.append((t_name, t_slug, ti['bbox']))
                break
                
    if not page_targets:
        continue
        
    print(f"Found targets on page {page_num}: {[t[0] for t in page_targets]}")
    
    image_list = page.get_images(full=True)
    if not image_list:
        continue
        
    page_images = []
    for img_info in image_list:
        xref = img_info[0]
        base_image = doc.extract_image(xref)
        rects = page.get_image_rects(xref)
        if not rects: continue
        if base_image["width"] < 30 or base_image["height"] < 30: continue
        page_images.append({
            "rect": rects[0],
            "bytes": base_image["image"],
            "ext": base_image["ext"]
        })
        
    for t_name, t_slug, bbox in page_targets:
        txt_cx = (bbox[0] + bbox[2]) / 2
        txt_cy = (bbox[1] + bbox[3]) / 2
        
        best_img = None
        best_dist = float('inf')
        
        for img in page_images:
            rect = img["rect"]
            img_cx = (rect.x0 + rect.x1) / 2
            img_cy = (rect.y0 + rect.y1) / 2
            dist = ((img_cx - txt_cx)**2 + (img_cy - txt_cy)**2)**0.5
            if dist < best_dist:
                best_dist = dist
                best_img = img
                
        if best_img:
            out_path = os.path.join(out_dir, f"{t_slug}.jpeg")
            with open(out_path, "wb") as f:
                f.write(best_img["bytes"])
            print(f"Saved image for {t_name} to {out_path}")
            
            del targets[t_name]

print("Done")
