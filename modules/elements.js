export function Elements() {
  const lightbulb = document.querySelector(".lightbulb")
  const play = document.querySelector(".play")
  const stopwatch = document.querySelector(".stopwatch")
  const volume = document.querySelector(".mute")

  let minutesOnDisplay = document.querySelector(".minutes")
  let secondsOnDisplay = document.querySelector(".seconds")

  let countdown, minutes, seconds

  return {
    lightbulb,
    play,
    stopwatch,
    volume,
    minutesOnDisplay,
    secondsOnDisplay,
    countdown,
    minutes,
    seconds,
  }
}
