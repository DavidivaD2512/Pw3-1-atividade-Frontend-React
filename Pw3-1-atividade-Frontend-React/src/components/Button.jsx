import { Link } from 'react-router-dom';
import style from './Button.module.css';

const Button = ({label, router, id_jogo})=>{
    return(
            <div className={style.buttonContainer}>
                <Link to={`${router}${id_jogo}`}>
                    <button>{label}</button>
                </Link>
            </div>
    )  
}

export default Button