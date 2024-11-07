import { test } from '@playwright/test';
import { join } from 'path';
import { TheConfig } from 'sicolo';
import AngeloniPage from '../support/pages/angeloniHome';

test.describe('Testando o site do Angeloni', () => {
  const CONFIG = join(__dirname, '../support/fixtures/config.yml');
  let angeloniPage: AngeloniPage;
  let BASE_URL = TheConfig.fromFile(CONFIG).andPath('application.base_url').retrieveData();

  if (process.env.QA) {
    BASE_URL = TheConfig.fromFile(CONFIG).andPath('application.base_url').retrieveData();
  }

  test.beforeEach(async ({ page }) => {
    angeloniPage = new AngeloniPage(page);
    await page.goto(BASE_URL);
  });

  test('Buscando cafe', async () => {
    await angeloniPage.pesquisaCafe();
    await angeloniPage.clicaNaBusca();
  });

  test('Cadastrando na news latter', async() =>{
    await angeloniPage.preencheNome();
    await angeloniPage.preEncheTermoNewsLatter();
    await angeloniPage.preencheEmailNewsLatter();
    await angeloniPage.preencheTelefoneNewsLatter();
  })


  test('Adicionando itens no carrinho', async()=>{
    await angeloniPage.addCarrinho()
  })
});
