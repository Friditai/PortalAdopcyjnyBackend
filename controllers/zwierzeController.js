const Zwierze = require('../models/zwierze')
const asyncHandler = require('express-async-handler')

//pobiera dane wszystkich zwierząt
const getAnimals = asyncHandler(async(req, res) => {
  // res.send("Lista zwierząt")
  try {
    const zwierzeta = await Zwierze.find({});
    res.status(200).json(zwierzeta);
  } catch (error) {
    res.status(500)
    throw new Error(error.message);
  }
})

//pobiera dane jednego wybranego zwierzęcia
const getAnimal = asyncHandler(async(req, res) => {
  // console.log(req.animal)
  // res.send(`Wczytaj dane zwierzęcia o ID ${req.params.animalId}`)
  try {
    const { animalId } = req.params;
    const zwierze = await Zwierze.findById(animalId);
    res.status(200).json(zwierze);
  } catch (error) {
    res.status(500)
    throw new Error(error.message);
  }
})
//zmienia dane wybranego zwierzęcia
const updateAnimal = asyncHandler(async(req, res) => {
  // res.send(`Zmień dane zwierzęcia o ID ${req.params.animalId}`)
  try {
    const { animalId } = req.params;
    const zwierze = await Zwierze.findByIdAndUpdate(animalId, req.body);
    if (!zwierze) {
        res.status(404);
        throw new Error(`Nie znaleziono zwierzęcia o ID ${animalId}` );
    }
    const zmienioneZwierze = await Zwierze.findById(animalId);
    res.status(200).json(zmienioneZwierze);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
})
//usuwa dane wybranego zwierzęcia
const deleteAnimal = asyncHandler(async(req, res) => {
  // res.send(`Usuń dane zwierzęcia o ID ${req.params.animalId}`)
  try {
    const { animalId } = req.params;
    const zwierze = await Zwierze.findByIdAndDelete(animalId);
    if (!zwierze) {
        res.status(404);
        throw new Error(`Nie znaleziono zwierzęcia o ID ${animalId}` );
    }
    res.status(200).json(zwierze);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
})

//dodaje nowe zwierzę do bazy danych
const createAnimal = asyncHandler(async(req, res) => {
  //    console.log(req.body)
  //    res.send(req.body)
  try {
    const zwierze = await Zwierze.create(req.body);
    res.status(200).json(zwierze);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

module.exports = {
  getAnimals,
  getAnimal,
  updateAnimal,
  deleteAnimal,
  createAnimal
};
