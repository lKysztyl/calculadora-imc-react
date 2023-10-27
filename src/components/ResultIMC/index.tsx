import { ItypeProps } from "../../App";


function ResultIMC({propsWeight, propsHeight}: ItypeProps) {

    return (
        <div className='bg-cyan-400 w-screen flex'>
            <input className='block m-auto' type="number" readOnly />
            {propsWeight}
            {propsHeight}
        </div>
    );
}

export default ResultIMC;