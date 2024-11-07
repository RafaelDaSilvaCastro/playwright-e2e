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

  btnViagem(): Locator {
    return this.page.locator(
      'img[class="vtex-slider-layout-0-x-imageElement vtex-slider-layout-0-x-imageElement--department-categories-banners vtex-store-components-3-x-imageElement vtex-store-components-3-x-imageElement--department-categories-banners"]'
    );
  }

  inputPesquisa(): Locator{
    return this.page.locator(
      'input[placeholder="Buscar por categorias, produtos ou marcas"]'
    )
  }

  btnBuscar(): Locator{
    return this.page.locator(
      'button[class=" vtex-store-components-3-x-searchBarIcon vtex-store-components-3-x-searchBarIcon--header-options-bottom-search vtex-store-components-3-x-searchBarIcon--search vtex-store-components-3-x-searchBarIcon--header-options-bottom-search--search flex items-center pointer bn bg-transparent outline-0 pv0 pl0 pr3"]'
    )
  }

  inputNomeNewsLatter(): Locator{
    return this.page.locator(
      '#newsletter-input-name'
    )
  }

  inputTelefoneNewsLatter(): Locator{
    return this.page.locator(
      '#newsletter-input-phone'
    )
  }

  inputEmailNewslatter(): Locator{
    return this.page.locator(
      '#newsletter-input-email'
    )
  }

  inputTermo(): Locator{
    return this.page.locator(
      '#newsletter-checkbox-confirmation'
    )
  }

  divEnviarNewsLatter(): Locator{
    return this.page.locator(
      'div[class="vtex-button__label flex items-center justify-center h-100 ph6 "]'
    )
  }

  divAddCarrinho(): Locator{
    return this.page.locator(
      'div[class="vtex-add-to-cart-button-0-x-buttonDataContainer vtex-add-to-cart-button-0-x-buttonDataContainer--shelf-addtocart--cart flex justify-center"]'
    )
  }
}
