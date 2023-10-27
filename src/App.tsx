import { useState} from 'react';
import Forms from './components/Forms';
import ResultIMC from './components/ResultIMC';
import TableIMC from './components/TableIMC';

interface ItypePropsSet {
  setPropsWeight: React.Dispatch<React.SetStateAction<number>>;
  setPropsHeight: React.Dispatch<React.SetStateAction<number>>;
}

interface ItypeProps {
  propsWeight: number;
  propsHeight: number;
}

  function App() {
    const [propsWeight, setPropsWeight] = useState<number>(0)
    const [propsHeight, setPropsHeight] = useState<number>(0)

    return (
      <div className='container bg-gray-400 w-screen h-screen m-auto px-52'>
      <h1 className="text-center py-8 text-blue-700 text-3xl">Calculadora de IMC</h1>
      <Forms setPropsWeight={setPropsWeight} setPropsHeight={setPropsHeight} />
      <ResultIMC propsWeight={propsWeight} propsHeight={propsHeight} />
      <TableIMC/>
      </div>
    ) 
  }

  export default App 
  export type {ItypeProps, ItypePropsSet}
