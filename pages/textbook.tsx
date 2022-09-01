import {
  Container,
  Heading,
  Select,
  Text,
  Stack,
  SimpleGrid,
  Flex,
} from '@chakra-ui/react';
import { ChangeEvent, useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Word from '../components/Word';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { textBookSlice } from '../store/reducers/TextBookSlice';
import { fetchWords, getUserWords } from '../store/reducers/ActionCreators';
import Pagination from '../components/Pagination';
import { CreateUserWordReq, Difficulty } from '../types';
import Controller from '../api/index';

const Textbook = () => {
  const {
    words,
    group,
    page,
    hardWords,
    weakWords,
  } = useAppSelector((state) => state.textBookReducer);
  const { userID, token, isLoggedIn } = useAppSelector((state) => state.authReducer);
  const dispatch = useAppDispatch();

  const onClick = (difficulty: Difficulty, wordId: string) => {
    Controller.setToken(token);
    const wordParams: CreateUserWordReq = {
      userId: userID,
      word: {
        difficulty,
      },
      wordId,
    };

    if (hardWords[wordId] || weakWords[wordId]) {
      Controller.createUserWord(wordParams, true);
    } else {
      Controller.createUserWord(wordParams, false);
    }
  };

  useEffect(() => {
    dispatch(fetchWords(page, group));
    userID && dispatch(getUserWords(userID, token));
  }, [page, group, userID, token, dispatch]);

  const handleChangeGroup = (e: ChangeEvent<HTMLSelectElement>) => {
    const group = e.currentTarget.value;
    dispatch(textBookSlice.actions.setGroup(group));
  };

  const handleChangePage = (page: string) => {
    dispatch(textBookSlice.actions.setPage(page));
  };

  return <>
    <Header />
    <Flex
      textAlign={'center'}
      pt={10}
      justifyContent={'center'}
      direction={'column'}
      width={'full'}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={'3xl'}>Учебник</Heading>
        <Text color={'gray.600'} fontSize={'xl'}>
          Изучай новые слова и составляй собственный словарь
        </Text>

        <Select defaultValue={'0'}
          onChange={handleChangeGroup}
          bg='purple.400'
          borderColor='purple.400'
          width={'200px'}
          alignSelf={'center'}>
          <option value='0'>Раздел 1</option>
          <option value='1'>Раздел 2</option>
          <option value='2'>Раздел 3</option>
          <option value='3'>Раздел 4</option>
          <option value='4'>Раздел 5</option>
          <option value='5'>Раздел 6</option>
        </Select>

      </Stack>

      <SimpleGrid columns={{ base: 1, xl: 2 }}
        spacing={'20'}
        mt={16}
        mx={'auto'}>
        {words.map((word) => <Word
          image={word.image}
          textExample={word.textExample}
          textMeaning={word.textMeaning}
          transcription={word.transcription}
          key={word.id}
          audio={word.audio}
          audioExample={word.audioExample}
          word={word.word}
          audioMeaning={word.audioMeaning}
          group={word.group}
          id={word.id}
          page={word.page}
          textExampleTranslate={word.textExampleTranslate}
          textMeaningTranslate={word.textMeaningTranslate}
          wordTranslate={word.wordTranslate}
          isHard={hardWords[word.id]}
          isWeak={weakWords[word.id]}
          isLogin={isLoggedIn}
          onClick={onClick}
        />)
        }
      </SimpleGrid>
    </Flex>

    <Pagination onPageChange={handleChangePage} />

    <Footer />
  </>;
};

export default Textbook;
