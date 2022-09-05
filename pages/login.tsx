import {
  Button, FormControl, FormErrorMessage, FormLabel, Heading, Input, Spinner, VStack,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import * as Yup from 'yup';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { login } from '../store/reducers/ActionCreators';

const Login = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.authReducer);

  const {
    handleChange, handleSubmit, values, errors, resetForm,
  } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().required('email is required'),
      password: Yup.string().required('password is required'),
    }),
    onSubmit: (val) => {
      dispatch(login(val)).then(() => {
        router.replace('/');
      });
      resetForm();
    },
  });

  if (isLoading) {
    return <>
  <Header />
  <VStack
      mx='auto'
      w={{ base: '90%', md: 500 }}
      h="100vh"
      justifyContent="center" >
    <Spinner
      thickness='4px'
      speed='0.65s'
      emptyColor='gray.200'
      color='purple.400'
      size='xl'
 />
  </VStack>
  </>;
  }

  return (
        <>
     <Header />
     <form onSubmit={handleSubmit}>
            <VStack
                mx='auto'
                w={{ base: '90%', md: 500 }}
                h="100vh"
                justifyContent="center">

                <Heading>Sign In</Heading>

                <FormControl isInvalid={!!errors.email}>
                    <FormLabel> Email Address</FormLabel>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        variant="filled"
                        onChange={handleChange}
                        value={values.email}
                    />
                    <FormErrorMessage>{errors.email}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!errors.password}>
                    <FormLabel>Password</FormLabel>
                    <Input
                        id="password"
                        name="password"
                        type="password"
                        variant="filled"
                        onChange={handleChange}
                        value={values.password}
                    />
                    <FormErrorMessage>{errors.password}</FormErrorMessage>
                </FormControl>

                <Button type="submit" colorScheme="purple" width="full">
                    Login
                </Button>
            </VStack>
        </form>
        <Footer />
        </>
  );
};

export default Login;
