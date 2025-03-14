import React from "react";
import style from './CreateGame.module.css'

import Input from "../form/Input";
import SelectGenre from "../form/SelectGenre";
import SelectStatus from "../form/SelectStatus";
import Button from "../form/Button";

const CreateGame = ()=>{
    return(

        <section className={style.create_book_container}>

            <h1 className={style.titulo}>CADASTRO DE JOGO</h1>

            <Input
                text='Nome do jogo'
                type='text'
                name='txt_jogo'
                id='txt_jogo'
                placeholder='Digite o nome do jogo'
            />

            <Input
                text='Desenvolvedora'
                type='text'
                name='txt_desenvolvedora'
                id='txt_desenvolvedora'
                placeholder='Digite o nome da desenvolvedora do jogo'
            />

            <Input
                text='Publisher'
                type='text'
                name='txt_publisher'
                id='txt_publisher'
                placeholder='Digite o nome da publisher do jogo'
            />

            <Input
                text='Descrição do jogo'
                type='text'
                name='txt_descricao'
                id='txt_descricao'
                placeholder='Digite a descrição do jogo'
            />

            <Input
                text='Descrição do jogo'
                type='text'
                name='txt_descricao'
                id='txt_descricao'
                placeholder='Digite a descrição do jogo'
            />

            <SelectGenre 
                name='slc_genero'
                id='slc_genero'
                text='Gênero do jogo'
            />

            <SelectStatus 
                name='slc_status'
                id='slc_status'
                text='Selecione um status'
            />

            <Button
                label='CADASTRAR JOGO'
            />

        </section>

    )
}

export default CreateGame