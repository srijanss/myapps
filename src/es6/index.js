import { startTimer } from './timer'

const element = document.createElement('div')
const btn = document.querySelector('#reset-btn')
const timerblock = document.querySelector('h1')
let setCount = 0
let workCounter = 0
let restCounter = 0
let intervalTimer = startTimer(timerblock, setCount)

btn.addEventListener('click', (e) => {
  e.preventDefault()
  clearInterval(intervalTimer)
  setCount = 0
  workCounter = 0
  restCounter = 0
  intervalTimer = startTimer(timerblock, setCount, workCounter, restCounter)
})
