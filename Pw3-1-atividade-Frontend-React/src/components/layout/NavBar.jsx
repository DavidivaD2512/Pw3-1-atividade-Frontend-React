import { Outlet, Link } from 'react-router-dom'

import style from './NavBar.module.css'

const NavBar = ()=>{
    return(
        <>

            <nav className={style.navbar}>

                <ul className={style.list}>
                 
                    <Link className={style.item} to='/'>
                        <li>Início</li>
                    </Link>
                    
                    <Link className={style.item} to='/games/newGame'>
                        <li>Cadastrar Jogos</li>
                    </Link>
                    

                    <Link className={style.item} to='/games/viewGames'>
                        <li>Minha Lista</li>
                    </Link>

                    <Link className={style.item} to='/User/Register'>
                        <li>Cadastre-se</li>
                    </Link>

                </ul>

            </nav>

            <Outlet />

        </>

    )
}

export default NavBar