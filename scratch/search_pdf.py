import fitz

pdf_path = r"C:\Users\parth\Documents\sunil\CATLOGUE 2026.pdf"
doc = fitz.open(pdf_path)

for page_num in range(len(doc)):
    page = doc[page_num]
    text = page.get_text()
    if 'Force' in text or 'force' in text.lower():
        print(f"Page {page_num} contains 'Force':")
        lines = [line for line in text.split('\n') if 'force' in line.lower()]
        print(lines)
