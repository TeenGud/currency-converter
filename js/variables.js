export default {
    success: "success",
    selects: document.querySelectorAll('select'),
    amountInput: document.getElementById('amount'),
    form: document.querySelector('.form'),
    resultFrom: document.getElementById('resultFrom'),
    resultTo: document.getElementById('resultTo'),
    formResults: document.querySelector('.form-results'),
    rateConversion: document.querySelector('.rate-conversion'),
    rateLast: document.querySelector('.rate-last'),
    switchButton: document.querySelector('.switch-currencies'),
    toSelect: document.getElementById('to'),
    fromSelect: document.getElementById('from'),
    tabs: document.querySelectorAll('.tab'),
    currentCurrency: document.querySelector('.currency-single__item'),
    currentCurrencyList: document.querySelector('.currency-list'),
    singleSelect: document.getElementById('singleSelect'),
    addButton: document.querySelector(".currency-add__button"),
    addCurrencySelect: document.getElementById('addCurrencySelect'),

    fromHistory: document.getElementById('fromHistory'),
    toHistory: document.getElementById('toHistory'),

    yearHistory: document.getElementById('year'),
    monthHistory: document.getElementById('month'),
    dayHistory: document.getElementById('day'),

    historySubmit: document.getElementById('historySubmit'),

    resultFrom2: document.getElementById('resultFrom2'),
    resultTo2: document.getElementById('resultTo2'),
    formResults2: document.querySelector('.form2-results2'),
}