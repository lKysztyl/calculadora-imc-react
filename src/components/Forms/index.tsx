import { ItypePropsSet } from "../../App";


function Forms({setPropsWeight, setPropsHeight}: ItypePropsSet) {

    return (
        <form className='bg-cyan-400 flex items-center justify-center    rounded-t-md p-8 mx-0'>
            <label htmlFor="weight">Peso(kg):</label>
            <input id="oi" onChange={({ target }) => setPropsWeight(parseInt(target.value))} className='block m-auto text-center w-72 rounded-md p-1 ml-2 mr-8 ' type="number" placeholder='Peso em kg ex: 70kg' />

            <label htmlFor="height">Altura(cm):</label>
            <input onChange={({ target }) => setPropsHeight(parseFloat(target.value))} className='block m-auto text-center w-72 rounded-md p-1 ml-2 mr-8' type="number" placeholder='Altura em Metros ex: 1.75' required />
        </form>
    );
}

export default Forms;