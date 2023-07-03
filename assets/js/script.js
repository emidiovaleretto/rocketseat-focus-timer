import { Elements } from "../../modules/elements.js"
import { Events } from "../../modules/events.js"

const { lightbulb, play, stopwatch, volume } = Elements()
Events({ play, stopwatch, volume, lightbulb })
