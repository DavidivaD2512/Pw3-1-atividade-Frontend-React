import {React, useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import api from '../../services/api';

import style from './DetailGame.module.css'
import Button from '../Button'

import hollow from '../../assets/hollow_full.jpeg'

const DetailGame = () => {
    const { id_jogo } = useParams();

    const[game, setGame] = useState({});

    useEffect(() => {

        api.get(`/games/Detalhes/${id_jogo}`)

            .then((resp) => {
                console.log("Dados recebidos:", resp.data.data);  
                setGame(resp.data.data);
            })
            .catch((err) => {
                console.error("Erro ao buscar o jogo:", err);
            });

    }, []);

    return (
    <div className={style.container}>
        {Object.keys(game).length === 0 ? (
            <p>Carregando...</p>
        ) : (
            <>
                <div className={style.info}>
                    <span className={style.titulo}>{game.nome}</span>
                    <span className={style.desenvolvedora}>Desenvolvido por: {game.desenvolvedora}</span>
                    <span className={style.publisher}>Publicado por: {game.publisher}</span>
                    <span className={style.descricao}>
                        {game.descricao}
                    </span>
                    <span className={style.genero}>Gênero: {game.genero?.genero}</span>
                    <span className={style.status}>Status: {game.status?.status}</span>
                    <div className={style.container_buttons}>
                        <Button 
                            label='EDITAR'
                            router='/updateGame/'
                            id_jogo={game.id_jogo}
                            className={style.btn}
                        />
                        <Button 
                            label='EXCLUIR'
                            router='/deleteGame/'
                            id_jogo={game.id_jogo}
                            className={style.btn}
                        />
                    </div>
                </div>
                <div className={style.container_cover}>
                    <img className={style.game_cover} src={hollow} alt="Capa do Game"/>
                </div>
            </>
        )}
    </div>
);

}

export default DetailGame