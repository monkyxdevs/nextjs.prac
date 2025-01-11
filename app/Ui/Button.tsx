interface ButtonType {
    value : string,
    onClick : () => void 
}
export default function Button({value,onClick}:ButtonType){
    return(
        <button onClick={onClick}>
           {value} 
        </button>
    );
}