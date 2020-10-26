let i = 0
basic.forever(function () {
    for (let i = 0; i <= 8; i++) {
        if (i >= 0 && i <= 4) {
            led.plot(4, i - 0)
        }
        if (i >= 1 && i <= 5) {
            led.plot(3, i - 1)
        }
        if (i >= 2 && i <= 6) {
            led.plot(2, i - 2)
        }
        if (i >= 3 && i <= 7) {
            led.plot(1, i - 3)
        }
        if (i >= 4 && i <= 8) {
            led.plot(0, i - 4)
        }
        basic.pause(500)
    }
})
