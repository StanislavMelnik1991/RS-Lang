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
import { CreateUserWordReq, WordType } from '../../types';
import Controller from '../../api/index';

interface CurrentWordType extends WordType { userID: string, token: string }

const Word = ({
  image, word, transcription, textMeaning,
  textExample, wordTranslate, textMeaningTranslate,
  textExampleTranslate, audio, audioMeaning,
  audioExample, id, userID, token,
}: CurrentWordType) => {
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
          alt={word}
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
        <Stack
        width={'100%'}
        justifyContent="space-between"
        p={2}
        pt={2}>
        <Button
          onClick={() => {
            const wordParams: CreateUserWordReq = {
              userId: userID,
              word: {
                difficulty: 'hard',
              },
              wordId: id,
            };
            Controller.setToken(token);
            Controller.createUserWord(wordParams);
          }}
        >hard</Button>
        <Button
          onClick={() => {
            const wordParams: CreateUserWordReq = {
              userId: userID,
              word: {
                difficulty: 'weak',
              },
              wordId: id,
            };
            Controller.setToken(token);
            Controller.createUserWord(wordParams);
          }}
        >weak</Button>
      </Stack>
      </Stack>
    </Stack>
  );
};

export default Word;
