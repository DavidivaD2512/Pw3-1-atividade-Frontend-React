import React from 'react'
import styles from './Home.module.css';

import fundo from '../../assets/indiecross.jpg';

const Home = ()=>{
    return(

        <section className={styles.home_container}>

            <div className={styles.bem_vindo}>
                <h1>Organize seus jogos de maneira rápida e fácil!</h1>
                
            </div>
            

        </section>

    );
}

export default Home;