import {
  play,
  stopwatch,
  volume,
  body,
  lightbulb,
} from "../assets/js/script.js"

const Button = {
  play() {
    play.classList.add("pause")
    play.classList.remove("play")
    stopwatch.classList.add("stop")
    stopwatch.classList.remove("stopwatch")
  },
  pause() {
    play.classList.remove("pause")
    play.classList.add("play")
    stopwatch.classList.add("stopwatch")
    stopwatch.classList.remove("stop")
  },
  stop() {
    stopwatch.classList.remove("stop")
    stopwatch.classList.add("stopwatch")
    play.classList.remove("pause")
    play.classList.add("play")
  },
  stopwatch() {
    stopwatch.classList.add("stop")
    stopwatch.classList.remove("stopwatch")
  },
  volume() {
    volume.classList.add("volume")
    volume.classList.remove("mute")
  },
  mute() {
    volume.classList.add("mute")
    volume.classList.remove("volume")
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
