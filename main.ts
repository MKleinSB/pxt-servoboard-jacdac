namespace modules {
    /**
     * Client for Calliope Servoboard Servo at Pin C14
     * M.Klein 21.10.2025
     */
    //% fixedInstance whenUsed block="Servo C14"
    export const CalliServ0 = new ServoClient("Servo C14?dev=self&srvo=0&name=C14")

    /**
      * Calliope Servoboard Servo at Pin C15
      */
    //% fixedInstance whenUsed block="Servo C15"
    export const CalliServ1 = new ServoClient("Servo C15?dev=self&srvo=1&name=C15")
    /**
       * Calliope Servoboard Servo at Pin C8
       */
    //% fixedInstance whenUsed block="Servo C8"
    export const CalliServ2 = new ServoClient("Servo C8?dev=self&srvo=2&name=C8")
    /**
       * Calliope Servoboard Servo at Pin C9
       */
    //% fixedInstance whenUsed block="Servo C9"
    export const CalliServ3 = new ServoClient("Servo C9?dev=self&srvo=3&name=C9")


}
namespace servers {
    function start() {
        jacdac.productIdentifier = 0x32690c10
        jacdac.deviceDescription = "Calliope Servoboard 4 servo"
        jacdac.startSelfServers(() => [
            new jacdac.ServoServer(AnalogPin.C14, { instanceName: "C14" }),
            new jacdac.ServoServer(AnalogPin.C15, { instanceName: "C15" }),
            new jacdac.ServoServer(AnalogPin.C8, { instanceName: "C8" }),
            new jacdac.ServoServer(AnalogPin.C9, { instanceName: "C9" }),
        ])
    }
    start()
}
