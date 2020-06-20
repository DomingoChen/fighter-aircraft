input.onButtonPressed(Button.A, function () {
    if (mySpot > 0) {
        led.unplot(mySpot, 4)
        mySpot = mySpot - 1
        led.plot(mySpot, 4)
    }
})
input.onButtonPressed(Button.AB, function () {
    led.plot(mySpot, 4)
})
input.onButtonPressed(Button.B, function () {
    if (mySpot < 4) {
        led.unplot(mySpot, 4)
        mySpot = mySpot + 1
        led.plot(mySpot, 4)
    }
})
let mySpot = 0
mySpot = 2
basic.forever(function () {
	
})
