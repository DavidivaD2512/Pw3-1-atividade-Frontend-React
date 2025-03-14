import Button from './Button'

import style from './GameCard.module.css'

const GameCard = ({titulo, desenvolvedora, publisher, genero, status})=>{
    return(
        
        <div className={style.gameCard}>
            <h3 className={style.titulo}>{titulo}</h3>
            <p className={style.desenvolvedora}>{desenvolvedora}</p>
            <p className={style.publisher}>{publisher}</p>
            <p className={style.genero}>{genero}</p>
            <p className={style.status}>{status}</p>
            
            <Button label='DETALHE' />
        </div>
        
    )
}

export default GameCard