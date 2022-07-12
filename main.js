import './style.css'
import createLogger from "./AbstractFactory";

const myLogger = createLogger("development")
myLogger.error("Oops, something went wrong")

const myOtherLogger = createLogger("production")
myOtherLogger.warn("HELLO WORLD") // info and debug wont work on this instance