import { Link } from 'react-router-dom'

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

export default function SingUp() {

    // Chakra color mode
    const textColor = useColorModeValue("navy.700", "white");
    const buttonBg = useColorModeValue("gray.200", "gray.900");
    const hover = useColorModeValue(
        { bg: "yellow.500" },
        { bg: "yellow.400" }
    );



    return (
        <DefaultAuth illustrationBackground={placeholder} image={placeholder}>
            <Flex
                maxW={{ base: "100%", md: "max-content" }} w='100%'
                me='auto' h='100%' alignItems='start' justifyContent='center'

                px={{ base: "25px", md: "0px" }}
                flexDirection='column'>
                <div>
                    <div className="min-h-screen flex flex-col justify-center">
                        <div className="max-w-md w-full mx-auto">
                            <Heading textAlign='center' fontSize='5xl' mb='5px' color={textColor} fontWeight='medium'> TIPO DA CONTA
                            </Heading>
                            <HSeparator></HSeparator>
                        </div>
                        <div className="max-w-md w-full mx-auto mt-4">
                            <Link to='/auth/sign-in'>
                                <Button _hover={hover} borderColor='gray.300' border='2px' mb='3' size='md' color={textColor} bg={buttonBg}>Voltar</Button>
                            </Link>
                            <Link to='/sign-up-fisica'>
                                <Button width='full' bg={buttonBg} borderColor='gray.300' border='2px' textAlign='center' fontSize='4xl' color={textColor} mt='3' py='5' borderRadius='15px' _hover={hover} className='py-5'>
                                    FISICA
                                </Button>
                            </Link>
                            <Link to='/sign-up-juridica'>
                                <Button width='full' bg={buttonBg} borderColor='gray.300' border='2px' textAlign='center' fontSize='4xl' color={textColor} mt='3' py='5' borderRadius='15px' _hover={hover} className='py-5'>
                                    JURIDICA
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </Flex>
        </DefaultAuth>
    )
}