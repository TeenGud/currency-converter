import { insertHistoryResults } from "./convert.js";
import state from "./state.js"
import variables from './variables.js'



const fetchHistoryData = async () => {
    const { success } = variables
    const { url, historyBaseValue:code,  historyYear: year, historyMonth: month, historyDay: day} = state;

    try {
        const response = await fetch(`${url}/history/${code}/${year}/${month}/${day}`)
        const data = await response.json()

        if(data.result === success) {
            const rate = Object.entries(data.conversion_rates).find(([key]) => key === state.historyGoalValue && key !== code)
            state.goalRate = rate[1]
            insertHistoryResults()
            
        }
    }catch(err){
        console.log(err)
    }
}


export const handleFromHistory = ({ target }) => {
    state.historyBaseValue = target.value
}

export const handleToHistory = ({ target }) => {
    state.historyGoalValue = target.value
}

export const handleYearHistory = ({ target }) => {
    state.historyYear = target.value
    console.log(state.historyYear)
}
export const handleMonthHistory = ({ target }) => {
    state.historyMonth = target.value
    console.log(state.historyMonth)
}
export const handleDayHistory = ({ target }) => {
    state.historyDay = target.value
    console.log(state.historyDay)
}

export const handleHistorySubmit = (e) => {
    e.preventDefault()
    fetchHistoryData()

}