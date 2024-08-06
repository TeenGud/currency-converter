import variables from "./variables.js";
import { fetchCodes, handleTabClick } from "./index.js";
import { handleInput, handleSubmit, switchCurrencies } from "./convert.js";
import { addCurrency, handleActionClick, handleAddSelectChange, handleSingleSelectChange } from "./single.js";
import { handleDayHistory, handleFromHistory, handleHistorySubmit, handleMonthHistory, handleToHistory, handleYearHistory } from "./history.js";

const { amountInput, form, switchButton, tabs, currentCurrency,  currentCurrencyList, singleSelect, addButton, addCurrencySelect, fromHistory, toHistory, yearHistory, monthHistory, dayHistory } = variables



fetchCodes()

amountInput.addEventListener('keyup', handleInput)
form.addEventListener("submit", handleSubmit)
switchButton.addEventListener('click', switchCurrencies)


tabs.forEach((tab) => tab.addEventListener('click', handleTabClick))


currentCurrency.addEventListener('click', handleActionClick)
currentCurrencyList.addEventListener('click', handleActionClick)
singleSelect.addEventListener('change', handleSingleSelectChange)
addButton.addEventListener('click', addCurrency)
addCurrencySelect.addEventListener('change', handleAddSelectChange)

fromHistory.addEventListener('change', handleFromHistory)
toHistory.addEventListener('change', handleToHistory)

yearHistory.addEventListener('keyup', handleYearHistory)
monthHistory.addEventListener('keyup', handleMonthHistory)
dayHistory.addEventListener('keyup', handleDayHistory)

historySubmit.addEventListener('click', handleHistorySubmit)
