bradio.onReceivedString(function (receivedString) {
    serial.writeLine("got: >" + receivedString + "<")
    // serial.writeLine("setting start to true ...  " + START)
    if (receivedString == "SYNC") {
        // serial.writeLine("setting sync to 5 ...  " + START)
        SYNC = 5
    } else if (receivedString == "START") {
        START = true
        SYNC = 5
    }
})
radio.onReceivedValue(function (name, value) {
    serial.writeLine("got :" + name + ": " + value)
    if (name == "mr") {
        mr = value
    } else if (name == "ml") {
        ml = value
    } else if (name == "clamp") {
        clamp = value
    }
})
function moveclamp (angle: number) {
	
}
let ml = 0
let mr = 0
let START = false
let clamp = 0
let SYNC = 0
clamp = 120
let clampActual = 120
serial.writeLine("boot")
let WIFIgroup = 153
let mrspin = -1
let mlspin = -1
basic.showIcon(IconNames.LeftTriangle)
neZha.setMotorSpeed(neZha.MotorList.M1, 0)
neZha.setMotorSpeed(neZha.MotorList.M4, 0)
radio.setGroup(WIFIgroup)
serial.writeLine("Pre start ...")
while (!(START)) {
    basic.showIcon(IconNames.Heart)
    serial.writeLine("waiting for START ... " + START + SYNC)
    basic.pause(500)
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(500)
}
basic.forever(function () {
    basic.showNumber(SYNC)
    if (SYNC <= 1) {
        mr = 0
        ml = 0
        clamp = 180
    }
    SYNC = Math.clamp(0, 100, (SYNC - 2))
if (clampActual > clamp) {
        clampActual += 0 - 5
    }
    if (clampActual < clamp) {
        clampActual += 5
    }
    neZha.setMotorSpeed(neZha.MotorList.M1, mr * mrspin)
    neZha.setMotorSpeed(neZha.MotorList.M4, ml * mlspin)
    neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S1, clampActual)
})
