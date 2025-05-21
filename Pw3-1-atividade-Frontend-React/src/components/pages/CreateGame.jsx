import React from "react";
import { useState } from 'react';
import Style from './CreateGame.module.css';
import api from '../../services/api';

import Input from "../form/Input";
import SelectGenre from "../form/SelectGenre";
import SelectStatus from "../form/SelectStatus";
import Button from "../form/Button";

const CreateGame = ()=>{

    const [game, setGame] = useState({})

    function handlerChangeGame(event) {
        setGame({...game, [event.target.name] : event.target.value})
    }

    function handlerChangeGenre(event) {
        setGame({...game, genero: Number(event.target.value)});

    }

    function handlerChangeStatus(event) {
        setGame({...game, status: Number(event.target.value)});

    }

    async function submit(event) {
        event.preventDefault();
        await api.post('/games/newGame', {
            nome: game.nome,
            desenvolvedora: game.desenvolvedora,
            publisher: game.publisher,
            descricao: game.descricao,
            genero: game.genero,
            status: game.status
        });
    }
    
    return(

        <section className={Style.create_game_container}>

            <h1>CADASTRO DE JOGO</h1>

            <form onSubmit={submit}>

                <Input
                    text='Nome do jogo'
                    type='text'
                    name='nome'
                    id='nome'
                    placeholder='Digite o nome do jogo'
                    handlerChange={handlerChangeGame}
                />

                <Input
                    text='Desenvolvedora'
                    type='text'
                    name='desenvolvedora'
                    id='desenvolvedora'
                    placeholder='Digite o nome da desenvolvedora do jogo'
                    handlerChange={handlerChangeGame}
                />

                <Input
                    text='Publisher'
                    type='text'
                    name='publisher'
                    id='publisher'
                    placeholder='Digite o nome da publisher do jogo'
                    handlerChange={handlerChangeGame}
                />

                <Input
                    text='Descrição do jogo'
                    type='text'
                    name='descricao'
                    id='descricao'
                    placeholder='Digite a descrição do jogo'
                    handlerChange={handlerChangeGame}
                />

                <SelectGenre 
                    name='genero'
                    id='genero'
                    text='Gênero do jogo'
                    handlerChange={handlerChangeGenre}
                />

                <SelectStatus 
                    name='status'
                    id='status'
                    text='Selecione um status'
                    handlerChange={handlerChangeStatus}
                />

                <Button
                    label='CADASTRAR JOGO'
                />

            </form>

        </section>

    )
}

export default CreateGame