interface Subject {
    registerObserver(Observer: Observer): void,

    removeObserver(Observer: Observer): void,

    notifyObserver(): void,
}
interface Observer {
    update(temp: number, humidity: number, pressure: number): any
}
interface DisplayElement {
    display(): any
}

export class WeatherData implements Subject {

    private observers: Observer[] = []
    public temperature: number = 0
    public humidity: number = 0
    public pressure: number = 0

    registerObserver(observer: Observer): void {
        const isExist = this.observers.includes(observer)
        if (isExist) {
            return console.log("Данный наблюдатетль уже существует")
        } else {
            console.log("Добавляем нового наблюдателя")
            this.observers.push(observer)
        }
    }

    removeObserver(observer: Observer): void {
        const index = this.observers.indexOf(observer)
        if (index >= 0) {
            this.observers.splice(0, index)
        } else {
            console.log("Нет такого наблюдателя")
        }
    }

    notifyObserver(): void {
        for (let i = 0; i < this.observers.length; i++) {
            let observer: Observer = this.observers[i]
            observer.update(this.temperature, this.humidity, this.pressure)
        }
    }

    measurementsChanged(): void {
        this.notifyObserver()
    }

    setMeasurements(humidity: number, temperature: number, pressure: number) {
        this.pressure = pressure
        this.humidity = humidity
        this.temperature = temperature
        this.measurementsChanged()
    }
}
export class CurrentConditionsTemperatureDisplay implements Observer, DisplayElement {
    private temperature: number = 0
    private weatherDate: Subject

    constructor(weatherData: Subject,) {
        this.weatherDate = weatherData
        weatherData.registerObserver(this)
    }
    update(temp: number, humidity: number, pressure: number): any {
        this.temperature = temp
        this.display()
    }
    display(): string {
       return `Текущая температура: ${this.temperature}%`
    }
}
export class CurrentConditionsHumidityDisplay implements Observer, DisplayElement {
    private humidity: number = 0
    private weatherDate: Subject

    constructor(weatherData: Subject,) {
        this.weatherDate = weatherData
        weatherData.registerObserver(this)
    }
    update(temp: number, humidity: number, pressure: number): any {
        this.humidity = humidity
        this.display()
    }
    display(): string {
       return `Текущая влажность: ${this.humidity}%`
    }
}
export class CurrentConditionsPressureDisplay implements Observer, DisplayElement {
    private pressure: number = 0
    private weatherDate: Subject

    constructor(weatherData: Subject,) {
        this.weatherDate = weatherData
        weatherData.registerObserver(this)
    }
    update(temp: number, humidity: number, pressure: number): any {
        this.pressure = humidity
        this.display()
    }
    display(): string {
       return `Текущее давление: ${this.pressure}%`
    }
}

export const stan = new WeatherData()

export const temperature = new CurrentConditionsTemperatureDisplay(stan)
export const humidity = new CurrentConditionsHumidityDisplay(stan)
export const pressure = new CurrentConditionsPressureDisplay(stan)


