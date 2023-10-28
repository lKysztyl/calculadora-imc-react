import { useEffect, useState } from "react";
import { ItypeProps } from "../../App";


function ResultIMC({weight, height}: ItypeProps) {

    const IMC = (): string => {
        const heightCM: number = height / 100
        const imc: number = weight / (heightCM * heightCM);
        const imcFormated: string = imc.toFixed(2);
        const [imcState] = useState(imcFormated)

        return imcState;
    };

    const downWeight: number = 18.49;
    const idealWeight: number = 24.49;
    const superWeight: number = 30;
    const obeside: number = 30.01;

    useEffect(() => {
 
    }, []);



    return (
        <>
            <div className='bg-cyan-400 pb-8 flex justify-center items-center'>
                <label htmlFor="resultIMC">Seu IMC:</label>
                <input id="resultIMC" className='block m-auto text-center rounded-md p-1 ml-2 mr-0' type="number" value={IMC()} readOnly />
            </div>

            <div className="grid grid-cols-4 text-center">
                <div className=" p-4 border-4 dark-gradient" data-downweight={downWeight}>
                    <h4>Abaixo do Peso</h4>
                    <p>&lt; 18.5</p>
                </div>
                <div className="bg-blue-800 p-4" data-idealweight={idealWeight}>
                    <h4>Peso Ideal</h4>
                    <p>18.5 a 24.9</p>
                </div>
                <div className="bg-yellow-300 p-4" data-superweight={superWeight}>
                    <h4>Sobrepeso</h4>
                    <p>25 a 30</p>
                </div>
                <div className="bg-red-400 p-4" data-obeside={obeside}>
                    <h4>Obesidade</h4>
                    <p>30 &gt;</p>
                </div>
            </div>
        </>
    );
}

export default ResultIMC;