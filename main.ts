input.onButtonPressed(Button.A, function () {
    if (gameStatus == 2) {
        if (myXSpot > 0) {
            led.unplot(myXSpot, myYSpot)
            myXSpot = myXSpot - 1
            led.plot(myXSpot, myYSpot)
        }
    }
})
function intervalFire () {
    while (gameStatus == 2) {
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
        led.plot(myXSpot, myYSpot)
        gameStatus = 2
        intervalFire()
    } else if (gameStatus == 2) {
        led.unplot(myXSpot, myYSpot)
        gameStatus = 1
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        gameStatus = 1
    }
})
input.onButtonPressed(Button.B, function () {
    if (gameStatus == 2) {
        if (myXSpot < 4) {
            led.unplot(myXSpot, myYSpot)
            myXSpot = myXSpot + 1
            led.plot(myXSpot, myYSpot)
        }
    }
})
function goDown () {
    shineXSpot = randint(0, 4)
    shineYSpot = 0
    for (let index = 0; index <= 4; index++) {
        if (checkIfHit(shineXSpot, shineYSpot)) {
            gameStatus = 0
            basic.showIcon(IconNames.No)
            break;
        } else {
            led.plot(shineXSpot, shineYSpot)
            basic.pause(200)
            if (checkIfHit(shineXSpot, shineYSpot) == false) {
                led.unplot(shineXSpot, shineYSpot)
            }
            if (index != 4) {
                shineYSpot = shineYSpot + 1
            }
        }
    }
}
let shineYSpot = 0
let shineXSpot = 0
let myYSpot = 0
let myXSpot = 0
let gameStatus = 0
// 0:over, 1:stop, 2:start
gameStatus = 1
myXSpot = 2
myYSpot = 4
if (gameStatus == 1) {
    basic.showString("A+B!")
}
