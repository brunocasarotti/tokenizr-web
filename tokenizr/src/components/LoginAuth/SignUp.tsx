import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from "react"
import * as yup from 'yup'
import { Link } from 'react-router-dom'
import Button from '../../utilities/Button'




// Validador dos campos

const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(4, 'A senha deve ter no mínimo 6 caracteres').max(20, 'A senha deve ter no máximo 20 caracteres').required(),
    cpf: yup.string().test('len', 'O CPF deve ter 14 caracteres (apenas números serão aceitos)', val => val?.length == 11),
    cnpj: yup.string().test('len', 'O CNPJ deve ter 14 caracteres (apenas números serão aceitos)', val => val?.length == 14).required(),
    dataDeNascimento: yup.date().required(),
    termos: yup.boolean().oneOf([true], 'Message')
})

enum ContaEnum { fisica, juridica }

interface FormData {
    email: string
    password: string
    cpf: number
    cnpj: number
    dataDeNascimento: Date
    conta: ContaEnum
    termos: boolean
    remember?: boolean
    exibirCliente?: boolean

}


export default function SingUp() {

    const [fisica, setFisica] = useState<ContaEnum>(ContaEnum.fisica)
    const [juridica, setJuridica] = useState<ContaEnum>(ContaEnum.juridica)
    const [visivel, setVisivel] = useState<'fisica' | 'juridica' | 'selecionar'>('selecionar')



    function contaFisica(cliente: ContaEnum) {
        setFisica(fisica)
        setVisivel('fisica')
    }

    function contaJuridica(cliente: ContaEnum) {
        setJuridica(juridica)
        setVisivel('juridica')
    }




    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(schema),
        mode: "onChange"
    });


    // Verificador dos dados passados pelo usuário, garantindo que estejam no formato correto e que estejam alocados corretamente
    const formSubmitHandler: SubmitHandler<FormData> = (data: FormData) => {
        console.log(data) // Console Log para verificar se os dados estão sendo obtidos
    }

    return (



        <div>
            {visivel === 'selecionar' && (

                <div className="min-h-screen flex flex-col justify-center">
                    <div className="max-w-md w-full mx-auto">
                        <div className="text-center font-medium text-xl"> ESCOLHA O TIPO DA CONTA
                        </div>
                    </div>
                    <div className="max-w-md w-full mx-auto mt-4">
                        <Link to='/'>
                        <Button className='bg-gray-400 hover:bg-gray-800 mb-4 justify-center'>Voltar</Button>
                        </Link>
                        <Button className='font-medium w-full text-center py-5 bg-gray-500 hover:bg-gray-800 rounded-md
                     text-white text-xl' onClick={contaFisica}>
                            FISICA
                        </Button>

                        <Button className='font-medium w-full text-center mt-3 py-5 bg-gray-500 hover:bg-gray-800 rounded-md
                     text-white text-xl' onClick={contaJuridica}>
                            JURIDICA
                        </Button>
                    </div>
                </div>


            )}  {visivel === 'fisica' ? (
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
                                <input {...register('email')} style={{ color: errors.email ? 'red' : 'black' }} type="text" className="w-full p-2 border border-gray-300 rounded mt-1" />
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
                            {errors.cpf && errors.cpf.message && <span>{errors.cpf.message}</span>}
                            <div>
                                <label htmlFor="" style={{ color: errors.dataDeNascimento ? 'red' : 'black' }} className="text-sm-font-bold text-gray-600 block">Data de nascimento (MM/DD/YYYY)</label>
                                <input {...register('dataDeNascimento')} type="text" style={{ color: errors.dataDeNascimento ? 'red' : 'black' }} className="w-full p-2 border border-gray-300 rounded mt-1" />
                            </div>
                            {errors.dataDeNascimento && "Campo inválido!"}
                            <div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <input {...register('termos', { required: true })} style={{ color: errors.termos ? 'red' : 'black' }} type="checkbox" className="h-4 w-4 text-blue-300 rounded mt-1" />
                                        <label htmlFor="" style={{ color: errors.termos ? 'red' : 'black' }} className="ml-2 pt-3 text-sm text-gray-600">Li e aceito os <a href="">Termos de Uso</a> e <a href="">Política de privacidade</a> da plataforma Tokenizr</label>
                                    </div>
                                </div>
                                {errors.termos && "Campo obrigatório!"}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <input {...register('exibirCliente')} type="checkbox" className="h-4 w-4 text-blue-300 rounded mt-1" />
                                        <label htmlFor="" className="ml-2 pt-3 text-sm text-gray-600">Aceito exibir minha imagem e valores investidos em feeds de investimentos do site (não obrigatório)</label>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <Link to='/tokenizr-main-page'>
                                    <button className="w-full text-center py-3 bg-gray-600 hover:bg-gray-800 rounded-md text-white text-sm">Registrar</button>
                                </Link>
                            </div>
                        </form>
                        <div>
                            <Link to='/'>
                                <button className="w-full text-center py-2 bg-gray-400 hover:bg-gray-800 rounded-md mt-2 text-white text-sm">Voltar</button>
                            </Link>

                        </div>

                    </div>
                </div>
            ) : (
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
                                <input {...register('email')} style={{ color: errors.email ? 'red' : 'black' }} type="text" className="w-full p-2 border border-gray-300 rounded mt-1" />
                            </div>
                            {errors.email && "Campo inválido!"}
                            <div>

                                <label htmlFor="" style={{ color: errors.password ? "red" : 'black' }} className="text-sm-font-bold text-gray-600 block">Senha (6 a 20 dígitos)</label>
                                <input {...register('password')} style={{ color: errors.password ? 'red' : 'black' }} type="password" className="w-full p-2 border border-gray-300 rounded mt-1" />
                                {errors.password && errors.password.message && <span>{errors.password.message}</span>}
                            </div>
                            <div>
                                <label htmlFor="" style={{ color: errors.cnpj ? 'red' : 'black' }} className="text-sm-font-bold text-gray-600 block">CNPJ</label>
                                <input {...register('cnpj')} style={{ color: errors.cnpj ? 'red' : 'black' }} type="text" className="w-full p-2 border border-gray-300 rounded mt-1" />
                            </div>
                            {errors.cnpj && errors.cnpj.message && <span>{errors.cnpj.message}</span>}
                            {errors.dataDeNascimento && "Campo inválido!"}
                            <div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <input {...register('termos', { required: true })} style={{ color: errors.termos ? 'red' : 'black' }} type="checkbox" className="h-4 w-4 text-blue-300 rounded mt-1" />
                                        <label htmlFor="" style={{ color: errors.termos ? 'red' : 'black' }} className="ml-2 pt-3 text-sm text-gray-600">Li e aceito os <a href="">Termos de Uso</a> e <a href="">Política de privacidade</a> da plataforma Tokenizr</label>
                                    </div>
                                </div>
                                {errors.termos && "Campo obrigatório!"}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <input {...register('exibirCliente')} type="checkbox" className="h-4 w-4 text-blue-300 rounded mt-1" />
                                        <label htmlFor="" className="ml-2 pt-3 text-sm text-gray-600">Aceito exibir a imagem da empresa e valores investidos em feeds de investimentos do site (não obrigatório)</label>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <Link to='/tokenizr-main-page'>
                                    <button className="w-full text-center py-3 bg-gray-600 hover:bg-gray-800 rounded-md text-white text-sm">Registrar</button>
                                </Link>
                            </div>
                        </form>
                        <div>
                            <Link to='/'>
                                <button className="w-full text-center py-2 bg-gray-400 hover:bg-gray-800 rounded-md mt-2 text-white text-sm">Voltar</button>
                            </Link>

                        </div>

                    </div>
                </div>
            )}

        </div>
    )
}
