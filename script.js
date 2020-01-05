let btn = document.querySelector('.btn');
let exchange = document.querySelector('.exchange');

let menu = document.querySelector('.menu');

function buildTable() {
    menu.addEventListener('click', function (event) {
        let textContent = event.target.textContent;
        btn.innerHTML = `${textContent}`;
        exchange.innerHTML = `${textContent} Exchange rate`;
        ratesMoneys(textContent);
    });
};

async function ratesMoneys(textContent) {
    let response = await fetch(`https://api.exchangerate-api.com/v4/latest/${textContent}`);
    let moneys = await response.json();
    let arrKey = Object.keys(moneys.rates);
    let arrValue = Object.values(moneys.rates);
    rateTable(arrKey, arrValue);
};
buildTable();

function rateTable(arrKey, arrValue) {
    let tbody = document.querySelector('.tbody');

    for (let i = 0; i < arrKey.length; i++) {
        let string = `
        <tr>
            <td> ${ arrKey[i]} </td>
            <td class="tdusd"> ${ arrValue[i]} </td>
        </tr>
        `;
        tbody.insertAdjacentHTML('beforeend', string);
    };
};
