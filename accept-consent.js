module.exports = async ({ page }) => {
  try {
    await page.waitForTimeout(3000);

    const selectors = [
      'button:has-text("Accepteer")',
      'button:has-text("Accept")',
      'button:has-text("Alles accepteren")',
      'button[aria-label*="accept"]',
      '[data-testid*="accept"]'
    ];

    for (const sel of selectors) {
      const btn = await page.$(sel);
      if (btn) {
        await btn.click();
        await page.waitForTimeout(3000);
        break;
      }
    }
  } catch (e) {
    // intentionally silent
  }
};
