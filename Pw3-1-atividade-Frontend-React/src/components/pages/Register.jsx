import React from "react";
import { useState, useEffect, useRef } from 'react';
import Style from './Register.module.css'
import api from '../../services/api';

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
    
        async function submit(event) {
            await api.post('/User/Register', {
                nome: info.nome,
                email: info.email,
                senha: info.senha,
                sexo: info.sexo,
                data_nasc: info.data_nasc,
            })
        }


    return(

        <section className={Style.sing_in_container}>

            <h1>CADASTRO DE USUÁRIO</h1>

            <form onSubmit={submit}>

                <Input
                    text='Nome'
                    type='text'
                    name='nome'
                    id='nome'
                    placeholder='Nome'
                    handlerChange={handlerChangeInfo}
                />

                <Input
                    text='Email'
                    type='text'
                    name='email'
                    id='email'
                    placeholder='endereço@email.com'
                    handlerChange={handlerChangeInfo}

                />

                <Input
                    text='Senha'
                    type='password'
                    name='senha'
                    id='senha'
                    placeholder='Senha@123'
                    handlerChange={handlerChangeInfo}
                />

{/*                 <Input
                    text='Confirmar Senha'
                    type='password'
                    name='senha2'
                    id='senha2'
                    handlerChange={handlerChangeInfo}
                /> */}

                <SelectSex 
                    name='sexo'
                    id='sexo'
                    text='sexo'
                    handlerChange={handlerChangeSex}
                />

                <Input
                    text='Data de nasimento'
                    type='date'
                    name='data_nasc'
                    id='data_nasc'
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