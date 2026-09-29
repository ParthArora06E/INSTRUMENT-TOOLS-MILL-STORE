import fitz
import os

pdf_path = r"C:\Users\parth\Documents\sunil\CATLOGUE 2026.pdf"
out_dir = r"C:\Users\parth\Documents\sunil\public\images"

targets = {
    'Asker-C Hardness Tester': '012-asker-c-hardness-tester',
    'CTG 804 FNF': '015-ctg-804-fnf',
    'UTM9': '027-utm9',
    'Dial Force Gauge': '031-dial-force-gauge',
    '033-': '033-digital-force-gauge-eco',
    '034-': '034-digital-force-gauge-commercial',
    'Thickness Gauge': '047-thickness-gauge'
}

doc = fitz.open(pdf_path)

for page_num in range(len(doc)):
    page = doc[page_num]
    
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
            if t_name.lower() in ti['text'].lower() or ti['text'].lower() in t_name.lower() and len(ti['text']) > 4:
                page_targets.append((t_name, t_slug, ti['bbox']))
                break
                
    if not page_targets:
        continue
        
    image_list = page.get_images(full=True)
    page_images = []
    for img_info in image_list:
        xref = img_info[0]
        rects = page.get_image_rects(xref)
        if not rects: continue
        page_images.append({
            "rect": rects[0]
        })
        
    for t_name, t_slug, bbox in page_targets:
        txt_cx = (bbox[0] + bbox[2]) / 2
        txt_cy = (bbox[1] + bbox[3]) / 2
        
        best_rect = None
        best_dist = float('inf')
        
        for img in page_images:
            rect = img["rect"]
            img_cx = (rect.x0 + rect.x1) / 2
            img_cy = (rect.y0 + rect.y1) / 2
            dist = ((img_cx - txt_cx)**2 + (img_cy - txt_cy)**2)**0.5
            if dist < best_dist:
                best_dist = dist
                best_rect = rect
                
        if best_rect:
            # We add a slight margin to the rect
            # clip = fitz.Rect(best_rect.x0 - 5, best_rect.y0 - 5, best_rect.x1 + 5, best_rect.y1 + 5)
            # Render the page at this rect
            pix = page.get_pixmap(clip=best_rect, dpi=150)
            
            out_path = os.path.join(out_dir, f"{t_slug}.jpeg")
            pix.save(out_path)
            print(f"Saved rendered image for {t_name} to {out_path}")
            
            del targets[t_name]

print("Remaining targets not found:", targets.keys())
