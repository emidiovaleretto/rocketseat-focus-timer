import {
  play,
  stopwatch,
  volume,
  body,
  lightbulb,
} from "../assets/js/script.js"

const Button = {
  play() {
    play.classList.toggle("pause")
    stopwatch.classList.add("stop")
  },
  stopwatch() {
    stopwatch.classList.toggle("stop")
  },
  volume() {
    volume.classList.toggle("mute")
  },
  turnOffLight() {
    body.style.opacity =
      body.style.opacity === "1" || body.style.opacity === "" ? "0.4" : "1"

    lightbulb.setAttribute(
      "title",
      lightbulb.getAttribute("title") === "Click to turn off the light"
        ? "Click to turn on the light"
        : "Click to turn off the light"
    )
  },
}

export default Button
