const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.post('/', (req, res) => {
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);

    res.send(`<h1>The total of ${num1} and ${num2} is ${num1 + num2}</h1>`)
})

app.get('/bmicalculator', (req, res) => {
    res.sendFile(__dirname + "/bmiCalculator.html")
})

app.post('/bmicalculator', (req, res) => {
    let weight = Number(req.body.weight / 2.2)
    let height = Number(req.body.height / 39.37)

    let bmi = Math.round(weight / (height * height))

    res.send(`<h1>Your BMI is ${bmi}</h1>`)
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});