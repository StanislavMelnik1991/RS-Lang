import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
  IconButton,
} from '@chakra-ui/react';
import { BellIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import { Difficulty, WordType } from '../../types';

interface CurrentWordType extends WordType {
  isHard: boolean,
  isWeak: boolean,
  isLogin: boolean,
  onClick: (difficulty: Difficulty, wordId: string, method: 'PUT' | 'POST' | 'DELETE' | 'GET') => void,
}

const Word = ({
  image, word, transcription, textMeaning,
  textExample, wordTranslate, textMeaningTranslate,
  textExampleTranslate, audio, audioMeaning,
  audioExample, id, isHard, isWeak, isLogin, onClick,
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
      // eslint-disable-next-line no-nested-ternary
      bg={useColorModeValue(isHard ? '#d6c4c4' : isWeak ? '#c2cee1' : 'white', 'gray.900')}
      boxShadow={'2xl'}
      padding={4}>
      <Flex flex={1} bg={'blue.200'}>
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
          <IconButton
            size={'sm'}
            ml={3}
            colorScheme='gray'
            aria-label='Search database'
            isDisabled={isDisabled}
            onClick={() => handlePlay(audio, audioMeaning, audioExample)}
            icon={<BellIcon />}
          />
        </Text>
        <Text
          textAlign={'center'}
          px={3}>
          {textMeaning.split('<i>')[0]}
          <i>{textMeaning.split('<i>')[1].split('</i>')[0]}</i>
          {textMeaning.split('</i>')[1]}
        </Text>
        <Text px={3}
          textAlign={'center'}>
          {textExample.split('<b>')[0]}
          <b>{textExample.split('<b>')[1].split('</b>')[0]}</b>
          {textExample.split('</b>')[1]}

        </Text>
        <Heading fontSize={'large'} fontFamily={'body'} color={'gray.600'}>
          {wordTranslate}
        </Heading>
        <Text
          textAlign={'center'}
          color={'gray.600'}
          px={3}>
          {textMeaningTranslate}
        </Text>
        <Text
          textAlign={'center'}
          color={'gray.600'}
          px={3}>
          {textExampleTranslate}
        </Text>
        <Stack
          width={'100%'}
          justifyContent="space-between"
          display={!isLogin ? 'none' : 'flex'}
          p={2}
          pt={2}>
          <Button
            onClick={() => onClick('hard', id, isHard ? 'DELETE' : isWeak ? 'PUT' : 'POST')}
          >{isHard ? 'not a hard' : 'hard'}</Button>
          <Button
            onClick={() => onClick('weak', id, isHard ? 'PUT' : isWeak ? 'DELETE' : 'POST')}
          >{isWeak ? 'not a weak' : 'weak'}</Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Word;
