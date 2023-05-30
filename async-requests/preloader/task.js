
let items = document.getElementById('items');
let loader = document.getElementById('loader');

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');

xhr.addEventListener('readystatechange', function   () {
  if (xhr.readyState === xhr.DONE && xhr.status === 200) {
    let response = JSON.parse(xhr.responseText);
    let currencies = response.response.Valute;

for (let currency in currencies) {
    let currencyElement = currencies[currency];
    let newCurrency = document.createElement('div');
    newCurrency.className = 'item';
    
    let itemCode = document.createElement('div');
        itemCode.className = 'item__code';
        itemCode.textContent = currencyElement.CharCode;
        newCurrency.appendChild(itemCode); 

        let itemValue = document.createElement('div');
        itemValue.className = 'item__value';
        itemValue.textContent = currencyElement.Value;
        newCurrency.appendChild( itemValue); 

        let itemCurrency = document.createElement('div');
        itemCurrency.className = 'item__currency';
        itemCurrency.textContent = 'руб.'
        newCurrency.appendChild(itemCurrency); 

        items.appendChild(newCurrency);
};
        loader.classList.remove('loader_active');   

  }
});


xhr.send();


