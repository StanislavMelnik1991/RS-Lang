import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { BellIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import { WordType } from '../../types';

const Word = ({
  image, word, transcription, textMeaning,
  textExample, wordTranslate, textMeaningTranslate,
  textExampleTranslate, audio, audioMeaning,
  audioExample,
}: WordType) => {
  const [isDisabled, setDisabled] = useState(false);

  const handlePlay = (word: string, audioMeaning: string, audioExample: string) => {
    const music = [word, audioMeaning, audioExample];

    const playAudio = (num: number) => {
      setDisabled(true);
      let numAudio = num;
      const audio = new Audio();
      audio.src = `https://stanislau-rs-lang.herokuapp.com/${music[num]}`;
      audio.play();
      numAudio++;
      if (numAudio < music.length) {
        audio.onended = () => playAudio(numAudio);
      } else {
        audio.onended = () => setDisabled(false);
      }
    };
    playAudio(0);
  };

  return (

    <Stack
      borderWidth="1px"
      borderRadius="lg"
      w={{ sm: '100%', md: '540px' }}
      direction={{ base: 'column', md: 'row' }}
      bg={useColorModeValue('white', 'gray.900')}
      boxShadow={'2xl'}
      padding={4}>
      <Flex flex={1} bg="blue.200">
        <Image
          objectFit="cover"
          boxSize="100%"
          src={`https://stanislau-rs-lang.herokuapp.com/${image}`}
        />
      </Flex>
      <Stack
        flex={1}
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        p={1}
        pt={2}>
        <Heading fontSize={'2xl'} fontFamily={'body'}>
          {word}
        </Heading>
        <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
          {transcription}
          <Button
            isDisabled={isDisabled}
            onClick={() => handlePlay(audio, audioMeaning, audioExample)} >
            <BellIcon />
          </Button>
        </Text>
        <Text
          textAlign={'center'}
          color={useColorModeValue('gray.700', 'gray.400')}
          px={3}>
          {textMeaning}
        </Text>
        <Text>
          {textExample}
        </Text>
        <Text
          textAlign={'center'}
          color={useColorModeValue('gray.700', 'gray.400')}
          px={3}>
          {wordTranslate}
        </Text>
        <Text
          textAlign={'center'}
          color={useColorModeValue('gray.700', 'gray.400')}
          px={3}>
          {textMeaningTranslate}
        </Text>
        <Text
          textAlign={'center'}
          color={useColorModeValue('gray.700', 'gray.400')}
          px={3}>
          {textExampleTranslate}
        </Text>
      </Stack>
    </Stack>
  );
};

export default Word;
