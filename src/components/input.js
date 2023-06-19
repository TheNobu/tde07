const Input  = ({label,inputName,value,onChange,type = "text"}) =>{
    return(
        <div>
            <div>
                <label for = {inputName}>{label}</label>
                <input
                type = {type}
                id = {inputName}
                name = {inputName}
                value= {value}
                onChange={onChange}
                />
            </div>

        </div>
    );
}

export default Input;