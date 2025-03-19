import style from "./SelectStatus.module.css";

function SelectStatus({text, name, id, handlerChange}) {
    return(
        <div className={style.form_control}>

            <label htmlFor={name}>{text}</label>

            <select name={name} id={id} onChange={handlerChange}>
                <option value="">Selecione um status</option>
                <option value="">Platinado</option>
                <option value="">Zerado</option>
                <option value="">Jogando</option>
                <option value="">Em pausa</option>
                <option value="">Na fila</option>
                <option value="">Dropado</option>
                <option value="">Na lista de desejos</option>
                <option value="">Esperando promoção</option>
                <option value="">Eperando o lançamento</option>
            </select>

        </div>
    )
}

export default SelectStatus