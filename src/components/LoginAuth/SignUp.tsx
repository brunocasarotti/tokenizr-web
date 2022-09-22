import { Link } from 'react-router-dom'
import Button from '../../utilities/Button'

export default function SingUp() {
    return (
        <div>
            <div className="min-h-screen flex flex-col justify-center">
                <div className="max-w-md w-full mx-auto">
                    <div className="text-center font-medium text-xl"> ESCOLHA O TIPO DA CONTA
                    </div>
                </div>
                <div className="max-w-md w-full mx-auto mt-4">
                    <Link to='/'>
                        <Button className='bg-gray-400 hover:bg-gray-800 mb-4 justify-center'>Voltar</Button>
                    </Link>
                    <Link to='/SignUpFisica'>
                        <Button className='font-medium w-full text-center py-5 bg-gray-500 hover:bg-gray-800 rounded-md
                     text-white text-xl'>
                            FISICA
                        </Button>
                    </Link>
                    <Link to='/SignUpJuridica'>
                        <Button className='font-medium w-full text-center mt-3 py-5 bg-gray-500 hover:bg-gray-800 rounded-md
                    text-white text-xl'>
                            JURIDICA
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}