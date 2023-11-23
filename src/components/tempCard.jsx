import './tempCard.css'

export function TempCard({ index, deletetemp, type, temp }) {



    return (


        <div className="tempCard">



            {deletetemp == false ? ' ' : <button onClick={() => deletetemp(index)}>Deletar</button>}

            <div className="left">
                <h2 className='tempTitle'>Temperatura: {temp} {type == 1 ? "°C" : "°F"} </h2>


            </div>





        </div>
    )
}