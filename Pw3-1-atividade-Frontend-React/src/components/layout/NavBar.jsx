import { Outlet, Link } from 'react-router-dom'

import style from './NavBar.module.css'

const NavBar = ()=>{
    return(
        <>

            <nav className={style.navbar}>

                <ul className={style.list}>

                    <Link to='/'>
                        <li className={style.item}></li>
                    </Link>
                    

                    <Link to='/'>
                        <li className={style.item}>HOME</li>
                    </Link>
                    
                    <Link to='/newGame'>
                        <li className={style.item}>CADASTRAR JOGOS</li>
                    </Link>
                    

                    <Link to='/viewGames'>
                        <li className={style.item}>SUA LISTA DE JOGOS</li>
                    </Link>

                    <Link to='/Register'>
                        <li className={style.item}>CADASTRE-SE</li>
                    </Link>

                </ul>

            </nav>

            <Outlet />

        </>

    )
}

export default NavBar