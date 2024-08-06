import { renderHistoryResult, renderResult } from "./markups.js"
import state from "./state.js"
import { convertTime, formatToCurrency, getFullTitle } from "./utils.js"
import variables from "./variables.js"

const { success, resultFrom, resultTo, formResults, rateConversion, rateLast, toSelect, fromSelect, resultFrom2, resultTo2, formResults2 } = variables

export const handleChange = ({ target: {value, name} }) => {
    state.pair = {
        ...state.pair,
        [name]: value,

    }
}

export const handleInput = ({target: {value, name}}) => {
    state[name] = Number(value);
}

const insertResults = ({base_code: baseCode, target_code: targetCode, 
    conversion_rate: rate, conversion_result: result, time_last_update_utc: time
}) => {
    const from = {
        code: baseCode,
        amount: state.amount,
        full: getFullTitle(state.codes, baseCode)
    }
    const to = {
        code: targetCode,
        amount: result,
        full: getFullTitle(state.codes, targetCode)
    }

    resultFrom.innerHTML = renderResult(from)
    resultTo.innerHTML = renderResult(to)

    const baseValue = formatToCurrency(baseCode, 1)
    const targetValue = formatToCurrency(targetCode, rate)

    rateConversion.innerText = `${baseValue} = ${targetValue}`
    rateLast.innerText = `Last updated ${convertTime(time)}`
    formResults.classList.add('show')


}

export const handleSubmit = async (e) => {
    e?.preventDefault();

    const { url, amount, pair: {from, to}} = state
    if(!amount || !from || !to) return
    state.loading = true

    try {
        const response = await fetch(`${url}/pair/${from}/${to}/${amount}`)
        const data = await response.json();

        if(data.result === success){
            insertResults(data)
        }
        state.loading = false
    } catch(err) {
        console.log(err)
    }
}

export const switchCurrencies = () => {
    const { pair: { to, from } } = state;
    if(!to || !from) return;
    toSelect.value = from
    fromSelect.value = to
    state.pair = {
        to: from,
        from: to
    }


}

export const insertHistoryResults = () => {
    const from = {
        code: state.historyBaseValue,
        amount: 1,
        full: getFullTitle(state.codes, state.historyBaseValue)
    }
    const to = {
        code: state.historyGoalValue,
        amount: state.goalRate,
        full: getFullTitle(state.codes, state.historyGoalValue)
    }

    resultFrom2.innerHTML = renderHistoryResult(from)
    resultTo2.innerHTML = renderHistoryResult(to)
    
    formResults2.classList.add('show')


}