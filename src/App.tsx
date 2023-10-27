import { useState} from 'react';
import Forms from './components/Forms';
import ResultIMC from './components/ResultIMC';

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
      <>
      <h1 className="text-red-500">OI</h1>
      <Forms setPropsWeight={setPropsWeight} setPropsHeight={setPropsHeight} />
      <ResultIMC propsWeight={propsWeight} propsHeight={propsHeight} />
      </>
    ) 
  }

  export default App 
  export type {ItypeProps, ItypePropsSet}
