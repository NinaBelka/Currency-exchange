let exchange = document.querySelector('.exchange');
let btn = document.querySelector('.btn');

let tdUsd = document.querySelector('.tdusd');
let tdEur = document.querySelector('.tdeur');
let tdCad = document.querySelector('.tdcad');
let tdDkk = document.querySelector('.tddkk');
let tdRub = document.querySelector('.tdrub');
let tdGbp = document.querySelector('.tdgbp');
let tdHkd = document.querySelector('.tdhkd');
let tdUah = document.querySelector('.tduah');
let tdPln = document.querySelector('.tdpln');
let tdRon = document.querySelector('.tdron');

let moneyArr = ["USD", "EUR", "CAD", "DKK", "RUB", "GBP", "HKD", "UAH", "PLN", "RON"];
let tdMoneyArr = ["tdUsd", "tdEur", "tdCad", "tdDkk", "tdRub", "tdGbp", "tdHkd", "tdUah", "tdPln", "tdRon"];

let exchangeUsd = document.querySelector('.usd');
exchangeUsd.addEventListener('click', function () {
    btn.innerHTML = 'USD';
    exchange.innerHTML = 'USD ' + 'Exchange rate';

    async function rateUsd() {
        let usd = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
        let moneysUsd = await usd.json();
        tdUsd.innerHTML = moneysUsd.rates.USD;
        tdEur.innerHTML = moneysUsd.rates.EUR;
        tdCad.innerHTML = moneysUsd.rates.CAD;
        tdDkk.innerHTML = moneysUsd.rates.DKK;
        tdRub.innerHTML = moneysUsd.rates.RUB;
        tdGbp.innerHTML = moneysUsd.rates.GBP;
        tdHkd.innerHTML = moneysUsd.rates.HKD;
        tdUah.innerHTML = moneysUsd.rates.UAH;
        tdPln.innerHTML = moneysUsd.rates.PLN;
        tdRon.innerHTML = moneysUsd.rates.RON;
    };
    rateUsd();
});


let exchangeEur = document.querySelector('.eur');
exchangeEur.addEventListener('click', function () {
    btn.innerHTML = 'EUR';
    exchange.innerHTML = 'EUR ' + 'Exchange rate';

    async function rateEur() {
        let eur = await fetch('https://api.exchangerate-api.com/v4/latest/EUR');
        let moneysEur = await eur.json();

        tdUsd.innerHTML = moneysEur.rates.USD;
        tdEur.innerHTML = moneysEur.rates.EUR;
        tdCad.innerHTML = moneysEur.rates.CAD;
        tdDkk.innerHTML = moneysEur.rates.DKK;
        tdRub.innerHTML = moneysEur.rates.RUB;
        tdGbp.innerHTML = moneysEur.rates.GBP;
        tdHkd.innerHTML = moneysEur.rates.HKD;
        tdUah.innerHTML = moneysEur.rates.UAH;
        tdPln.innerHTML = moneysEur.rates.PLN;
        tdRon.innerHTML = moneysEur.rates.RON;
    };
    rateEur();
});

let exchangeCad = document.querySelector('.cad');
exchangeCad.addEventListener('click', function () {
    btn.innerHTML = 'CAD';
    exchange.innerHTML = 'CAD ' + 'Exchange rate';

    async function rateCad() {
        let cad = await fetch('https://api.exchangerate-api.com/v4/latest/CAD');
        let moneysCad = await cad.json();
        tdUsd.innerHTML = moneysCad.rates.USD;
        tdEur.innerHTML = moneysCad.rates.EUR;
        tdCad.innerHTML = moneysCad.rates.CAD;
        tdDkk.innerHTML = moneysCad.rates.DKK;
        tdRub.innerHTML = moneysCad.rates.RUB;
        tdGbp.innerHTML = moneysCad.rates.GBP;
        tdHkd.innerHTML = moneysCad.rates.HKD;
        tdUah.innerHTML = moneysCad.rates.UAH;
        tdPln.innerHTML = moneysCad.rates.PLN;
        tdRon.innerHTML = moneysCad.rates.RON;
    };
    rateCad();
});

let exchangeDkk = document.querySelector('.dkk');
exchangeDkk.addEventListener('click', function () {
    btn.innerHTML = 'DKK';
    exchange.innerHTML = 'DKK ' + 'Exchange rate';

    async function rateDkk() {
        let dkk = await fetch('https://api.exchangerate-api.com/v4/latest/DKK');
        let moneysDkk = await dkk.json();
        tdUsd.innerHTML = moneysDkk.rates.USD;
        tdEur.innerHTML = moneysDkk.rates.EUR;
        tdCad.innerHTML = moneysDkk.rates.CAD;
        tdDkk.innerHTML = moneysDkk.rates.DKK;
        tdRub.innerHTML = moneysDkk.rates.RUB;
        tdGbp.innerHTML = moneysDkk.rates.GBP;
        tdHkd.innerHTML = moneysDkk.rates.HKD;
        tdUah.innerHTML = moneysDkk.rates.UAH;
        tdPln.innerHTML = moneysDkk.rates.PLN;
        tdRon.innerHTML = moneysDkk.rates.RON;
    };
    rateDkk();
});

let exchangeRub = document.querySelector('.rub');
exchangeRub.addEventListener('click', function () {
    btn.innerHTML = 'RUB';
    exchange.innerHTML = 'RUB ' + 'Exchange rate';

    async function rateRub() {
        let rub = await fetch('https://api.exchangerate-api.com/v4/latest/RUB');
        let moneysRub = await rub.json();
        tdUsd.innerHTML = moneysRub.rates.USD;
        tdEur.innerHTML = moneysRub.rates.EUR;
        tdCad.innerHTML = moneysRub.rates.CAD;
        tdDkk.innerHTML = moneysRub.rates.DKK;
        tdRub.innerHTML = moneysRub.rates.RUB;
        tdGbp.innerHTML = moneysRub.rates.GBP;
        tdHkd.innerHTML = moneysRub.rates.HKD;
        tdUah.innerHTML = moneysRub.rates.UAH;
        tdPln.innerHTML = moneysRub.rates.PLN;
        tdRon.innerHTML = moneysRub.rates.RON;
    };
    rateRub();
});

let exchangeGbp = document.querySelector('.gbp');
exchangeGbp.addEventListener('click', function () {
    btn.innerHTML = 'GBP';
    exchange.innerHTML = 'GBP ' + 'Exchange rate';

    async function rateGbp() {
        let gbp = await fetch('https://api.exchangerate-api.com/v4/latest/GBP');
        let moneysGbp = await gbp.json();
        tdUsd.innerHTML = moneysGbp.rates.USD;
        tdEur.innerHTML = moneysGbp.rates.EUR;
        tdCad.innerHTML = moneysGbp.rates.CAD;
        tdDkk.innerHTML = moneysGbp.rates.DKK;
        tdRub.innerHTML = moneysGbp.rates.RUB;
        tdGbp.innerHTML = moneysGbp.rates.GBP;
        tdHkd.innerHTML = moneysGbp.rates.HKD;
        tdUah.innerHTML = moneysGbp.rates.UAH;
        tdPln.innerHTML = moneysGbp.rates.PLN;
        tdRon.innerHTML = moneysGbp.rates.RON;
    };
    rateGbp();
});

let exchangeHkd = document.querySelector('.hkd');
exchangeHkd.addEventListener('click', function () {
    btn.innerHTML = 'HKD';
    exchange.innerHTML = 'HKD ' + 'Exchange rate';

    async function rateHkd() {
        let hkd = await fetch('https://api.exchangerate-api.com/v4/latest/HKD');
        let moneysHkd = await hkd.json();
        tdUsd.innerHTML = moneysHkd.rates.USD;
        tdEur.innerHTML = moneysHkd.rates.EUR;
        tdCad.innerHTML = moneysHkd.rates.CAD;
        tdDkk.innerHTML = moneysHkd.rates.DKK;
        tdRub.innerHTML = moneysHkd.rates.RUB;
        tdGbp.innerHTML = moneysHkd.rates.GBP;
        tdHkd.innerHTML = moneysHkd.rates.HKD;
        tdUah.innerHTML = moneysHkd.rates.UAH;
        tdPln.innerHTML = moneysHkd.rates.PLN;
        tdRon.innerHTML = moneysHkd.rates.RON;
    };
    rateHkd();
});

let exchangeUah = document.querySelector('.uah');
exchangeUah.addEventListener('click', function () {
    btn.innerHTML = 'UAH';
    exchange.innerHTML = 'UAH ' + 'Exchange rate';

    async function rateUah() {
        let uah = await fetch('https://api.exchangerate-api.com/v4/latest/UAH');
        let moneysUah = await uah.json();
        tdUsd.innerHTML = moneysUah.rates.USD;
        tdEur.innerHTML = moneysUah.rates.EUR;
        tdCad.innerHTML = moneysUah.rates.CAD;
        tdDkk.innerHTML = moneysUah.rates.DKK;
        tdRub.innerHTML = moneysUah.rates.RUB;
        tdGbp.innerHTML = moneysUah.rates.GBP;
        tdHkd.innerHTML = moneysUah.rates.HKD;
        tdUah.innerHTML = moneysUah.rates.UAH;
        tdPln.innerHTML = moneysUah.rates.PLN;
        tdRon.innerHTML = moneysUah.rates.RON;
    };
    rateUah();
});

let exchangePln = document.querySelector('.pln');
exchangePln.addEventListener('click', function () {
    btn.innerHTML = 'PLN';
    exchange.innerHTML = 'PLN ' + 'Exchange rate';

    async function ratePln() {
        let pln = await fetch('https://api.exchangerate-api.com/v4/latest/PLN');
        let moneysPln = await pln.json();
        tdUsd.innerHTML = moneysPln.rates.USD;
        tdEur.innerHTML = moneysPln.rates.EUR;
        tdCad.innerHTML = moneysPln.rates.CAD;
        tdDkk.innerHTML = moneysPln.rates.DKK;
        tdRub.innerHTML = moneysPln.rates.RUB;
        tdGbp.innerHTML = moneysPln.rates.GBP;
        tdHkd.innerHTML = moneysPln.rates.HKD;
        tdUah.innerHTML = moneysPln.rates.UAH;
        tdPln.innerHTML = moneysPln.rates.PLN;
        tdRon.innerHTML = moneysPln.rates.RON;
    };
    ratePln();
});

let exchangeRon = document.querySelector('.ron');
exchangeRon.addEventListener('click', function () {
    btn.innerHTML = 'RON';
    exchange.innerHTML = 'RON ' + 'Exchange rate';

    async function rateRon() {
        let ron = await fetch('https://api.exchangerate-api.com/v4/latest/RON');
        let moneysRon = await ron.json();
        tdUsd.innerHTML = moneysRon.rates.USD;
        tdEur.innerHTML = moneysRon.rates.EUR;
        tdCad.innerHTML = moneysRon.rates.CAD;
        tdDkk.innerHTML = moneysRon.rates.DKK;
        tdRub.innerHTML = moneysRon.rates.RUB;
        tdGbp.innerHTML = moneysRon.rates.GBP;
        tdHkd.innerHTML = moneysRon.rates.HKD;
        tdUah.innerHTML = moneysRon.rates.UAH;
        tdPln.innerHTML = moneysRon.rates.PLN;
        tdRon.innerHTML = moneysRon.rates.RON;
    };
    rateRon();
});