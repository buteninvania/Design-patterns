abstract class  Car {
    private beepBehavior: BeepBehavior
    private driveBehavior: DriveBehavior
    protected constructor(public name:string, beepBehavior: BeepBehavior, driveBehavior: DriveBehavior) {
        this.beepBehavior = beepBehavior
        this.driveBehavior = driveBehavior
    }
    public setBeepBehavior(beepBehavior: BeepBehavior) {
        this.beepBehavior = beepBehavior
        console.log( "У " + this.name + " вы отключили сигналку")
    }
    public setDriveBehavior(driveBehavior: DriveBehavior) {
        this.driveBehavior = driveBehavior
        console.log("Изменил конфигурацию двигателя")
    }
    printCar() {
        console.log(this.name + ": модель машины")
    }
    abstract display()
    public performBeep(): void {
        this.beepBehavior.beep(this.name)
    }
    public performDrive(): void {
        this.driveBehavior.drive(this.name)
    }
}
abstract class Moto {
    beepBehavior: BeepBehavior
    protected constructor(public name: string, beepBehavior: BeepBehavior) {
        this.beepBehavior = beepBehavior
    }
    public printName() {
        console.log(this.name + " : модель мотацикла")
    }
    public performBeep() {
        this.beepBehavior.beep(this.name)
    }
}

interface BeepBehavior {
    beep(model)
}
class AutoBeep implements BeepBehavior {
    beep(model) {
        console.log(model + ": сигналка очень громкая")
    }
}
class NoBeep implements BeepBehavior {
    beep(model) {
        console.log(model + ": нет сигнала")
    }
}

interface DriveBehavior {
    drive(model)
}
class Driver implements DriveBehavior {
    drive(model) {
        console.log(model + ": машина поехала")
    }
}
class NoDrive implements DriveBehavior {
    drive(model) {
        console.log(model + ": не может ехать")
    }
}
class NitroDriver implements DriveBehavior {
    drive(model) {
        console.log(model + ": машина на нитрухе!")
    }
}

class PetrolCar extends Car {
    constructor(name) {
        super(name, new AutoBeep(), new Driver());
    }
    display() {
        console.log(this.name + ": эта машина на бензине")
    }
}
class DieselCar extends Car {
    constructor(name) {
        super(name, new AutoBeep(), new Driver());
    }
    display() {
        console.log(this.name + ": Эта машина на дизеле")
    }
}
class ToyCar extends Car {
    constructor(name) {
        super(name, new NoBeep(), new Driver());
    }
    display() {
        console.log(this.name + ": эта машина игрушечная")
    }
}
class LayoutCar extends Car {
    constructor(name) {
        super(name, new NoBeep(), new NoDrive());
    }
    display() {
        console.log(this.name + ": эта машина является макетом на картинке")
    }
}

class SportMoto extends Moto {
    constructor(name) {
        super(name, new AutoBeep());
    }
}

let bmw = new PetrolCar("BMW")
let mercedes = new DieselCar("MERCEDES")
let lada = new ToyCar("LADA")
let audi = new LayoutCar("AUDI")
let kawasaki = new SportMoto("KAWASAKI")


