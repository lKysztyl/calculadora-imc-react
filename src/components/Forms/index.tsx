import { ItypePropsSet } from "../../App";


function Forms({setWeight, setHeight}: ItypePropsSet) {

    return (
        <form className='bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500 flex items-center justify-center max-md:block rounded-t-md p-8 mx-0 m-auto max-md:text-center'>
            <label htmlFor="weight" className="text-blue-400 max-md:text-white">Peso(kg):</label>
            <input id="weight" onChange={({ target }) => setWeight(parseInt(target.value))} className='block max-md:inline-block m-auto text-center w-72 rounded-md p-1 ml-2 mr-8 max-md:mr-2 appearance-none focus:outline-none focus:ring max-md:mb-4 max-md:mt-2' type="number" placeholder='Peso em kg ex: 70kg' required />

            <label htmlFor="height" className="text-white">Altura(cm):</label>
            <input id="height" onChange={({ target }) => setHeight(parseFloat(target.value))} className='block max-md:inline-block m-auto text-center w-72 rounded-md p-1 ml-2 mr-8 max-md:mr-2 focus:outline-none focus:ring max-md:mb-4 max-md:mt-2' type="number" placeholder='Altura em CM ex: 175' required />
        </form>
    );
}

export default Forms;