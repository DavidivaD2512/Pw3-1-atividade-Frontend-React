import style from './ButtonEditar.module.css';

const ButtonEditar = ({label, onClick})=>{
    return(
            <div onClick={onClick} className={style.buttonContainer}>
                    <button>{label}</button>
            </div>
    )  
}

export default ButtonEditar