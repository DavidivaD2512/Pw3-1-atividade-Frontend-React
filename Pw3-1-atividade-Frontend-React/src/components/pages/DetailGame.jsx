import {React, useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import api from '../../services/api';

import style from './DetailGame.module.css'
import Button from '../Button'

import hollow from '../../assets/hollow_knight.jpg'

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
        <div className={style.grid}>
            
            <div className={style.container_img}>
                <img className={style.img_book_detail} src={hollow}/>
            </div>

            <div className={style.info}>

                <span className={style.titulo}>{game.nome}</span>
                <span className={style.autor}>{game.publisher}</span>

                <span className={style.descricao}>
                    {game.descricao}
                </span>

                <div className={style.container_buttons}>
                    <Button 
                        label='EDITAR'
                        router='/updateGame/'
                        id_jogo={game.id_jogo}
                    />

                    <Button 
                        label='EXCLUIR'
                        router='/deleteGame/'
                        id_jogo={game.id_jogo}
                    />

                </div>

            </div>

        </div>
    )

}

export default DetailGame