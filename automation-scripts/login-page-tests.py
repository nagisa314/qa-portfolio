"""
Playwright Test Script - Login Page Validation
This is a simple automation example for QA portfolio demonstration.
"""

from playwright.sync_api import sync_playwright

def test_valid_login():
    """Test successful login with valid credentials"""
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        
        # Navigate to login page
        page.goto("https://onehealth.my/login")
        
        # Fill in credentials
        page.fill("input[name='email']", "test@example.com")
        page.fill("input[name='password']", "ValidPassword123")
        
        # Click login button
        page.click("button[type='submit']")
        
        # Verify successful login
        page.wait_for_url("https://onehealth.my/dashboard", timeout=5000)
        assert "dashboard" in page.url
        print("✓ Test passed: Valid login works")
        
        browser.close()

def test_invalid_login():
    """Test login with invalid credentials"""
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        
        page.goto("https://onehealth.my/login")
        page.fill("input[name='email']", "test@example.com")
        page.fill("input[name='password']", "WrongPassword")
        page.click("button[type='submit']")
        
        # Verify error message appears
        error_message = page.locator(".error-message").text_content()
        assert "Invalid" in error_message or "incorrect" in error_message.lower()
        print("✓ Test passed: Invalid login shows error")
        
        browser.close()

def test_empty_form_validation():
    """Test form validation with empty fields"""
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        
        page.goto("https://onehealth.my/login")
        
        # Try submitting empty form
        page.click("button[type='submit']")
        
        # Check for HTML5 validation
        email_field = page.locator("input[name='email']")
        password_field = page.locator("input[name='password']")
        
        # HTML5 required validation should prevent submission
        assert email_field.evaluate("el => el.validationMessage") != ""
        print("✓ Test passed: Empty form validation works")
        
        browser.close()

if __name__ == "__main__":
    print("Running Playwright QA Tests...")
    print("\n1. Testing valid login...")
    try:
        test_valid_login()
    except Exception as e:
        print(f"✗ Test failed: {e}")
    
    print("\n2. Testing invalid login...")
    try:
        test_invalid_login()
    except Exception as e:
        print(f"✗ Test failed: {e}")
    
    print("\n3. Testing empty form validation...")
    try:
        test_empty_form_validation()
    except Exception as e:
        print(f"✗ Test failed: {e}")
    
    print("\n✓ All tests completed")
