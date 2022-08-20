import Open from "./../assets/images/open.svg";
import Close from "./../assets/images/close.svg";
import {
  Button, FormControl, FormErrorMessage, FormLabel, Heading, Input, InputGroup, InputRightElement, VStack,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';

const SignUp = () => {
  const {
    handleChange, handleSubmit, values, errors, resetForm, setFieldValue
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
      // eslint-disable-next-line no-alert
      alert(JSON.stringify(val, null, 2));
      resetForm();
    },
  });

  const [showPass, setShowPass] = useState(false)
  const handleClick = () => {
    setShowPass(!showPass)
  }

  return (
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

  );
};


export default SignUp