import Button from './Button';

import style from './GameCard.module.css';

const GameCard = ({nome, genero, status, imagem, id_jogo})=>{
    return(
        
        <div className={style.gameCard}>
            <h3 className={style.nome}>{nome}</h3>
            <img src={imagem} alt="Capa: As Cavernas de Aço" />
            <p className={style.genero}>Genero: {genero}</p>
            <p className={style.status}>Status: {status}</p>   
            <Button 
            label='Saiba Mais'
            router='/Games/Detalhes/'
            id_jogo={id_jogo}
            />     
        </div>
        
    )
}

export default GameCard