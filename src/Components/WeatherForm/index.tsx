import React from "react";

type WeatherFormProps = {
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

function WeatherForm({ handleSubmit }: WeatherFormProps) {
    return (  
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="city">City: </label>
                <input id="city" name="city" type="text" ></input>
                
                <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default WeatherForm;
