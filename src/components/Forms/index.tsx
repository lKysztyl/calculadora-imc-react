import { ItypePropsSet } from "../../App";


function Forms({setWeight, setHeight}: ItypePropsSet) {

    return (
        <form className='bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500 flex items-center justify-center    rounded-t-md p-8 mx-0'>
            <label htmlFor="weight" className="text-blue-400">Peso(kg):</label>
            <input id="oi" onChange={({ target }) => setWeight(parseInt(target.value))} className='block m-auto text-center w-72 rounded-md p-1 ml-2 mr-8 appearance-none focus:outline-none focus:ring' type="number" placeholder='Peso em kg ex: 70kg' />

            <label htmlFor="height" className="text-white">Altura(cm):</label>
            <input onChange={({ target }) => setHeight(parseFloat(target.value))} className='block m-auto text-center w-72 rounded-md p-1 ml-2 mr-8 focus:outline-none focus:ring' type="number" placeholder='Altura em CM ex: 175' required />
        </form>
    );
}

export default Forms;