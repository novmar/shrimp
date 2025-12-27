let i = 0
basic.showIcon(IconNames.LeftTriangle)
neZha.setMotorSpeed(neZha.MotorList.M1, -40)
neZha.setMotorSpeed(neZha.MotorList.M4, -40)
basic.forever(function () {
    neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S1, 180)
    basic.pause(500)
    neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S1, 90)
    basic.pause(500)
})
basic.forever(function () {
    i = PlanetX_Basic.ultrasoundSensor(PlanetX_Basic.DigitalRJPin.J1, PlanetX_Basic.Distance_Unit_List.Distance_Unit_cm)
    if (i >= 4 && i <= 20) {
        neZha.setMotorSpeed(neZha.MotorList.M1, 100)
        neZha.setMotorSpeed(neZha.MotorList.M4, -100)
        basic.pause(500)
        neZha.setMotorSpeed(neZha.MotorList.M1, -40)
        neZha.setMotorSpeed(neZha.MotorList.M4, -40)
    }
})
