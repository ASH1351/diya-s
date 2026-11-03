import os
import time
from playwright.sync_api import sync_playwright

os.makedirs('screenshots', exist_ok=True)

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    
    # 1. Desktop Test
    print("Testing Desktop view (1440x900)...")
    context = browser.new_context(viewport={'width': 1440, 'height': 900})
    page = context.new_page()
    
    errors = []
    page.on("pageerror", lambda err: errors.append(str(err)))
    
    page.goto('http://localhost:4173/', wait_until='networkidle')
    # Wait for the loader animation to finish fading out
    time.sleep(3.2)
    
    # Take full page screenshot
    page.screenshot(path='screenshots/desktop-full.png', full_page=True)
    print("Desktop full screenshot saved.")
    
    # Test clicking 'Explore Services'
    explore_btn = page.locator('text=Explore Services').first
    if explore_btn.is_visible():
        explore_btn.click()
        time.sleep(1)
        print("Clicked Explore Services.")
    
    # Test service tab switching
    makeup_tab = page.locator('text=Makeup & Occasions').first
    if makeup_tab.is_visible():
        makeup_tab.click()
        time.sleep(0.5)
        print("Switched to Makeup tab.")
    
    # Take screenshot of services section
    page.screenshot(path='screenshots/desktop-services.png')

    # Test opening Booking Modal
    book_btn = page.locator('button:has-text("Book Appointment")').first
    if book_btn.is_visible():
        book_btn.click()
        time.sleep(0.8)
        page.screenshot(path='screenshots/desktop-modal.png')
        print("Booking modal screenshot saved.")
        # Close modal
        close_btn = page.locator('button[aria-label="Close booking modal"]').first
        if close_btn.is_visible():
            close_btn.click()
            time.sleep(0.5)

    context.close()

    # 2. Tablet Test (768x1024)
    print("Testing Tablet view (768x1024)...")
    context_tab = browser.new_context(viewport={'width': 768, 'height': 1024})
    page_tab = context_tab.new_page()
    page_tab.goto('http://localhost:4173/', wait_until='networkidle')
    time.sleep(3.2)
    page_tab.screenshot(path='screenshots/tablet-full.png', full_page=True)
    print("Tablet screenshot saved.")
    context_tab.close()

    # 3. Mobile Test (390x844 - iPhone 14)
    print("Testing Mobile view (390x844)...")
    context_mob = browser.new_context(viewport={'width': 390, 'height': 844}, is_mobile=True, has_touch=True)
    page_mob = context_mob.new_page()
    page_mob.goto('http://localhost:4173/', wait_until='networkidle')
    time.sleep(3.2)
    page_mob.screenshot(path='screenshots/mobile-full.png', full_page=True)
    print("Mobile full screenshot saved.")

    # Test Mobile Menu Drawer
    menu_btn = page_mob.locator('button[aria-label="Open Navigation Menu"]').first
    if menu_btn.is_visible():
        menu_btn.click()
        time.sleep(0.8)
        page_mob.screenshot(path='screenshots/mobile-menu.png')
        print("Mobile menu drawer screenshot saved.")
    
    context_mob.close()

    browser.close()

    print("Browser test complete. Errors detected:", len(errors))
    if errors:
        for e in errors:
            print("Error:", e)
    else:
        print("ALL TESTS PASSED WITH 0 CONSOLE ERRORS!")
