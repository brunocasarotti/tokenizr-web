/* eslint-disable */
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { NavLink, Link, useHistory } from 'react-router-dom'
import { parse, isDate } from "date-fns";
import * as yup from 'yup'
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormLabel,
  Heading,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import { HSeparator } from "components/separator/Separator";
import DefaultAuth from "layouts/auth/Default";
// Assets
import placeholder from "assets/img/auth/placeholder.jpg";


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

  // Chakra color mode
  const textColor = useColorModeValue("navy.700", "white");
  const buttonBg = useColorModeValue("gray.200", "gray.900");
  const background = useColorModeValue("gray.200", "gray.800");
  const brandStars = useColorModeValue("red.600", "red.400");
  const Hover = useColorModeValue(
    { bg: "yellow.500" },
    { bg: "yellow.400" }
  );

  const { register, handleSubmit, formState: { errors } } = useForm<FormDataFis>({
    resolver: yupResolver(schema),
    mode: 'onChange'
  });

  const history = useHistory()

  // Verificador dos dados passados pelo usuário, garantindo que estejam no formato correto e que estejam alocados corretamente
  const formSubmitHandler = (data: FormDataFis) => {
    if (!errors.cpf || !errors.email || errors.password || !errors.termos) {
      history.push('/admin/default')
    }
  }


  return (
    <DefaultAuth illustrationBackground={placeholder} image={placeholder}>
      <Flex
        maxW={{ base: "100%", md: "max-content" }} w='100%'
        me='auto' h='100%' alignItems='start' justifyContent='center'

        px={{ base: "25px", md: "0px" }}
        flexDirection='column'>

        <Flex justifyContent='center' maxWidth='md' width='full' mx='auto'>
          <Text textAlign='center' fontSize='large' fontWeight='bold'> CADASTRO
            <Heading fontSize='3xl' fontWeight='bold' mt='2' textAlign='center' >TOKENIZR</Heading>
          </Text>
        </Flex>
        <HSeparator mt='3'></HSeparator>
        <Flex flexDirection='column' maxWidth='md' mt='3' p='8' width='full' bg={background}>
          <form onSubmit={handleSubmit(formSubmitHandler)} action="" className="space-y-6">
            <Flex flexDirection='column'>
              <FormLabel style={{ color: errors.email ? "red" : '' }} display='flex' mb='8px' fontWeight='500' fontSize='sm' ms='4px' >Email<Text color={brandStars}>*</Text></FormLabel>
              <input {...register('email')} style={{ color: errors.email ? 'red' : 'black' }} type="text" className="w-full p-2 border border-gray-300 rounded mt-1" />
            </Flex>
            <Text color='red'> {errors.email && "Campo inválido!"} </Text>
            <Flex flexDirection='column'>
              <FormLabel style={{ color: errors.password ? "red" : '' }} display='flex' mb='8px' fontWeight='500' fontSize='sm' ms='4px'>Senha (6 a 20 dígitos)<Text color={brandStars}>*</Text></FormLabel>
              <input defaultValue={''} {...register('password')} style={{ color: errors.password ? 'red' : 'black' }} type="password" className="w-full p-2 border border-gray-300 rounded mt-1" />
              <Text color='red'>
                {errors.password && errors.password.message && <span>{errors.password.message}</span>}
              </Text>
            </Flex>
            <Flex flexDirection='column'>
              <FormLabel style={{ color: errors.cpf ? "red" : '' }} display='flex' mb='8px' fontWeight='500' fontSize='sm' ms='4px'>CPF<Text color={brandStars}>*</Text></FormLabel>
              <input {...register('cpf')} style={{ color: errors.cpf ? 'red' : 'black' }} type="text" className="w-full p-2 border border-gray-300 rounded mt-1" />
            </Flex>
            <Flex className='mt-2'>
              <Text color='red'>
                {errors.cpf && errors.cpf.message && <span>{errors.cpf.message}</span>}
              </Text>
            </Flex>

            <Flex flexDirection='column'>
              <FormLabel htmlFor="" style={{ color: errors.date ? 'red' : '' }} display='flex' mb='8px' fontWeight='500' fontSize='sm' ms='4px'>Data de nascimento (DD/MM/YYYY)<Text color={brandStars}>*</Text></FormLabel>
              <input {...register('date')} type="text" style={{ color: errors.date ? 'red' : 'black' }} className="w-full p-2 border border-gray-300 rounded mt-1" />
            </Flex>
            {errors.date && "Campo inválido!"}
            <Flex flexDirection='column'>
              <Flex justifyContent='space-between' justifyItems='center'>
                <Flex alignItems='center'>
                  <input {...register('termos', { required: true })} style={{ color: errors.termos ? 'red' : '' }} type="checkbox" className="h-4 w-4 text-blue-300 rounded mt-1" />
                  <FormLabel htmlFor="" style={{ color: errors.termos ? 'red' : '' }} fontSize='sm' ml='2' mt='2' >Li e aceito os <a href='' className="font-medium text-blue-600 text-sm">Termos de Uso</a> e
                    <a href="" className="font-medium text-blue-600 text-sm"> Política de Privacidade</a> da plataforma Tokenizr</FormLabel>
                </Flex>
              </Flex>
              <Flex justifyContent='space-between' justifyItems='center' >
                <Flex alignItems='center'>
                  <input  {...register('exibirCliente')} type="checkbox" className="h-4 w-4 text-blue-300 rounded mt-1" />
                  <FormLabel fontSize='sm' ml='2' mt='2'>Aceito exibir a imagem da empresa e valores investidos em feeds de investimentos do site</FormLabel>
                </Flex>
              </Flex>
              <Flex justifyContent='space-between' justifyItems='center'>
                <Flex alignItems='center'>
                  <FormLabel fontSize='sm' ml='2' mt='2' >Já possui uma conta?
                    <NavLink to='/auth/sign-in'>
                      <a className='text-blue-600'> Entrar</a>
                    </NavLink></FormLabel>
                </Flex>
              </Flex>
            </Flex>
            <Flex>
              <Button type='submit' width='full' bg={buttonBg} borderColor='gray.300' border='2px' textAlign='center' fontSize='1xl' color={textColor} mt='3' py='5' borderRadius='15px' _hover={Hover} className='py-1'>Registrar</Button>
            </Flex>
          </form>
          <Link to='/sign-up'>
            <Button width='full' bg={buttonBg} borderColor='gray.300' border='2px' textAlign='center' fontSize='1xl' color={textColor} mt='3' py='5' borderRadius='15px' _hover={Hover} className='py-1'>Voltar</Button>
          </Link>
        </Flex>
      </Flex>
    </DefaultAuth >

  )
}

