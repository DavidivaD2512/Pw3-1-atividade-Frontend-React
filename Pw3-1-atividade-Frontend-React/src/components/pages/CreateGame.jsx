import React from "react";
import { useState } from 'react';
import Style from './CreateGame.module.css'

import Input from "../form/Input";
import SelectGenre from "../form/SelectGenre";
import SelectStatus from "../form/SelectStatus";
import Button from "../form/Button";

const CreateGame = ()=>{

    const [game, setGame] = useState({})

    function handlerChangeGame(event) {
        setGame({...game, [event.target.name] : event.target.value})
    }

    function handlerChangeSelect(event) {
        setGame({...game, category : event.target.options[event.target.selectedIndex].text}) 
    }

    function submit(event) {
        event.preventDefault();
        console.log(game)
    }
    
    return(

        <section className={Style.create_game_container}>

            <h1>CADASTRO DE JOGO</h1>

            <form onSubmit={submit}>

                <Input
                    text='Nome do jogo'
                    type='text'
                    name='txt_jogo'
                    id='txt_jogo'
                    placeholder='Digite o nome do jogo'
                    handlerChange={handlerChangeGame}
                />

                <Input
                    text='Desenvolvedora'
                    type='text'
                    name='txt_desenvolvedora'
                    id='txt_desenvolvedora'
                    placeholder='Digite o nome da desenvolvedora do jogo'
                    handlerChange={handlerChangeGame}
                />

                <Input
                    text='Publisher'
                    type='text'
                    name='txt_publisher'
                    id='txt_publisher'
                    placeholder='Digite o nome da publisher do jogo'
                    handlerChange={handlerChangeGame}
                />

                <Input
                    text='Descrição do jogo'
                    type='text'
                    name='txt_descricao'
                    id='txt_descricao'
                    placeholder='Digite a descrição do jogo'
                    handlerChange={handlerChangeGame}
                />

                <SelectGenre 
                    name='slc_genero'
                    id='slc_genero'
                    text='Gênero do jogo'
                    handlerChange={handlerChangeSelect}
                />

                <SelectStatus 
                    name='slc_status'
                    id='slc_status'
                    text='Selecione um status'
                    handlerChange={handlerChangeSelect}
                />

                <Button
                    label='CADASTRAR JOGO'
                />

            </form>

        </section>

    )
}

export default CreateGame