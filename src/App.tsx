import { useState} from 'react';
import Forms from './components/Forms';
import ResultIMC from './components/ResultIMC';


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
      <div className='container font-roboto-mono  w-screen h-screen m-auto px-52'>
      <h1 className="bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500 bg-clip-text text-transparent text-center py-12 text-blue-700 text-5xl">Calculadora de IMC</h1>
      <Forms setWeight={setWeight} setHeight={setHeight} />
      <ResultIMC weight={weight} height={height} />
      </div>
    ) 
  }

  export default App 
  export type {ItypeProps, ItypePropsSet}
