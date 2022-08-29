import type { NextPage } from 'next';
import {
  Box,
  Container,
  Image,
  Link,
  Stack,
  Text,
  Tooltip,
  useColorModeValue,
} from '@chakra-ui/react';

const GithubButton = ({

  label,
  href,
}: {
  label: string;
  href: string;
}) => (
    <Tooltip label={label} bg={'purple.400'}>
      <Link href={href} isExternal>
      <Image
      borderRadius={'50%'}
      width={50}
      height={50}
      alt={label}
      src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/>
    </Link>
    </Tooltip>
);

const Footer: NextPage = () => (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Link href="https://rs.school/js/" isExternal>
        <Image src={'/rs_school_js.svg'} alt="RSSchool Logo" width={100} height={50}/>
        </Link>
        <Text>© 2022 Powered by RSSchool. All rights reserved</Text>
        <Stack direction={'row'} spacing={6}>
          <GithubButton label={'Alex'} href={'https://github.com/alexger95'} />
          <GithubButton label={'Ksu'} href={'https://github.com/KseniyaMelnik'} />
          <GithubButton label={'Stas'} href={'https://github.com/StanislavMelnik1991'} />
        </Stack>
      </Container>
    </Box>
);

export default Footer;
