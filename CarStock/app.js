const express =  require('express');
const app = express();
// (fs) służy do obsługi operacji plikowych 
const fs = require('fs');


app.get('/allStock', (req,res) => {
    res.send("siema");   
    const carsData = fs.readFileSync('./data.json');
    // do tablicy
    const cars = JSON.parse(carsData);
    
    console.log(cars);
});

app.listen(3000, () => {
    console.log("serwer dziala na procie 3000");
});

// app.get('/allStock/:id', (req, res) => {
//     const carsData = fs.readFileSync('./data.json');
//     const cars = JSON.parse(carsData);

//     const car = cars.find(car => car.id == req.params.id); //   pozwala na pobieranie wartości z parametrów ścieżki URL (id) przez funkcje parms

//     if (!car) {
//         res.send('Samochód nie został znaleziony'); // zwraca błąd gdy samochód nie został znaleziony
//     } else {
//         res.send(`Model: ${car.model}, rok produkcji: ${car.modelYear}, moc: ${car.power}, kolor: ${car.color}`); // wyświetla informacje o samochodzie
//     }
// });


