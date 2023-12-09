const mongoose = require('mongoose')

const zwierzeSchemat = mongoose.Schema(
    {
    gatunek: {
        type: String,
        required: [true, "Podaj gatunek zwierzęcia (np. pies, kot etc.)."]
    },
    imie: {
        type: String,
        required: false
    },
    plec: {
        type: String,
        required: false
    },
    wiek: {
        type: Number,
        required: false
    },
    rasa: {
        type: String,
        required: false
    },
    kolor: {
        type: String,
        required: false
    },
   
    telefon: {
            type: String,
            required: [true, "Podaj numer telefonu do kontaktu w sprawie adopcji zwierzęcia"]
    },
    email: {
            type: String,
            required: false
    },
    
    statusAdopcji: {
        type: Boolean,
        default: false, // Ustawienie domyślnej wartości na "false" (dostępne do adopcji)
    },
},
{
    timestamps: true
});

const Zwierze = mongoose.model('Zwierze', zwierzeSchemat)

module.exports = Zwierze


