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

