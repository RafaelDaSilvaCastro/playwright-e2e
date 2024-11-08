import { Page, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import ElementsHome from '../elements/ElementsHome';
import BasePage from './BasePage';

export default class CadastroPage extends BasePage {
  readonly elementos: ElementsHome;

  constructor(readonly page: Page) {
    super(page);
    this.page = page;
    this.elementos = new ElementsHome(page);
  }

  async abaLazer(): Promise<void> {
    await this.elementos.btnLazer().click();
  }

  async abaLazarViagem(): Promise<void> {
    await this.elementos.btnViagem().click();
  }

  async pesquisaCafe(): Promise<void>{
    await this.elementos.inputPesquisa().fill('café')
  }

  async clicaNaBusca(): Promise<void>{
    await this.elementos.btnBuscar().click
  }

  async preencheNome(): Promise<void>{
    await this.elementos.inputNomeNewsLatter().fill('Teste 123');
  }

  async preencheEmailNewsLatter(): Promise<void>{
    await this.elementos.inputEmailNewslatter().fill('Teste@123');
  }

  async preencheTelefoneNewsLatter(): Promise<void>{
    await this.elementos.inputTelefoneNewsLatter().fill('47428145642');
  }  

  async preEncheTermoNewsLatter(): Promise<void>{
    await this.elementos.inputTermo().click()
    await this.elementos.inputTermo().press('Enter')
  }  
  
  async addCarrinho(): Promise<void>{
    await this.elementos.divAddCarrinho().nth(0).click()
    await this.elementos.divAddCarrinho().nth(1).click()
    await this.elementos.divAddCarrinho().nth(3).click()
  }

  async abaNossasLojas(): Promise<void>{
    await this.elementos.divNossasLojas().nth(0).click()
  }

  async selecionaSupermercado(): Promise<void>{
    await this.elementos.inputNossasLojasSuperMercado().click()
  }

  async comboLojaCriciuma(): Promise<void>{
    await this.elementos.comboNossasLojas().click()
    await this.elementos.comboNossasLojas().press('c')
  }

}
