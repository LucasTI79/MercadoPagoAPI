const express = require('express');
const routes = express.Router();

const paymentsController = require('../database/controllers/paymentsController');
const favoritesController = require('../database/controllers/favoritesController');
const itemsController = require('../database/controllers/itemsController');
const purchasesController = require('../database/controllers/purchasesController');
const storesController = require('../database/controllers/storesController');
const usersController = require('../database/controllers/usersController');
const funcHourController = require('../database/controllers/funcHourController');

//Rota de pagamentos

routes.get('/checkout/:id/:email/:description/:amount', paymentsController.checkout)

routes.get('/success', (req, res) => {
    return res.render('success_screen')
})

routes.get('/pending', (req, res) => {
    return res.render('pending_screen')
})

routes.get('/failure', (req, res) => {
    return res.render('failure_screen')
})

//Rota de usuários

routes.get('/users', usersController.index);

routes.get('/users', usersController.update);

routes.post('/users', usersController.create);

routes.delete('/users', usersController.delete);

//Rota de favoritos

routes.get('/favorites', favoritesController.index);

routes.get('/favorites', favoritesController.update);

routes.post('/favorites', favoritesController.create);

routes.delete('/favorites', favoritesController.delete);

//Rota dos pedidos

routes.get('/purchases', purchasesController.index);

routes.get('/purchases', purchasesController.update);

routes.post('/purchases', purchasesController.create);

routes.delete('/purchases', purchasesController.delete);

//Rota das lojas

routes.get('/stores', storesController.index);

routes.get('/stores', storesController.update);

routes.post('/stores', storesController.create);

routes.delete('/stores', storesController.delete);

//Rota dos itens

routes.get('/items', itemsController.index);

routes.get('/items', itemsController.update);

routes.post('/items', itemsController.create);

routes.delete('/items', itemsController.delete);

//Rota do horário de funcionamento da loja

routes.get('/funcHour', funcHourController.index);

routes.get('/funcHour', funcHourController.update);

routes.post('/funcHour', funcHourController.create);

routes.delete('/funcHour', funcHourController.delete);

module.exports = routes;