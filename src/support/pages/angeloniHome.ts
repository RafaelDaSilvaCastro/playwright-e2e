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
  }
//   async enviaNewsLatter(): Promise<void>{
//     await this.elementos.divEnviarNewsLatter().press('Enter')
//   }     

  //   async preencherFormulario(): Promise<void> {
  //     await this.cadastroElements.getBotaoNovoCadastro().click();
  //     await this.cadastroElements.getCampoNome().fill(faker.person.firstName());
  //     await this.cadastroElements.getCampoCpf().fill('33223745050');
  //     await this.cadastroElements.getCampoEmail().fill('a@b.com.br');
  //     await this.cadastroElements.getCampoWhatsapp().fill('48 999998888');
  //     await this.cadastroElements.getCampoCep().fill('88817070');
  //     await this.cadastroElements.getBotaoBuscarCep().click();
  //     await this.cadastroElements.getCampoNumero().fill('10');
  //     await this.cadastroElements.getCampoComplemento().fill(faker.word.words());
  //     await this.cadastroElements.getCampoMetodoEntrega().click();
  //     await this.cadastroElements
  //       .getCampoAnexo()
  //       .setInputFiles('src/support/fixtures/cnh_testes.jpg');
  //     await this.cadastroElements.getBotaoCadastrar().click();
  //   }

  //   async preencherFormularioInvalido(): Promise<void> {
  //     await this.cadastroElements.getBotaoNovoCadastro().click();
  //     await this.cadastroElements.getCampoNome().fill(faker.person.firstName());
  //     await this.cadastroElements.getCampoCpf().fill('33223745050');
  //     await this.cadastroElements.getCampoEmail().fill('a@b.com.br');
  //     await this.cadastroElements.getCampoWhatsapp().fill('48 999998888');
  //     await this.cadastroElements.getCampoCep().fill('88817070');
  //     await this.cadastroElements.getBotaoBuscarCep().click();
  //     await this.cadastroElements.getCampoNumero().fill('10');
  //     await this.cadastroElements.getCampoComplemento().fill(faker.word.words());
  //     await this.cadastroElements.getCampoMetodoEntrega().click();
  //     await this.cadastroElements.getBotaoCadastrar().click();
  //   }

  //   async validarCadastro(): Promise<void> {
  //     await expect(this.cadastroElements.getMessageOK()).toBeVisible();
  //   }

  //   async validarCNH(): Promise<void> {
  //     await expect(this.cadastroElements.getValidarCNH()).toBeVisible();
  //   }

  //   async validarCarrinho(): Promise<void> {
  //     await this.page.locator('[data-test="username"]').click();
  //     await this.page.locator('[data-test="username"]').fill('standard_user');
  //     await this.page.locator('[data-test="password"]').click();
  //     await this.page.locator('[data-test="password"]').fill('secret_sauce');
  //     await this.page.locator('[data-test="login-button"]').click();
  //     await this.page.locator('#shopping_cart_container a').click();
  //     await this.page.locator('[data-test="checkout"]').click();
  //   }
}
