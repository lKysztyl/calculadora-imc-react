import { useState} from 'react';
import Forms from './components/Forms';
import ResultIMC from './components/ResultIMC';
import TableIMC from './components/TableIMC';

interface ItypePropsSet {
  setWeight: React.Dispatch<React.SetStateAction<number>>;
  setHeight: React.Dispatch<React.SetStateAction<number>>;
}

interface ItypeProps {
  weight: number;
  height: number;
}

  function App() {
    const [weight, setWeight] = useState<number>(0)
    const [height, setHeight] = useState<number>(0)

    return (
      <div className='container bg-gray-400 w-screen h-screen m-auto px-52'>
      <h1 className="text-center py-8 text-blue-700 text-3xl">Calculadora de IMC</h1>
      <Forms setWeight={setWeight} setHeight={setHeight} />
      <ResultIMC weight={weight} height={height} />
      <TableIMC/>
      </div>
    ) 
  }

  export default App 
  export type {ItypeProps, ItypePropsSet}
