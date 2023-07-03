import { Elements } from "./elements.js"
import { Button } from "../../modules/controls.js"
import { Timer } from "../../modules/timer.js"
import { playSound } from "../../modules/sounds.js"

let { newMinutes, minutesOnDisplay, secondsOnDisplay, countdown } = Elements()

export const audio = playSound()

const timer = Timer({ minutesOnDisplay, secondsOnDisplay, countdown })

export function Events({ play, stopwatch, volume, lightbulb }) {
  play.onclick = () => {
    if (!play.classList.contains("pause")) {
      Button.play()
      audio.activeAudio.play()
      timer.timerCountdown()
    } else {
      Button.pause()
      timer.pauseTimerDisplay()
    }
  }

  stopwatch.onclick = () => {
    if (!stopwatch.classList.contains("stop")) {
      newMinutes = Number(prompt("Enter the number of minutes"))

      if (newMinutes <= 0) return
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
      audio.backgroundMusic.play()
    } else {
      Button.mute()
      audio.backgroundMusic.pause()
    }
  }

  lightbulb.onclick = () => {
    Button.turnOffLight()
  }
}
