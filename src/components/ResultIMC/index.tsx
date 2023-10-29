import { useEffect } from "react";
import { ItypeProps } from "../../App";


function ResultIMC({weight, height}: ItypeProps) {

    const IMC = (): number => {
        const heightCM: number = height / 100
        const imc: number = weight / (heightCM * heightCM);
        const formatedIMC: string = imc.toFixed(2);
        const numberIMC: number = parseFloat(formatedIMC)

        if (numberIMC > 0 && numberIMC !==Infinity) {
            return numberIMC;
        }
    };
    
    const calculoIMC =  IMC();
    const underWeight: number = 18.49;
    const idealWeight: number = 24.49;
    const overWeight: number = 30;
    const obesity: number = 30.01;
    const a:string = 'dark-gradient';
    const b:string = 'lightblue-gradient';
    const seaGradient: string = 'sea-gradient';
    const horizonGradient: string = 'horizon-gradient';
    const morningGradient: string = 'morning-gradient';

    useEffect(() => {
        calculoIMC
    }, [calculoIMC]);

    let underWeightTrue: boolean | number = false;
    let idealWeightTrue: boolean | number = false;
    let overWeightTrue: boolean | number = false;
    let obesityTrue: boolean | number = false;

    console.log('Calculo')

    if (calculoIMC < underWeight) {
        underWeightTrue = true;
    }

    if (calculoIMC > underWeight && calculoIMC < overWeight) {
        idealWeightTrue = true;
    }

    if (calculoIMC < overWeight && calculoIMC >= obesity) {
        overWeightTrue = true;
    }

    if (calculoIMC >= obesity) {
        obesityTrue = true;
    }

    return (
        <>
            <div className='bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500 pb-8 flex justify-center items-center'>
                <label htmlFor="resultIMC" className="text-white">Seu IMC:</label>
                <input id="resultIMC" className='block m-auto text-center rounded-md p-1 ml-2 mr-0' type="number" value={calculoIMC} readOnly />
            </div>

            <div className="grid grid-cols-4 text-center">
                <div className={`${underWeightTrue ? b : b}`}>
                    <h4>Abaixo do Peso</h4>
                    <p>&lt; 18.5</p>
                </div>
                <div className={`${idealWeightTrue ? a : seaGradient}`}>
                    <h4>Peso Ideal</h4>
                    <p>18.5 a 24.9</p>
                </div>
                <div className={`${overWeightTrue ? b : horizonGradient}`}>
                    <h4>Sobrepeso</h4>
                    <p>25 a 30</p>
                </div>
                <div className={`${obesityTrue ? b : morningGradient}`}>
                    <h4>Obesidade</h4>
                    <p>30 &gt;</p>
                </div>
            </div>
        </>
    );
}

export default ResultIMC;