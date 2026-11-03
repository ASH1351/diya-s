import os
import time
from playwright.sync_api import sync_playwright

output_dir = r"C:\Users\ashif\.gemini\antigravity\brain\b3d5a1cd-729b-4151-b59b-5c6e6516c692\preview_white"

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={"width": 1440, "height": 900})
    
    page.goto("http://localhost:5173", wait_until="networkidle")
    time.sleep(3.2)
    
    # About Section
    page.locator("#about").scroll_into_view_if_needed()
    time.sleep(0.8)
    page.screenshot(path=os.path.join(output_dir, "06_about_desktop.png"))
    
    # Gallery & Before/After Slider
    page.locator("#gallery").scroll_into_view_if_needed()
    time.sleep(0.8)
    page.screenshot(path=os.path.join(output_dir, "07_gallery_desktop.png"))
    
    # Booking Section & Map
    page.locator("#contact").scroll_into_view_if_needed()
    time.sleep(0.8)
    page.screenshot(path=os.path.join(output_dir, "08_booking_desktop.png"))
    
    browser.close()
    print("Done")
