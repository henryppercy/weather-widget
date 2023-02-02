import React from 'react';
import './WeatherFom.scss';

type WeatherFormProps = {
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

function WeatherForm({ handleSubmit }: WeatherFormProps) {
    return (  
        <>
            <form onSubmit={handleSubmit} className="weather-form">
                <input id="city" name="city" type="text" ></input>
                <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default WeatherForm;
