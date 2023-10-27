import { ItypeProps } from "../../App";


function ResultIMC({propsWeight, propsHeight}: ItypeProps) {
    const IMC = () => {
        const imc = propsWeight / (propsHeight * propsHeight)
        return imc
    };

    return (
        <div className='bg-cyan-400 w-screen flex'>
            <input className='block m-auto' type="number" readOnly />
            {IMC()}
        </div>
    );
}

export default ResultIMC;