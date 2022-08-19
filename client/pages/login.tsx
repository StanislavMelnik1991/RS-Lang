import {
  Button, FormControl, FormErrorMessage, FormLabel, Heading, Input, VStack,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Login = () => {
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
      // eslint-disable-next-line no-alert
      alert(JSON.stringify(val, null, 2));
      resetForm();
    },
  });

  return (
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

  );
};

export default Login;
