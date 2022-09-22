import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Link, useHistory } from 'react-router-dom'

// Validador dos campos

const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(6, 'A senha deve ter no mínimo 6 caracteres').max(20, 'A senha deve ter no máximo 20 caracteres').required(),
})

interface FormData {
    email: string
    password: string
    remember?: boolean
}
export default function Login() {

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(schema),
        mode: "onChange"
    });
    const history = useHistory()

    // Verificador dos dados passados pelo usuário, garantindo que estejam no formato correto e que estejam alocados corretamente
    const formSubmitHandler = (data: FormData) => {
        if (!errors.email || errors.password) {
            history.push('/tokenizr-main-page')
        }
    }

    return (
        <div className="min-h-screen flex flex-col justify-center">
            <div className="max-w-md w-full mx-auto">
                <div className="text-center font-medium text-xl"> ENTRAR
                    <div className="text-3xl font-bold text-gray-900 mt-2 text-center">TOKENIZR
                    </div>
                </div>
            </div>
            <div className="max-w-md w-full mx-auto mt-4 bg-white p-8 border border-gray-300">
                <form onSubmit={handleSubmit(formSubmitHandler)} action="" className="space-y-6">
                    <div>
                        <label style={{ color: errors.email ? "red" : 'black' }} className="text-sm-font-bold text-gray-600 block">Email</label>
                        <input {...register('email')} style={{ color: errors.email ? 'red' : 'black' }} type="text" className="w-full p-2 border border-gray-300 rounded mt-1" />
                    </div>
                    {errors.email && "Campo inválido!"}
                    <div>

                        <label htmlFor="" style={{ color: errors.password ? "red" : 'black' }} className="text-sm-font-bold text-gray-600 block">Senha (6 a 20 dígitos)</label>
                        <input {...register('password')} style={{ color: errors.password ? 'red' : 'black' }} type="password" className="w-full p-2 border border-gray-300 rounded mt-1" />
                        {errors.password && errors.password.message && <span>{errors.password.message}</span>}
                    </div>
                    <div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input {...register('remember')} type="checkbox" className="h-4 w-4 text-blue-300 rounded mt-1" />
                                <label htmlFor="" className="ml-2 text-sm text-gray-600">Permanecer logado?</label>
                            </div>
                            <a href="" className="font-medium text-sm text-blue-500">Esqueceu da senha?</a>
                        </div>
                    </div>
                    <div>
                        <button className="w-full text-center py-2 px-4 bg-gray-500 hover:bg-gray-700 rounded-md text-white text-sm">Logar</button>
                    </div>
                </form>
                <div>
                    <Link to='/SignUp'>
                        <button className="w-full text-center py-2 px-4 mt-1 bg-gray-500 hover:bg-gray-700 rounded-md text-white text-sm">Cadastrar</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}