import type { NextPage } from 'next';
import { Box } from '@chakra-ui/react'

const Header: NextPage = () => (
    <Box display='flex' justifyContent='space-between' w='100%' border='2px solid black' bg="purple.500" color="white">
      <span>Header </span>
      <span>Help </span>
      <span>Profile </span>
      <span>Level </span>
    </Box>
);

export default Header;
