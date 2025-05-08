import React from 'react';

import style from './ContainerGame.module.css';

const ContainerGame = (props) => {
    return (
        <div className={style.container_game}>
            {props.children}
        </div>
    )
}

export default ContainerGame