import time
from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={'width': 390, 'height': 844}, is_mobile=True, has_touch=True)
    page.goto('http://localhost:4173/', wait_until='networkidle')
    time.sleep(4.0)
    
    # Hero on mobile
    page.screenshot(path='screenshots/mobile-hero-view.png')
    
    # Scroll down to services
    page.evaluate("window.scrollTo(0, 1800)")
    time.sleep(0.8)
    page.screenshot(path='screenshots/mobile-services-view.png')

    # Scroll down to booking
    page.evaluate("window.scrollTo(0, 4800)")
    time.sleep(0.8)
    page.screenshot(path='screenshots/mobile-booking-view.png')

    browser.close()
    print("Mobile focused views captured!")
