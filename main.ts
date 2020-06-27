input.onButtonPressed(Button.A, function () {
    if (遊戲狀態 == "開始") {
        if (我的X座標 > 0) {
            led.unplot(我的X座標, 我的Y座標)
            我的X座標 = 我的X座標 - 1
            led.plot(我的X座標, 我的Y座標)
        }
    }
})
function 一個攻擊 () {
    攻擊的X座標 = randint(0, 4)
    攻擊的Y座標 = 0
    for (let index = 0; index <= 4; index++) {
        if (確認是否擊中(攻擊的X座標, 攻擊的Y座標) == true) {
            遊戲狀態 = "結束"
            basic.showIcon(IconNames.No)
            break;
        } else {
            led.plot(攻擊的X座標, 攻擊的Y座標)
            basic.pause(200)
            if (確認是否擊中(攻擊的X座標, 攻擊的Y座標) == false) {
                led.unplot(攻擊的X座標, 攻擊的Y座標)
            }
            if (index < 4) {
                攻擊的Y座標 = 攻擊的Y座標 + 1
            }
        }
    }
}
function 確認是否擊中 (num: number, num2: number) {
    if (num == 我的X座標 && num2 == 4) {
        return true
    }
    return false
}
function 重複攻擊 () {
    while (遊戲狀態 == "開始") {
        一個攻擊()
    }
}
input.onButtonPressed(Button.AB, function () {
    if (遊戲狀態 == "停止") {
        led.plot(我的X座標, 我的Y座標)
        遊戲狀態 = "開始"
        重複攻擊()
    } else if (遊戲狀態 == "開始") {
        led.stopAnimation()
        遊戲狀態 = "停止"
    } else {
        led.stopAnimation()
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        遊戲狀態 = "停止"
    }
})
input.onButtonPressed(Button.B, function () {
    if (遊戲狀態 == "開始") {
        if (我的X座標 < 4) {
            led.unplot(我的X座標, 我的Y座標)
            我的X座標 = 我的X座標 + 1
            led.plot(我的X座標, 我的Y座標)
        }
    }
})
let 攻擊的Y座標 = 0
let 攻擊的X座標 = 0
let 我的Y座標 = 0
let 我的X座標 = 0
let 遊戲狀態 = ""
// 0:over, 1:stop, 2:start
遊戲狀態 = "停止"
我的X座標 = 2
我的Y座標 = 4
if (遊戲狀態 == "停止") {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
}
