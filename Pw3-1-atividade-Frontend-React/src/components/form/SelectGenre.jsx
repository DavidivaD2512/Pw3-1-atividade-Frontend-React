import style from './SelectGenre.module.css'

function SelectGenre({text, name, id}) {
    return(
        <div className={style.form_control}>

            <label htmlFor={name}>{text}</label>

            <select name={name} id={id}>
                <option value="">Selecione um gênero</option>
                <option value="">Ação</option>
                <option value="">Aventura</option>
                <option value="">RPG</option>
                <option value="">JRPG</option>
                <option value="">Estratégia</option>
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