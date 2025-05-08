import Button from './form/Button';

import style from './GameCard.module.css';

const GameCard = ({nome, desenvolvedora, publisher, genero, status})=>{
    return(
        
        <div className={style.gameCard}>
            <h3 className={style.nome}>{nome}</h3>
            <p className={style.genero}>Genero: {genero}</p>
            <p className={style.status}>Status: {status}</p>
            <p className={style.desenvolvedora}>Desenvolvido por: {desenvolvedora}</p>
            <p className={style.publisher}>Publicado por: {publisher}</p>
            
        </div>
        
    )
}

export default GameCard