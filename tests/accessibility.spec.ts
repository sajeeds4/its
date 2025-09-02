import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Accessibility Tests', () => {
  test('Home page should be accessible', async ({ page }) => {
    await page.goto('/');
    
    // Wait for page to load
    await page.waitForLoadState('networkidle');
    
    // Run accessibility scan
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
    
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('Contact page should be accessible', async ({ page }) => {
    await page.goto('/contact');
    
    await page.waitForLoadState('networkidle');
    
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
    
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('Form should be keyboard navigable', async ({ page }) => {
    await page.goto('/contact');
    
    // Focus the first form element by clicking on it first, then test tab navigation
    await page.locator('#name').focus();
    await expect(page.locator('#name')).toBeFocused();
    
    await page.keyboard.press('Tab');
    await expect(page.locator('#email')).toBeFocused();
    
    await page.keyboard.press('Tab');
    await expect(page.locator('#company')).toBeFocused();
    
    await page.keyboard.press('Tab');
    await expect(page.locator('#phone')).toBeFocused();
    
    await page.keyboard.press('Tab');
    await expect(page.locator('#service')).toBeFocused();
    
    await page.keyboard.press('Tab');
    await expect(page.locator('#message')).toBeFocused();
  });

  test('Contact links should be accessible', async ({ page }) => {
    await page.goto('/contact');
    
    // Test email link
    const emailLink = page.locator('a[href^="mailto:"]').first();
    await expect(emailLink).toHaveAttribute('aria-label');
    
    // Test phone link
    const phoneLink = page.locator('a[href^="tel:"]').first();
    await expect(phoneLink).toHaveAttribute('aria-label');
  });
});
