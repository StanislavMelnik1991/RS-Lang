import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { authSlice } from '../store/reducers/AuthSlice';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    if (isLoggedIn && JSON.parse(isLoggedIn)) {
      const name = localStorage.getItem('name');
      const token = localStorage.getItem('token');
      const userID = localStorage.getItem('userID');
      if (name && token && userID) {
        dispatch(authSlice.actions.loginSuccess({
          userID: JSON.parse(userID),
          name: JSON.parse(name),
          token: JSON.parse(token),
        }));
      }
    }
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <Head>
        <title>RS Lang</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/dictionary.svg" />
      </Head>
      <Header />

      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'purple.400',
                zIndex: -1,
              }}>
              RS lang
            </Text>
            <br />{' '}
            <Text color={'purple.400'} as={'span'}>
              Учиться просто
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
          RS lang - это эффективный сервис для изучения английского.
          Играй в игры, учи новые слова, прокачивай свои знания!
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Button
              as={'a'}
              href={'/sign-up'}
              rounded={'full'}
              bg={'purple.400'}
              color={'white'}
              _hover={{
                bg: 'purple.500',
              }}>
              Зарегистрироваться
            </Button>
            <Button
            as={'a'}
            href={'/team'}
            rounded={'full'}>Наша команда</Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'contain'}
          src={
            'https://cdn.pixabay.com/photo/2017/09/21/13/32/girl-2771936_960_720.jpg'

          }
        />
      </Flex>
    </Stack>

      <Footer />
    </div>
  );
};

export default Home;
