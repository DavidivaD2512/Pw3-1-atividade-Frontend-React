import {React, useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import api from '../../services/api';

import style from './DetailGame.module.css'
import Button from '../Button'
import ButtonEditar from '../ButtonEditar.jsx';

import hollow from '../../assets/hollow_full.jpeg'

const DetailGame = () => {
    const { id_jogo } = useParams();

    const[game, setGame] = useState({});
    const[formData, setFormData] = useState({});
    const[startEdit, setStartEdit] = useState(false);

    async function getGame() {
        api.get(`/games/Detalhes/${id_jogo}`)

            .then((resp) => {
                console.log("Dados recebidos:", resp.data.data);  
                setGame(resp.data.data);
                setFormData(resp.data.data);
            })
            .catch((err) => {
                console.error("Erro ao buscar o jogo:", err);
            });
    }

    useEffect(() => {

        getGame();

    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        
        event.target.style.height = "auto";
        event.target.style.height = `${event.target.scrollHeight}px`;
        setFormData({ ...formData, [name]: value });
    }

    function handlerChangeGenre(event) {
        setFormData({...formData, id_genero: Number(event.target.value)});
    }

    function handlerChangeStatus(event) {
        setFormData({...formData, id_status: Number(event.target.value)});
    }

    const handleSalvar = async (e) => {
        e.preventDefault();
        setStartEdit(false);
        console.log("Dados do formData: ", formData);

        try {
            await api.put(`/Games/Detalhes/${id_jogo}`, {
                nome: formData.nome,
                desenvolvedora: formData.desenvolvedora,
                publisher: formData.publisher,
                descricao: formData.descricao,
                id_genero: formData.id_genero,
                id_status: formData.id_status
            });

            getGame();
        } catch (error) {
            console.error('Erro ao atualizar jogo:', error);
            alert(`Erro ao atualizar jogo: ${error.response?.data?.message || error.message}`);
        }
    }

    return (
    <div className={style.container}>
        {Object.keys(game).length === 0 ? (
            <p>Carregando...</p>
        ) : !startEdit && ( 
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
                        <ButtonEditar 
                            label='EDITAR'
                            onClick={() => setStartEdit(true)}
                            className={style.btn}
                        />
                        <Button 
                            label='EXCLUIR'
                            router='/Games/deleteGame/'
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
        {startEdit && (
             <>
                <div className={style.info}>
                    <input type='text'
                    name='nome'
                    onChange={handleChange}
                    value={formData.nome}
                    className={style.titulo_editar}
                    />
                    <div>
                    <span className={style.desenvolvedora}>Desenvolvido por:</span>
                    <input type='text'
                    name='desenvolvedora'
                    onChange={handleChange}
                    value={formData.desenvolvedora}
                    className={style.desenvolvedora_editar}
                    />
                    </div>
                    <div>
                    <span className={style.publisher}>Publicado por: </span>
                    <input type='text'
                    name='publisher'
                    onChange={handleChange}
                    value={formData.publisher}
                    className={style.publisher_editar}
                    />
                    </div>
                    <textarea
                    name='descricao'
                    onChange={handleChange}
                    value={formData.descricao}
                    className={style.descricao_editar}
                    />
                    <div>
                    <span className={style.genero}>Gênero: </span>
                    <select name="genero" id="genero"  onChange={handlerChangeGenre} className={style.genero_editar}>
                        <option value="">Selecione um gênero</option>
                        <option value="1">Ação</option>
                        <option value="2">Aventura</option>
                        <option value="3">RPG de Ação</option>
                        <option value="4">RPG de Turno</option>
                        <option value="5">Estratégia</option>
                        <option value="6">Puzzle</option>
                        <option value="7">Luta</option>
                        <option value="8">Hack-n-slash</option>
                        <option value="9">Souls-Like</option>
                        <option value="10">Rogue-Like</option>
                        <option value="11">Metroidvania</option>
                        <option value="12">Terror</option>
                        <option value="13">Survival Horror</option>
                    </select>
                    </div>
                    <div>
                    <span className={style.status}>Status: </span>
                    <select name='status' id='status'  onChange={handlerChangeStatus} className={style.status_editar}>
                        <option value="">Selecione um status</option>
                        <option value="1">Platinado</option>
                        <option value="2">Zerado</option>
                        <option value="3">Jogando</option>
                        <option value="4">Em pausa</option>
                        <option value="5">Na fila</option>
                        <option value="6">Dropado</option>
                        <option value="7">Na lista de desejos</option>
                        <option value="8">Esperando promoção</option>
                        <option value="9">Eperando o lançamento</option>
                    </select>
                    </div>
                    <div className={style.container_buttons}>
                        <ButtonEditar 
                            label='EDITAR'
                            onClick={() => setStartEdit(true)}
                            className={style.btn}
                        />
                        <ButtonEditar 
                            label='SALVAR'
                            onClick={handleSalvar}
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