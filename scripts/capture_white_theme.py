import os
import time
from playwright.sync_api import sync_playwright

output_dir = r"C:\Users\ashif\.gemini\antigravity\brain\b3d5a1cd-729b-4151-b59b-5c6e6516c692\preview_white"
os.makedirs(output_dir, exist_ok=True)

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={"width": 1440, "height": 900})
    
    # 1. Load desktop page
    page.goto("http://localhost:5173", wait_until="networkidle")
    time.sleep(3.2) # wait for loader stroke animation to complete
    
    # Capture Desktop Hero
    page.screenshot(path=os.path.join(output_dir, "01_hero_desktop.png"))
    
    # Scroll to Services
    page.locator("#services").scroll_into_view_if_needed()
    time.sleep(1)
    page.screenshot(path=os.path.join(output_dir, "02_services_desktop.png"))
    
    # Scroll to Pricing
    page.locator("#pricing").scroll_into_view_if_needed()
    time.sleep(1)
    page.screenshot(path=os.path.join(output_dir, "03_pricing_desktop.png"))
    
    # Scroll to Footer
    page.locator("footer").scroll_into_view_if_needed()
    time.sleep(1)
    page.screenshot(path=os.path.join(output_dir, "04_footer_desktop.png"))
    
    # Mobile Viewport Test (iPhone 14 / standard 390x844)
    mobile_page = browser.new_page(viewport={"width": 390, "height": 844}, is_mobile=True)
    mobile_page.goto("http://localhost:5173", wait_until="networkidle")
    time.sleep(3.2)
    mobile_page.screenshot(path=os.path.join(output_dir, "05_mobile_hero.png"))
    
    browser.close()
    print("Screenshots captured successfully in", output_dir)
