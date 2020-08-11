import React from 'react';
import { useFormik } from 'formik';

const WeatherDataForm: React.FC<PropsWeatherDataType> = ({updateValues}) => {
    const formik = useFormik({
        initialValues: {
            temperature: '',
            humidity: '',
            pressure: '',
        },
        onSubmit: values => {
            updateValues(values.temperature, values.humidity, values.pressure)
        }
    })
}

type PropsWeatherDataType = {
    updateValues(temperature: string, humidity: string, pressure: string): void
}

export default WeatherDataForm