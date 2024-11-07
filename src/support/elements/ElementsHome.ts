import { Locator, Page } from '@playwright/test';
import BaseElements from './BaseElements';

export default class ElementsHome extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
    this.page = page;
  }

  btnLazer(): Locator {
    return this.page.locator(
      'img[class="vtex-slider-layout-0-x-imageElement vtex-slider-layout-0-x-imageElement--home-categories-banners vtex-store-components-3-x-imageElement vtex-store-components-3-x-imageElement--home-categories-banners"]'
    );
  }
}
