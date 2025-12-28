radio.onReceivedString(function (receivedString) {
    if (receivedString = "SYNC") {
        SYNC = 5
    } else if (receivedString = "START") {
        START = true
    }
})
radio.onReceivedValue(function (name, value) {
    if (name = "mr") {
        mr = value
    } else if (name = "ml") {
        ml = value
    } else if (name = "clamp") {
        clamp = value
    }
})
let ml = 0
let mr = 0
let SYNC = 0
let START = false
let clamp = 0
let WIFIgroup = 153
let mrspin = 1
let mlspin = 1
clamp = 120
basic.showIcon(IconNames.LeftTriangle)
neZha.setMotorSpeed(neZha.MotorList.M1, 0)
neZha.setMotorSpeed(neZha.MotorList.M4, 0)
radio.setGroup(WIFIgroup)
while (!(START)) {
    basic.showIcon(IconNames.Heart)
    basic.pause(500)
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(500)
}
basic.forever(function () {
    if (SYNC >= 1) {
        basic.showNumber(SYNC)
        neZha.setMotorSpeed(neZha.MotorList.M1, mr * mrspin)
        neZha.setMotorSpeed(neZha.MotorList.M4, ml * mlspin)
        SYNC += 0 - 1
    }
})
