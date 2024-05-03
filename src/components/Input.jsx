

export default function Input({type, label, inputValue, onInputChange, ...props}){
    console.log(inputValue)
    function handleInputChange(event){
        onInputChange(event.target.name, event.target.value);
    }

    return <p>
          <label>{label}</label>
          <input type={type} value={inputValue} onChange={handleInputChange} {...props} required></input>
        </p>;
}