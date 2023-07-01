import Button from "../../modules/controls.js"

export const body = document.querySelector("body")
export const lightbulb = document.querySelector(".lightbulb")
export const play = document.querySelector(".play")
export const stopwatch = document.querySelector(".stopwatch")
export const volume = document.querySelector(".volume")
const timer = document.querySelector(".timer")

let minutes, seconds, countdown

lightbulb.onclick = () => {
  Button.turnOffLight()
}

play.onclick = () => {
  if (!play.classList.contains("pause")) {
    Button.play()
    timerCountdown()
  } else {
    Button.pause()
    clearInterval(countdown)
  }
}

stopwatch.onclick = () => {
  if (!stopwatch.classList.contains("stop")) {
    Button.stopwatch()
  } else {
    Button.stop()
    clearInterval(countdown)
    updateTimerDisplay(minutes, 0)
  }
}

volume.onclick = () => {
  if (!volume.classList.contains("volume")) {
    Button.volume()
  } else {
    Button.mute()
  }
}

const updateTimerDisplay = (minutes, seconds) => {
  let minutesOnDisplay = document.querySelector(".minutes")
  let secondsOnDisplay = document.querySelector(".seconds")

  minutesOnDisplay.innerHTML = String(minutes).padStart(2, "0")
  secondsOnDisplay.innerHTML = String(seconds).padStart(2, "0")
}

const timerCountdown = () => {
  minutes = 10
  seconds = 60

  countdown = setInterval(() => {
    if (seconds <= 0) {
      minutes--
      seconds = 59
    } else {
      seconds--
    }

    updateTimerDisplay(minutes - 1, seconds)

    if (minutes === 0 && seconds <= 10) {
      timer.classList.add("txt-red")
    }

    if (minutes === 0 && seconds === 0) {
      clearInterval(countdown)
      Button.play()
      Button.stopwatch()
      timer.classList.remove("txt-red")
    }
  }, 1000)
}
