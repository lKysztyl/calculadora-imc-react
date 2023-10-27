import { ItypeProps } from "../../App";


function ResultIMC({propsWeight, propsHeight}: ItypeProps) {

    const IMC = (): number => {
        const imc: number = propsWeight / (propsHeight * propsHeight);

        const stringIMC: string = imc.toFixed(2);
        const numberIMC: number = parseFloat(stringIMC);

        return numberIMC;
        
    };

    return (
        <div className='bg-cyan-400 w-screen flex'>
            <input className='block m-auto' type="number" readOnly />
            {IMC()}
        </div>
    );
}

export default ResultIMC;