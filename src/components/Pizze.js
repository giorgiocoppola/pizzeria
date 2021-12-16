
import React from 'react'
import './Pizze.css'

const Pizze = (props) => {
    const {nome,img,prezzo,ingredienti} = props;
    return (
        <div className="elenco-pizze">
            <img src={img} alt={nome} />
            <h4>{nome}</h4>
            <p className='ingrediente'>{ingredienti}</p>
            <p>{prezzo} €</p>
            <button>Acquista</button>
        
        </div>
    )
}

export default Pizze

