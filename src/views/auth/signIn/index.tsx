/* eslint-disable */
/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || | 
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Horizon UI - v1.1.0
=========================================================

* Product Page: https://www.horizon-ui.com/
* Copyright 2022 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import { Link, useHistory } from 'react-router-dom'
// Chakra imports
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
import illustration from "assets/img/auth/auth.png";
import { FcGoogle } from "react-icons/fc";
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6, 'A senha deve ter no mínimo 6 caracteres').max(20, 'A senha deve ter no máximo 20 caracteres').required(),
})

interface FormData {
  email: string
  password: string
  remember?: boolean
}

function SignIn() {
  // Chakra color mode
  const textColor = useColorModeValue("navy.700", "white");
  const textColorSecondary = "gray.400";
  const brandStars = useColorModeValue("red.600", "red.400");
  const googleBg = useColorModeValue("gray.200", "gray.900");
  const googleText = useColorModeValue("navy.700", "white");
  const googleHover = useColorModeValue(
    { bg: "yellow.500" },
    { bg: "yellow.400" }
  );
  const googleActive = useColorModeValue(
    { bg: "yellow.600" },
    { bg: "yellow.400" }
  );

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: "onChange"
  });
  const history = useHistory()

  // Verificador dos dados passados pelo usuário, garantindo que estejam no formato correto e que estejam alocados corretamente
  const formSubmitHandler = (data: FormData) => {
    if (!errors.email || errors.password) {
      console.log(data)
      history.push('/')
    }
  }

  return (
    <DefaultAuth illustrationBackground={illustration} image={illustration}>
      <Flex
        maxW={{ base: "100%", md: "max-content" }} w='100%' mx={{ base: "auto", lg: "0px" }}
        me='auto' h='100%' alignItems='start' justifyContent='center'
        mb={{ base: "30px", md: "60px" }}
        px={{ base: "25px", md: "0px" }}
        mt={{ base: "40px", md: "14vh" }} flexDirection='column'>
        <Box me='auto'>
          <Heading color={textColor} fontSize='36px' mb='10px'>
            Entrar
          </Heading>
          <Text mb='36px' ms='4px' color={textColorSecondary}
            fontWeight='400' fontSize='md'>
            Digite seu email e senha para logar!
          </Text>
        </Box>
        <Flex zIndex='2' direction='column' w={{ base: "100%", md: "420px" }} maxW='100%' background='transparent'
          borderRadius='15px' mx={{ base: "auto", lg: "unset" }} me='auto'>
          <Button fontSize='sm' me='0px' mb='26px' py='15px' h='50px' borderRadius='16px' bg={googleBg}
            color={googleText} fontWeight='500' _hover={googleHover} _active={googleActive} _focus={googleActive}>
            <Icon as={FcGoogle} w='20px' h='20px' me='10px' />
            Entrar com conta Google
          </Button>
          <Flex align='center' mb='25px'>
            <HSeparator />
            <Text color='gray.400' mx='14px'>
              ou
            </Text>
            <HSeparator />
          </Flex>
          <Flex direction='column' width='full' maxWidth='md' mx='auto' mb='60px'>
            <form onSubmit={handleSubmit(formSubmitHandler)} className="space-y-6">
              <Flex direction='column'>
                <FormLabel style={{ color: errors.email ? "red" : '' }} display='flex' mb='8px' fontWeight='500' fontSize='sm' ms='4px'>
                  Email<Text color={brandStars}>*</Text>
                </FormLabel>
                <input {...register('email')} style={{ color: errors.password ? "red" : 'black' }} type="text" className="w-full p-2 border border-gray-300 rounded mt-1" />
              </Flex>
              <Text color='red'>
                {errors.email && "Campo inválido!"}
              </Text>
              <Flex direction='column'>

                <FormLabel htmlFor="" style={{ color: errors.password ? "red" : '' }} display='flex' mb='8px' fontWeight='500' fontSize='sm' ms='4px'>Senha (6 a 20 dígitos)<Text color={brandStars}>*</Text></FormLabel>
                <input {...register('password')} style={{ color: errors.password ? "red" : 'black' }} type="password" className="w-full p-2 border border-gray-300 rounded mt-1" />
                <Text color='red'>
                  {errors.password && errors.password.message && <span>{errors.password.message}</span>}
                </Text>
              </Flex>
              <Flex direction='column'>
                <Flex alignItems='center' justify='space-between'>
                  <Flex alignItems='center'>
                    <Checkbox mb='3'{...register('remember')} type="checkbox" className="h-4 w-4 text-blue-300 rounded mt-1" />
                    <FormLabel htmlFor="" className="ml-2 text-sm">Permanecer logado?</FormLabel>
                  </Flex>
                  <a href="*****" className="font-medium text-blue-500 text-sm">Esqueceu da senha?</a>
                </Flex>
              </Flex>
              <Flex zIndex='2' direction='column' w={{ base: "100%", md: "420px" }} maxW='100%' background='transparent'
                borderRadius='15px' mx={{ base: "auto", lg: "unset" }} me='auto'>
                <Button type='submit' fontSize='sm' me='0px' mb='26px' py='15px' h='50px' borderRadius='16px' bg={googleBg}
                  color={googleText} fontWeight='500' _hover={googleHover} _active={googleActive} _focus={googleActive}>Logar</Button>
              </Flex>
            </form>
            <Flex mt='2' justify='space-between'>
              Ainda não possui cadastro? <Link to='/sign-up' className="font-medium text-blue-500 text-sm" >Cadastre-se agora</Link>
            </Flex>

          </Flex>
        </Flex>
      </Flex>
    </DefaultAuth>
  );
}

export default SignIn;
