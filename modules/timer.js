import { newMinutes } from "../../assets/js/script.js"

const timer = document.querySelector(".timer")

let minutes, seconds

export function Timer({ minutesOnDisplay, secondsOnDisplay, countdown }) {
  function updateTimerDisplay(minutes, seconds) {
    minutesOnDisplay.textContent = String(minutes).padStart(2, "0")
    secondsOnDisplay.textContent = String(seconds).padStart(2, "0")
  }

  function resetTimerDisplay() {
    clearInterval(countdown)
    updateTimerDisplay(newMinutes ? newMinutes : 25, 0)
  }

  function pauseTimerDisplay() {
    clearInterval(countdown)
  }

  function timerCountdown() {
    countdown = setInterval(() => {
      minutes = Number(minutesOnDisplay.innerHTML)
      seconds = Number(secondsOnDisplay.innerHTML)

      if (seconds <= 0) {
        minutes--
        seconds = 59
      } else {
        seconds--
      }

      updateTimerDisplay(minutes, seconds)

      if (minutes === 0 && seconds <= 10) {
        timer.classList.add("txt-red")
      }

      if (minutes === 0 && seconds === 0) {
        clearInterval(countdown)
        Button.play()
        Button.stop()
        timer.classList.remove("txt-red")
      }
    }, 1000)
  }

  return {
    updateTimerDisplay,
    resetTimerDisplay,
    pauseTimerDisplay,
    timerCountdown,
  }
}
