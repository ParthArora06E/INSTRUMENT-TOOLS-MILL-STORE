import fitz
import os

pdf_path = r"C:\Users\parth\Documents\sunil\CATLOGUE 2026.pdf"
out_dir = r"C:\Users\parth\Documents\sunil\public\images"

targets = {
    'Asker-C Hardness Tester': '012-asker-c-hardness-tester',
    'CTG 804 FNF': '015-ctg-804-fnf',
    'UTM9': '027-utm9',
    'Dial Force Gauge': '031-dial-force-gauge',
    'Digital Force Gauge (Eco)': '033-digital-force-gauge-eco',
    'Digital Force Gauge (Commercial)': '034-digital-force-gauge-commercial',
    'Thickness Gauge': '047-thickness-gauge'
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
    
    # Check if any target is on this page
    page_targets = []
    for t_name, t_slug in targets.items():
        # loose match
        for ti in text_instances:
            if t_name.lower() in ti['text'].lower() or ti['text'].lower() in t_name.lower() and len(ti['text']) > 4:
                page_targets.append((t_name, t_slug, ti['bbox']))
                break
                
    if not page_targets:
        continue
        
    # We found targets on this page!
    print(f"Found targets on page {page_num}: {[t[0] for t in page_targets]}")
    
    # Extract images on this page
    image_list = page.get_images(full=True)
    if not image_list:
        print(f"No images on page {page_num}")
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
        
    # Match targets to closest image
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
            
            # Remove from targets
            del targets[t_name]

print("Remaining targets not found:", targets.keys())
