const express = require('express');

const testController = require('../controllers/test.controller');
const homeController = require('../controllers/home.controller');

let router = express.Router();

router.get('/', testController.test)
router.post('/', homeController.post)

module.exports = router;



// const mainController = require('../controllers/main.controller');

// HTTP Verbs
// router.post('/providers', mainController.create)
// router.get('/providers', mainController.readAll)
// router.get('/providers/:id', mainController.readOne)
// router.put('/providers/:id', mainController.update)
// router.delete('/providers/:id', mainController.deleteOne)
// router.delete('/providers', mainController.deleteAll)

//No matching api endpoints
// router.post('/*', notFound)
// router.get('/*', notFound)
// router.put('/*', notFound)
// router.delete('/*', notFound)

// function notFound(req, res){
//     res.status(400)
//     res.send('Not valid endpoint')
// }

