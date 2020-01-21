let main = document.querySelector('.main');
main.style.display = "none";

let btn = document.querySelector('.btn');
let exchange = document.querySelector('.exchange');

let menu = document.querySelector('.menu');

let currency = localStorage.getItem('currency');

if (!currency) {
    localStorage.setItem('currency', 'USD');
}

btn.innerHTML = `${currency}`;
exchange.innerHTML = `${currency} Exchange rate`;

let menuEls = document.querySelectorAll('.dropdown-item');

for (let el of menuEls) {
    if (el.textContent == currency) {
        el.classList.add('active');
    }
}

setTimeout(ratesMoneys, 2000);

function buildTable(event) {
    let textContent = event.target.textContent;
    btn.innerHTML = `${textContent}`;
    exchange.innerHTML = `${textContent} Exchange rate`;

    let activeEl = document.querySelector('.dropdown-item.active');

    activeEl.classList.remove('active');
    event.target.classList.add('active');

    localStorage.setItem('currency', textContent);
    ratesMoneys();
};
menu.addEventListener('click', buildTable);

async function ratesMoneys() {
    let spinner = document.querySelector('.spinner');
    let response = await fetch(`https://api.exchangerate-api.com/v4/latest/${localStorage.getItem('currency')}`);
    let moneys = await response.json();
    let arrKey = Object.keys(moneys.rates);
    let arrValue = Object.values(moneys.rates);
    rateTable(arrKey, arrValue);
    spinner.style.display = "none";
    main.style.display = "block";
};

function rateTable(arrKey, arrValue) {
    let tbody = document.querySelector('.tbody');
    tbody.innerHTML = '';
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
