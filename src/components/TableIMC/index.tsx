

export default function TableIMC() {

    return (
        <div className="grid grid-cols-4 text-center">
            <div className="bg-blue-300 p-4">
                <h4>Abaixo do Peso</h4>
                <p>&lt; 18.5</p>
            </div>
            <div className="bg-blue-800 p-4">
                <h4>Peso Ideal</h4>
                <p>18.5 a 24.9</p>
            </div>
            <div className="bg-yellow-300 p-4">
                <h4>Sobrepeso</h4>
                <p>25 a 30</p>
            </div>
            <div className="bg-red-400 p-4">
                <h4>Obesidade</h4>
                <p>30 &gt;</p>
            </div>
        </div>
    )
}

