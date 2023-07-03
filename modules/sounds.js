export function playSound() {
  const activeAudio = new Audio(
    "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true",
  )

  const kitchenTimer = new Audio(
    "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true",
  )

  const backgroundMusic = new Audio(
    "https://github.com/emidiovaleretto/resources/blob/main/audios/lofi.mp3?raw=true",
  )

  backgroundMusic.loop = true

  return {
    activeAudio,
    kitchenTimer,
    backgroundMusic,
  }
}
