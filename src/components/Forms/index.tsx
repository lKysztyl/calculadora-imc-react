import { ItypePropsSet } from "../../App";


function Forms({setPropsWeight, setPropsHeight}: ItypePropsSet) {

    return (
        <form className='bg-cyan-400 w-screen flex'>
            <input onChange={({ target }) => setPropsWeight(parseInt(target.value))} className='block m-auto' type="number" placeholder='Peso em kg ex: 70kg' />
            <input onChange={({ target }) => setPropsHeight(parseInt(target.value))} className='block m-auto' type="number" placeholder='Altura em Metros ex: 1.75' />
        </form>
    );
}

export default Forms;