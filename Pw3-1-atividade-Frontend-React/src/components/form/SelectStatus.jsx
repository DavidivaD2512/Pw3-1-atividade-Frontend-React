import style from "./SelectStatus.module.css";

function SelectStatus({text, name, id, handlerChange}) {
    return(
        <div className={style.form_control}>

            <label htmlFor={name}>{text}</label>

            <select name={name} id={id} onChange={handlerChange}>
                <option value="">Selecione um status</option>
                <option value="1">Platinado</option>
                <option value="2">Zerado</option>
                <option value="3">Jogando</option>
                <option value="4">Em pausa</option>
                <option value="5">Na fila</option>
                <option value="6">Dropado</option>
                <option value="7">Na lista de desejos</option>
                <option value="8">Esperando promoção</option>
                <option value="9">Eperando o lançamento</option>
            </select>

        </div>
    )
}

export default SelectStatus