const express = require('express');
const fs = require('fs');
const app = express();
const path = require ('path');

let PersonInf;
let LeaderInf;
let FactoryInf;

//Имя на верху формы
let StudentName = "Иванов Иван Иванович"
app.set ('viem engine', 'ejs');

const createPath = (page) => path.resolve(__dirname, 'ejs', `${page}.ejs`);
const stylePath = (page) => path.resolve(__dirname, style, `${page}.css`);

app.listen ("3001", (error) => {
    error ? console.log(error) : console.log(`listening port ${"3001"}`);

}) 


//Инициализация формы, StudentName - отображаемое имя студента
app.get ('/', (req, res) => {
    
    res.render(createPath('block'), {StudentName} );
    res.end;
});

app.use (express.urlencoded({extended: false}));

app.use (express.static(__dirname));

app.use (express.json());


//Получение данных из формы персональной информации
app.post ('/PersonInfoForm', (req, res) => {
    console.log(JSON.stringify(req.body));
    PersonInf = req.body
    res
    .status(200)
    .json({
        date1: "SomeDate",
        date2: "SomeDate2"
    })
    res.end;
})

app.get ('/PersonInfoForm', (req, res) => {
    res
    .status(200)
    .send(PersonInf);
})

//Получение данных руководителей
app.post ('/LeaderInfoForm', (req, res) => {
    console.log(JSON.stringify(req.body));
    LeaderInf = req.body;
    res
    .status(200)
    .json({
        date1: "SomeDate",
        date2: "SomeDate2"
    })
    res.end;
})

app.get ('/LeaderInfoForm', (req, res) => {
    res
    .status(200)
    .send(LeaderInf);
})

//Получение данных из формы информации о предприятии
app.post ('/FactoryInfoForm', (req, res) => {
    console.log(JSON.stringify(req.body));
    FactoryInf = req.body;
    res
    .status(200)
    .json({
        date1: "SomeDate",
        date2: "SomeDate2"
    })
    res.end;
})

app.get ('/FactoryInfoForm', (req, res) => {
    res
    .status(200)
    .send(FactoryInfInf);
})

//Легаси, действие кнопки
app.post ('/block', (req, res) => {
    //console.log(req.body);
    //res.send(req.body);
    StudentName = req.body.FirstNameTextField + " " + req.body.SecondNameTextField + " " + req.body.TreeNameTextField;
    res.render(createPath('block'), {StudentName} );
    DataJSON = JSON.stringify(req.body);
    res.end;
})

//Временный счётчик для нижней функции
let a = 0;

//Меняет рисунок прогресса, зависит от i (сейчас каждая перезарузка) увеличивает i на 1
app.get ('/getstepsimage', (req, res) => {
    let i = (a++%4)+1;
    fs.readFile(`./Picturies/Step${i}.svg`, function(error, data) {
        res.send(data);
        res.end;
    });
})
