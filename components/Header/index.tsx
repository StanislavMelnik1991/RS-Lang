import {
  Box,
  Flex,
  IconButton,
  Button,
  Link,
  Stack,
  Collapse,
  useColorModeValue,
  useDisclosure,
  Image,
  Avatar,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
} from '@chakra-ui/icons';
import DesktopNav from '../Navigation/DesktopNav';
import MobileNav from '../Navigation/MobileNav';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { authSlice } from '../../store/reducers/AuthSlice';

const Header = () => {
  const { isOpen, onToggle } = useDisclosure();

  const dispatch = useAppDispatch();
  const { isLoggedIn, name } = useAppSelector((state) => state.authReducer);

  const logout = () => {
    dispatch(authSlice.actions.logout());
  };

  return (
    <Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Link href={'/'}>
            <Image src='/dictionary.svg' alt="Logo" width={100} height={50} />
          </Link>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        {!isLoggedIn && <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
          <Button
            as={'a'}
            fontSize={'lg'}
            fontWeight={400}
            variant={'link'}
            href={'/login'}>
            Войти
          </Button>
          <Button
            display={{ base: 'none', md: 'inline-flex' }}
            as={'a'}
            fontSize={'lg'}
            fontWeight={600}
            color={'white'}
            bg={'purple.400'}
            href={'/sign-up'}
            _hover={{
              bg: 'purple.300',
            }}>
            Регистрация
          </Button>
        </Stack>}
        {isLoggedIn && <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
          <Avatar name={name}
            bg={'purple.300'}
          />
          <Button
            as={'a'}
            fontSize={'lg'}
            fontWeight={400}
            variant={'link'}
            onClick={logout}
          >
            Выход
          </Button>
        </Stack>}
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
};

export default Header;
