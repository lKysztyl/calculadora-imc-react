import { ItypeProps } from "../../App";


function ResultIMC({propsWeight, propsHeight}: ItypeProps) {

    const IMC = (): number => {
        const imc: number = propsWeight / (propsHeight * propsHeight);

        const stringIMC: string = imc.toFixed(2);
        const numberIMC: number = parseFloat(stringIMC);

        return numberIMC;
        
    };

    return (
        <div className='bg-cyan-400 pb-8 flex justify-center items-center'>
            <label htmlFor="resultIMC">Seu IMC:</label>
            <input id="resultIMC" className='block m-auto text-center rounded-md p-1 ml-2 mr-0' type="number" value={IMC()} readOnly />
        </div>
    );
}

export default ResultIMC;