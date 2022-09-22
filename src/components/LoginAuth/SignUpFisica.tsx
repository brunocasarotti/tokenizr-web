import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Link, useHistory } from 'react-router-dom'
import { parse, isDate } from "date-fns";
import * as yup from 'yup'

// Validador dos campos



function parseDateString(value: string, originalValue: string) {
    const parsedDate = isDate(originalValue) ? originalValue : parse(originalValue, "dd/MM/yyyy", new Date());
    return parsedDate;
}

const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(6, 'A senha deve ter no mínimo 6 caracteres').max(20, 'A senha deve ter no máximo 20 caracteres').required(),
    cpf: yup.number().typeError('Apenas números serão aceitos!').test('len', 'O CPF deve ter 11 números!', val => val?.toString().length == 11),
    date: yup.date().max(new Date()).min(1900).required("Campo obrigatório").transform(parseDateString),
    termos: yup.boolean().oneOf([true])
})

interface FormDataFis {
    email: string
    password: string
    cpf: number
    date: string
    termos: boolean
    exibirCliente?: boolean
}

export default function SingUpFisica() {

    const { register, handleSubmit, formState: { errors } } = useForm<FormDataFis>({
        resolver: yupResolver(schema),
        mode: 'onChange'
    });

    // nave

    const history = useHistory()
    // Verificador dos dados passados pelo usuário, garantindo que estejam no formato correto e que estejam alocados corretamente
    const formSubmitHandler = (data: FormDataFis) => {
        if (!errors.cpf || !errors.email || errors.password || !errors.termos) {
            console.log(data)
            history.push('/tokenizr-main-page')
        }
    }


    return (

        <div>
            <div className="min-h-screen flex flex-col justify-center">
                <div className="max-w-md w-full mx-auto">
                    <div className="text-center font-medium text-xl"> CADASTRO
                        <div className="text-3xl font-bold text-gray-900 mt-2 text-center">TOKENIZR</div>
                    </div>
                </div>
                <div className="max-w-md w-full mx-auto mt-4 bg-white p-8 border border-gray-300">
                    <form onSubmit={handleSubmit(formSubmitHandler)} action="" className="space-y-6">
                        <div>
                            <label htmlFor="" style={{ color: errors.email ? "red" : 'black' }} className="text-sm-font-bold text-gray-600 block">Email</label>
                            <input {...register('email', {})} style={{ color: errors.email ? 'red' : 'black' }} type="text" className="w-full p-2 border border-gray-300 rounded mt-1" />
                        </div>
                        {errors.email && "Campo inválido!"}
                        <div>

                            <label htmlFor="" style={{ color: errors.password ? "red" : 'black' }} className="text-sm-font-bold text-gray-600 block">Senha (6 a 20 dígitos)</label>
                            <input {...register('password')} style={{ color: errors.password ? 'red' : 'black' }} type="password" className="w-full p-2 border border-gray-300 rounded mt-1" />
                            {errors.password && errors.password.message && <span>{errors.password.message}</span>}
                        </div>
                        <div>

                            <label htmlFor="" style={{ color: errors.cpf ? 'red' : 'black' }} className="text-sm-font-bold text-gray-600 block">CPF</label>
                            <input {...register('cpf')} style={{ color: errors.cpf ? 'red' : 'black' }} type="text" className="w-full p-2 border border-gray-300 rounded mt-1" />
                        </div>
                        <div className='mt-2'>
                            {errors.cpf && errors.cpf.message && <span>{errors.cpf.message}</span>}
                        </div>

                        <div>
                            <label htmlFor="" style={{ color: errors.date ? 'red' : 'black' }} className="text-sm-font-bold text-gray-600 block">Data de nascimento (DD/MM/YYYY)</label>
                            <input {...register('date')} type="text" style={{ color: errors.date ? 'red' : 'black' }} className="w-full p-2 border border-gray-300 rounded mt-1" />
                        </div>
                        {errors.date && "Campo inválido!"}
                        <div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input {...register('termos', { required: true })} style={{ color: errors.termos ? 'red' : 'black' }} type="checkbox" className="h-4 w-4 text-blue-300 rounded mt-1" />
                                    <label htmlFor="" style={{ color: errors.termos ? 'red' : 'black' }} className="ml-2 pt-3 text-sm text-gray-600">Li e aceito os <a href="">Termos de Uso</a> e <a href="">Política de privacidade</a> da plataforma Tokenizr</label>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input {...register('exibirCliente')} type="checkbox" className="h-4 w-4 text-blue-300 rounded mt-1" />
                                    <label htmlFor="" className="ml-2 pt-3 text-sm text-gray-600">Aceito exibir minha imagem e valores investidos em feeds de investimentos do site (não obrigatório)</label>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button className="w-full text-center py-3 bg-gray-600 hover:bg-gray-800 rounded-md text-white text-sm">Registrar</button>
                        </div>
                    </form>
                    <div>
                        <Link to='/SignUp'>
                            <button className="w-full text-center py-2 bg-gray-400 hover:bg-gray-800 rounded-md mt-2 text-white text-sm">Voltar</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

