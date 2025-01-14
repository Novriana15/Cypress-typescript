import {LoginPage} from "./pages/login_pages"
import {DashboardPage} from "./pages/dashboard_pages"
import {CartPage} from "./pages/cart_pages"

let loginPage = new LoginPage()
let dashboardPage = new DashboardPage()
let cartPage = new CartPage()

const URL = 'https://www.saucedemo.com/'


// failed checkout products in cart because empty information
it('Test Sauce Demo Failed Checkout because Empty Information', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin()
    dashboardPage.sauceLabsOnesie() 
    dashboardPage.clickBackToProducts()
    dashboardPage.sauceLabsBike()
    cartPage.checkoutProductEmptyInformation()
    cartPage.assertFailCheckoutEmptyInformation()
})

// success checkout products in cart (sauce labs Onesies & sauce labs Bike)
it('Test Sauce Demo Success Checkout Sauce Labs Onesies and Bike in Cart', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin()
    dashboardPage.sauceLabsOnesie() 
    dashboardPage.clickBackToProducts()
    dashboardPage.sauceLabsBike()
    cartPage.checkoutProduct()
})

it('should fork a GitHub repository', () => {
    cy.visit('https://github.com/Novriana15/Tugas_Akhir_Sanbercode-Task1');
});
