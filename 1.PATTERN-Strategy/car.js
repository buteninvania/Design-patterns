var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car(name, beepBehavior, driveBehavior) {
        this.name = name;
        this.beepBehavior = beepBehavior;
        this.driveBehavior = driveBehavior;
    }
    Car.prototype.setBeepBehavior = function (beepBehavior) {
        this.beepBehavior = beepBehavior;
        console.log("У " + this.name + " вы отключили сигналку");
    };
    Car.prototype.setDriveBehavior = function (driveBehavior) {
        this.driveBehavior = driveBehavior;
        console.log("Изменил конфигурацию двигателя");
    };
    Car.prototype.printCar = function () {
        console.log(this.name + ": модель машины");
    };
    Car.prototype.performBeep = function () {
        this.beepBehavior.beep(this.name);
    };
    Car.prototype.performDrive = function () {
        this.driveBehavior.drive(this.name);
    };
    return Car;
}());
var Moto = /** @class */ (function () {
    function Moto(name, beepBehavior) {
        this.name = name;
        this.beepBehavior = beepBehavior;
    }
    Moto.prototype.printName = function () {
        console.log(this.name + " : модель мотацикла");
    };
    Moto.prototype.performBeep = function () {
        this.beepBehavior.beep(this.name);
    };
    return Moto;
}());
var AutoBeep = /** @class */ (function () {
    function AutoBeep() {
    }
    AutoBeep.prototype.beep = function (model) {
        console.log(model + ": сигналка очень громкая");
    };
    return AutoBeep;
}());
var NoBeep = /** @class */ (function () {
    function NoBeep() {
    }
    NoBeep.prototype.beep = function (model) {
        console.log(model + ": нет сигнала");
    };
    return NoBeep;
}());
var Driver = /** @class */ (function () {
    function Driver() {
    }
    Driver.prototype.drive = function (model) {
        console.log(model + ": машина поехала");
    };
    return Driver;
}());
var NoDrive = /** @class */ (function () {
    function NoDrive() {
    }
    NoDrive.prototype.drive = function (model) {
        console.log(model + ": не может ехать");
    };
    return NoDrive;
}());
var NitroDriver = /** @class */ (function () {
    function NitroDriver() {
    }
    NitroDriver.prototype.drive = function (model) {
        console.log(model + ": машина на нитрухе!");
    };
    return NitroDriver;
}());
var PetrolCar = /** @class */ (function (_super) {
    __extends(PetrolCar, _super);
    function PetrolCar(name) {
        return _super.call(this, name, new AutoBeep(), new Driver()) || this;
    }
    PetrolCar.prototype.display = function () {
        console.log(this.name + ": эта машина на бензине");
    };
    return PetrolCar;
}(Car));
var DieselCar = /** @class */ (function (_super) {
    __extends(DieselCar, _super);
    function DieselCar(name) {
        return _super.call(this, name, new AutoBeep(), new Driver()) || this;
    }
    DieselCar.prototype.display = function () {
        console.log(this.name + ": Эта машина на дизеле");
    };
    return DieselCar;
}(Car));
var ToyCar = /** @class */ (function (_super) {
    __extends(ToyCar, _super);
    function ToyCar(name) {
        return _super.call(this, name, new NoBeep(), new Driver()) || this;
    }
    ToyCar.prototype.display = function () {
        console.log(this.name + ": эта машина игрушечная");
    };
    return ToyCar;
}(Car));
var LayoutCar = /** @class */ (function (_super) {
    __extends(LayoutCar, _super);
    function LayoutCar(name) {
        return _super.call(this, name, new NoBeep(), new NoDrive()) || this;
    }
    LayoutCar.prototype.display = function () {
        console.log(this.name + ": эта машина является макетом на картинке");
    };
    return LayoutCar;
}(Car));
var SportMoto = /** @class */ (function (_super) {
    __extends(SportMoto, _super);
    function SportMoto(name) {
        return _super.call(this, name, new AutoBeep()) || this;
    }
    return SportMoto;
}(Moto));
var bmw = new PetrolCar("BMW");
var mercedes = new DieselCar("MERCEDES");
var lada = new ToyCar("LADA");
var audi = new LayoutCar("AUDI");
var kawasaki = new SportMoto("KAWASAKI");
