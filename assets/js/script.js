import Button from "../../modules/controls.js"

export const body = document.querySelector("body")
export const lightbulb = document.querySelector(".lightbulb")
export const play = document.querySelector(".play")
export const stopwatch = document.querySelector(".stopwatch")
export const volume = document.querySelector(".volume")

lightbulb.onclick = () => {
  Button.turnOffLight()
}

play.onclick = () => {
  Button.play()
}

stopwatch.onclick = () => {
  Button.stopwatch()
}

volume.onclick = () => {
  Button.volume()
}
