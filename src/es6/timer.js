
const updateCounter = (timerblock, startTime, counter) => {
  if (startTime - counter === 0 && startTime === 10) {
    timerblock.innerHTML = 'Rest'
  } else if (startTime - counter === 0 && startTime === 3) {
    timerblock.innerHTML = 'Work'
  } else {
    timerblock.innerHTML = startTime - counter
  }
  counter += 1
  return counter
}

export const startTimer = (timerblock, setCount, workCounter, restCounter) => {
  const setCounter = document.querySelector('#number-of-sets')
  setCounter.innerHTML = setCount
  let workoutStartTime = 10
  let restStartTime = 3
  const mainContent = document.querySelector('.main-content')

  let intervalTimer = setInterval(() => {
    if (workCounter <= workoutStartTime) {
      mainContent.style.backgroundColor = 'yellowgreen'
      workCounter = updateCounter(timerblock, workoutStartTime, workCounter)
      if (workCounter > workoutStartTime) {
        setCount += 1
        setCounter.innerHTML = setCount
      }
    } else {
      mainContent.style.backgroundColor = 'tomato'
      if (restCounter <= restStartTime) {
        restCounter = updateCounter(timerblock, restStartTime, restCounter)
      } else {
        workCounter = 0
        restCounter = 0
        mainContent.style.backgroundColor = 'yellowgreen'
        workCounter = updateCounter(timerblock, workoutStartTime, workCounter)
      }
    }
  }, 1000)
  return intervalTimer
}
