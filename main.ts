input.onButtonPressed(Button.A, function () {
    if (gameStatus != 0) {
        if (myXSpot > 0) {
            led.toggle(myXSpot, myYSpot)
            myXSpot = myXSpot - 1
            led.toggle(myXSpot, myYSpot)
        }
    }
})
function intervalFire () {
    while (gameStatus == 1) {
        goDown()
    }
}
function checkIfHit (num: number, num2: number) {
    if (num == myXSpot && num2 == 4) {
        return true
    }
    return false
}
input.onButtonPressed(Button.AB, function () {
    if (gameStatus == 1) {
        led.unplot(myXSpot, myYSpot)
        gameStatus = 2
    } else if (gameStatus == 2) {
        led.plot(myXSpot, myYSpot)
        gameStatus = 1
        intervalFire()
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        gameStatus = 2
    }
})
input.onButtonPressed(Button.B, function () {
    if (gameStatus != 0) {
        if (myXSpot < 4) {
            led.toggle(myXSpot, myYSpot)
            myXSpot = myXSpot + 1
            led.toggle(myXSpot, myYSpot)
        }
    }
})
function goDown () {
    shineXSpot = randint(0, 4)
    shineYSpot = 0
    led.toggle(shineXSpot, shineYSpot)
    for (let index = 0; index < 5; index++) {
        basic.pause(200)
        led.unplot(shineXSpot, shineYSpot)
        shineYSpot = shineYSpot + 1
        led.plot(shineXSpot, shineYSpot)
        if (checkIfHit(shineXSpot, shineYSpot)) {
            led.unplot(myXSpot, myYSpot)
            basic.showIcon(IconNames.No)
            gameStatus = 0
        }
    }
}
let shineYSpot = 0
let shineXSpot = 0
let myYSpot = 0
let myXSpot = 0
let gameStatus = 0
// 0:over, 1:start, 2:stop
gameStatus = 1
myXSpot = 2
myYSpot = 4
