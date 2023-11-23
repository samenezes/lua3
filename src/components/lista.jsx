import { useState, useEffect } from "react"
import { TempCard } from "./tempCard"
import { useNavigate } from 'react-router-dom';


export function Lista({ allTemps, setAllTemps, setDeleted }) {
    const navigate = useNavigate();

    const [newTemperature, setNewTemperature] = useState({
        temperature: "0",
        type: "0",
        trash: false
    })


    function trash() {
        navigate('/trash')
    }



    function onChangeInput(e) {
        const { name, value } = e.target;
        setNewTemperature(previous => ({ ...previous, [name]: value }))
    }

    function addTemperature() {
        setAllTemps(previous => ([...previous, newTemperature]))
        setNewTemperature(
            {
                temperature: "0",
                type: "0",
                trash: false
            }
        )

    }

    function deleteTemperature(index) {
        setDeleted(c => [...c, allTemps[index]])

        const updatedTemps = allTemps.filter((_, i) => i !== index);
        setAllTemps(updatedTemps);
    };
    return (
        <>
            <h1>Temperaturas</h1>
            <p>Prova do Luan</p>

            <p>Última prova do ano, obg por tudo sandrinha fadinha 🧚</p>

            <input type="number" name="temperature" value={newTemperature.temperature} placeholder="Temperatura" onChange={(e) => onChangeInput(e)} />
            <select value={newTemperature.type} name="type" onChange={(e) => onChangeInput(e)}>
                <option value="0">Graus Celsius (°C) </option>
                <option value="1">Fahrenheit (°F)</option>
            </select>
            <button onClick={addTemperature}> Adicionar </button>
            <button onClick={trash}>Ver Lixeira</button>
            {allTemps.map((current, index) => (
                <TempCard
                    key={index}
                    index={index}
                    temp={current.temperature}
                    deletetemp={deleteTemperature}
                    type={current.type}
                />
            ))}
        </>
    )
}