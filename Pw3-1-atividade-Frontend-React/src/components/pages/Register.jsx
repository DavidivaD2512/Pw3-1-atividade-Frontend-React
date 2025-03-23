import React from "react";
import { useState } from 'react';
import Style from './Register.module.css'

import Input from "../form/Input";
import SelectSex from "../form/SelectSex";
import Button from "../form/Button";

const Register = ()=>{

        const [info, setInfo] = useState({})
    
        function handlerChangeInfo(event) {
            setInfo({...info, [event.target.name] : event.target.value})
        }
    
        function handlerChangeSex(event) {
            setInfo({...info, sexo : event.target.options[event.target.selectedIndex].text}) 
        }
    
        function submit(event) {
            event.preventDefault();
            console.log(info)
        }

    return(

        <section className={Style.sing_in_container}>

            <h1>CADASTRO DE USUÁRIO</h1>

            <form onSubmit={submit}>

                <Input
                    text='Nome'
                    type='text'
                    name='txt_nome'
                    id='txt_nome'
                    placeholder='Nome'
                    handlerChange={handlerChangeInfo}
                />

                <Input
                    text='Email'
                    type='text'
                    name='txt_email'
                    id='txt_email'
                    placeholder='endereço@email.com'
                    handlerChange={handlerChangeInfo}

                />

                <Input
                    text='Senha'
                    type='password'
                    name='txt_senha'
                    id='txt_senha'
                    placeholder='Senha@123'
                    handlerChange={handlerChangeInfo}
                />

                <Input
                    text='Confirmar Senha'
                    type='password'
                    name='txt_senha2'
                    id='txt_senha2'
                    handlerChange={handlerChangeInfo}
                />

                <SelectSex 
                    name='slc_sexo'
                    id='slc_sexo'
                    text='Sexo'
                    handlerChange={handlerChangeSex}
                />

                <Input
                    text='Data de nasimento'
                    type='date'
                    name='txt_data'
                    id='txt_data'
                    placeholder='xx/xx/xxxx'
                    handlerChange={handlerChangeInfo}
                />

                <Button
                    label='CADASTRAR USUÁRIO'
                />

            </form>

        </section>

    )
}

export default Register