import {
  Button, FormControl, FormErrorMessage,
  FormLabel, Heading, Input, InputGroup,
  InputRightElement, VStack,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import { useState } from 'react';
import * as Yup from 'yup';
import Close from '../assets/images/close.svg';
import Open from '../assets/images/open.svg';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { signUp } from '../store/reducers/ActionCreators';

const SignUp = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { success } = useAppSelector((state) => state.registerReducer);

  const {
    handleChange, handleSubmit, values, errors, resetForm,
  } = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required('name is required'),
      email: Yup.string().required('email is required'),
      password: Yup.string().required('password is required').min(6, 'Password must be at least 6 characters long'),
    }),
    onSubmit: (val) => {
      dispatch(signUp(val));
      resetForm();
    },
  });

  const [showPass, setShowPass] = useState(false);
  const handleClick = () => {
    setShowPass(!showPass);
  };

  if (success) {
    router.replace('/login');
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

        <Heading>Sign Un</Heading>

        <FormControl isInvalid={!!errors.name}>
          <FormLabel> Name </FormLabel>
          <Input
            id="name"
            name="name"
            type="text"
            variant="filled"
            onChange={handleChange}
            value={values.name}
          />
          <FormErrorMessage>{errors.name}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.email}>
          <FormLabel> Email </FormLabel>
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
          <InputGroup>
            <Input
              id="password"
              name="password"
              type={showPass ? 'text' : 'password'}
              variant="filled"
              onChange={handleChange}
              value={values.password}
            />
            <InputRightElement
              width='40px'
              paddingRight='10px'
              onClick={handleClick}>
              {showPass ? <Close fill='purple' /> : <Open fill='purple' />}
            </InputRightElement>
          </InputGroup>
          <FormErrorMessage>{errors.password}</FormErrorMessage>
        </FormControl>

        <Button type="submit" colorScheme="purple" width="full">
          Sign Up
        </Button>
      </VStack>
    </form>

    <Footer />
    </>

  );
};

export default SignUp;
