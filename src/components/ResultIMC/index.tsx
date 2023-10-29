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
        }else {
            return 0;
        }
    };
    
    const calculoIMC =  IMC();

    const tableIcmArray: number[] = [18.49, 24.49, 25, 30.01];

    const gradientArray: string[] = ['sea-gradient', 'dark-gradient', 'horizon-gradient', 'morning-gradient', 'lightblue-gradient']

    const falseArray: boolean[] = [false, false, false, false];

    if (calculoIMC <= tableIcmArray[0]) {
        falseArray[0] = true;
    }

    if (calculoIMC > tableIcmArray[0] && calculoIMC < tableIcmArray[2]) {
        falseArray[1] = true;
    }

    if (calculoIMC > tableIcmArray[1] && calculoIMC < tableIcmArray[3]) {
        falseArray[2] = true;
    }

    if (calculoIMC >= tableIcmArray[3]) {
        falseArray[3] = true;
    }


    useEffect(() => {
        calculoIMC
    }, [calculoIMC]);

    return (
        <>
            <div className='bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500 pb-8 flex justify-center items-center'>
                <label htmlFor="resultIMC" className="text-white">Seu IMC:</label>
                <input id="resultIMC" className='block m-auto text-center rounded-md p-1 ml-2 mr-0' type="number" value={calculoIMC} readOnly />
            </div>

            <div className="grid grid-cols-4 text-center max-lg:grid-cols-2">
                <div className={`${falseArray[0] ? gradientArray[1] : gradientArray[4]}`}>
                    <h4>Abaixo do Peso</h4>
                    <p>&lt; 18.5</p>
                </div>
                <div className={`${falseArray[1] ? gradientArray[1] : gradientArray[0]}`}>
                    <h4>Peso Ideal</h4>
                    <p>18.5 a 24.9</p>
                </div>
                <div className={`${falseArray[2] ? gradientArray[1] : gradientArray[2]}`}>
                    <h4>Sobrepeso</h4>
                    <p>25 a 30</p>
                </div>
                <div className={`${falseArray[3] ? gradientArray[1] : gradientArray[3]}`}>
                    <h4>Obesidade</h4>
                    <p>30 &gt;</p>
                </div>
            </div>
        </>
    );
}

export default ResultIMC;