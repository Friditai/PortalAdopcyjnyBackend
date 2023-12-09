const express = require('express')
const router = express.Router()
const checkAuth = require('../middleware/checkAuth')
const Zwierze = require('../models/zwierze')
const {getAnimals, getAnimal, updateAnimal, deleteAnimal, createAnimal} = require('../controllers/zwierzeController')

router.get('/', getAnimals)

router.post('/', checkAuth, createAnimal)

router
  .route("/:animalId")
  .get(getAnimal)
  .put(checkAuth, updateAnimal)
  .delete(checkAuth, deleteAnimal)
 

module.exports = router