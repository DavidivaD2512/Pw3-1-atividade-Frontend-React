import React, { useEffect, useState } from "react";
import style from './ViewGames.module.css';

import ContainerGame from "../layout/ContainerGame";
import GameCard from "../GameCard";
import api from '../../services/api';

const ViewGames = ()=>{

    const [games, setGames] = useState([]);

    useEffect(() => {

        api.get('/games/viewGames')
            .then((resp) => {
                console.log("Dados recebidos:", resp.data.data);  
                setGames(resp.data.data);
            })
            .catch((err) => {
                console.error("Erro ao buscar os jogos:", err);
            });

    }, []);
    
    

    return(

        <section className={style.container}>

            <h1>SEUS JOGOS</h1>

            <ContainerGame className={style.view_games_container}>

                {games.length > 0 ? (
                    games.map((game) => (
                        <GameCard 
                            nome={game.nome}
                            desenvolvedora={game.desenvolvedora}
                            publisher={game.publisher}
                            genero={game.genero.genero}
                            status={game.status.status}
                        />
                    ))
                ) : (
                    <p>nenhum jogo encontrado.</p>
                )}
    
            </ContainerGame>


        </section>

    )
}

export default ViewGames
