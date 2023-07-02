import { Button } from "../../modules/controls.js"
import { Timer } from "../../modules/timer.js"

export const lightbulb = document.querySelector(".lightbulb")
export const play = document.querySelector(".play")
export const stopwatch = document.querySelector(".stopwatch")
export const volume = document.querySelector(".volume")

export let newMinutes

let minutesOnDisplay = document.querySelector(".minutes")
let secondsOnDisplay = document.querySelector(".seconds")

let countdown

const timer = Timer({ minutesOnDisplay, secondsOnDisplay, countdown })

lightbulb.onclick = () => {
  Button.turnOffLight()
}

play.onclick = () => {
  if (!play.classList.contains("pause")) {
    Button.play()
    timer.timerCountdown()
  } else {
    Button.pause()
    timer.pauseTimerDisplay()
  }
}

stopwatch.onclick = () => {
  if (!stopwatch.classList.contains("stop")) {
    newMinutes = prompt("Enter the number of minutes")
    timer.updateTimerDisplay(newMinutes ? newMinutes : minutes, 0)
    Button.stopwatch()
  } else {
    Button.stop()
    timer.resetTimerDisplay()
  }
}

volume.onclick = () => {
  if (!volume.classList.contains("volume")) {
    Button.volume()
  } else {
    Button.mute()
  }
}
