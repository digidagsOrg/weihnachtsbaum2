input.onButtonPressed(Button.A, function () {
    if (red == 0) {
        pins.analogWritePin(AnalogPin.P1, 1023)
        red = 1
    } else {
        pins.analogWritePin(AnalogPin.P1, 0)
        red = 0
    }
})
input.onButtonPressed(Button.B, function () {
    if (yellow == 0) {
        pins.analogWritePin(AnalogPin.P2, 1023)
        yellow = 1
    } else {
        pins.analogWritePin(AnalogPin.P2, 0)
        yellow = 0
    }
})
let yellow = 0
let red = 0
red = 0
yellow = 0
let strip = neopixel.create(DigitalPin.P0, 10, NeoPixelMode.RGB)
strip.setBrightness(50)
strip.showRainbow(1, 360)
basic.forever(function () {
    strip.rotate(1)
    strip.show()
    basic.pause(100)
})
