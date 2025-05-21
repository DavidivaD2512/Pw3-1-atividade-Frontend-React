import style from './SelectGenre.module.css'

function SelectGenre({text, name, id, handlerChange}) {
    return(
        <div className={style.form_control}>

            <label htmlFor={name}>{text}</label>

            <select name={name} id={id} onChange={handlerChange}>
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
    )
}

export default SelectGenre;