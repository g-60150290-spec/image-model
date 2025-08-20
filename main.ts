bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Happy)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.Sad)
})
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    recivedstring = bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine))
    if (recivedstring == "Sabrini") {
        basic.showIcon(IconNames.Heart)
    }
    if (recivedstring == "KAK AISYAH") {
        basic.showIcon(IconNames.Sad)
    }
})
let recivedstring = ""
bluetooth.startUartService()
basic.showIcon(IconNames.Square)
