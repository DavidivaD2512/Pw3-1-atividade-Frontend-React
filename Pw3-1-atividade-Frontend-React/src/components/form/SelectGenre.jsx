import style from './SelectGenre.module.css'

function SelectGenre({text, name, id, handlerChange}) {
    return(
        <div className={style.form_control}>

            <label htmlFor={name}>{text}</label>

            <select name={name} id={id} onChange={handlerChange}>
                <option value="">Selecione um gênero</option>
                <option value="">Ação</option>
                <option value="">Aventura</option>
                <option value="">RPG</option>
                <option value="">JRPG</option>
                <option value="">Estratégia</option>
                <option value="">Puzzle</option>
                <option value="">Luta</option>
                <option value="">Hack-n-slash</option>
                <option value="">Souls-Like</option>
                <option value="">Rogue-Like</option>
                <option value="">Metroidvania</option>
                <option value="">Terror</option>
            </select>

        </div>
    )
}

export default SelectGenre;