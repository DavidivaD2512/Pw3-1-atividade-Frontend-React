import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../services/api';

function DeleteGame() {
    const { id_jogo } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        api.delete(`/games/deleteGame/${id_jogo}`)
          .then(response => {
              navigate('/games/viewGames', { state: 'JOGO EXCLUÍDO COM SUCESSO!' });
          })
          .catch(err => console.log(err));
    }, [id_jogo, navigate]);

    return (<div>Deletando</div>)
}

export default DeleteGame;
