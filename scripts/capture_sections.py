import time
from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={'width': 1440, 'height': 900})
    page.goto('http://localhost:4173/', wait_until='networkidle')
    # Wait for the loader to completely finish and disappear
    time.sleep(4.0)
    
    # 1. Hero
    page.locator('#home').screenshot(path='screenshots/section-hero.png')

    # 2. Trust Bar
    page.locator('#trust').screenshot(path='screenshots/section-trust.png')

    # 3. About
    page.locator('#about').screenshot(path='screenshots/section-about.png')

    # 4. Signature
    page.locator('#signature').screenshot(path='screenshots/section-signature.png')

    browser.close()
    print("Updated section screenshots taken!")
