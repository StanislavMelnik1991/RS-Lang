import type { NextPage } from "next";
import { Box, List, ListItem } from "@chakra-ui/react";
import Link from 'next/link';

const Sidebar: NextPage = () => (
  <Box bg="purple.500" w="240px" minH="100vh" color="white">
    <nav>
      <List display='flex' flexDir='column' alignItems='center' fontSize='3xl'>
        <ListItem>
          <Link href="/">Home</Link>
        </ListItem>
        <ListItem>
          <Link href="/words">Words</Link>
        </ListItem>
        <ListItem>
          <Link href="/home">Games</Link>
        </ListItem>
        <ListItem>
          <Link href="/exit" >
            Exit
          </Link>
        </ListItem>
      </List>
    </nav>
  </Box>
);

export default Sidebar;
