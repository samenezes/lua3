import { useNavigate } from 'react-router-dom';
import { TempCard } from './tempCard';

export function Deleted({ deletedTemperatures }) {

    const navigate = useNavigate();

    console.log(deletedTemperatures)

    function navgt() {
        navigate('/')
    }
    return (
        <>
            <h1>Lixeira *sem volta*</h1>

            {deletedTemperatures.map((current, index) => (
                <TempCard
                    key={index}
                    index={index}
                    temp={current.temperature}
                    deletetemp={false}
                    type={current.type}
                />
            ))}
            <button onClick={navgt}> Voltar </button>
        </>
    )
}