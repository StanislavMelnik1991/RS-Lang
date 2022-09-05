import {
  Container,
  Heading,
  Select,
  Text,
  Stack,
  Flex,
  Stat,
  StatNumber,
  Button,
  Spinner,
  Checkbox,
  ListItem,
  OrderedList,
} from '@chakra-ui/react';
import { SunIcon } from '@chakra-ui/icons';
import { ChangeEvent, useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { sprintSlice } from '../store/reducers/SprintSlice';
import { fetchWords } from '../store/reducers/ActionCreators';
import useQuizeGenerator from './hooks/quizeGenerator';

const Sprint = () => {
  const {
    words, group, page, score, currentQuize, hp, inprogress, answers,
  } = useAppSelector((state) => state.sprintReducer);
  const dispatch = useAppDispatch();

  const { quizeList } = useQuizeGenerator(words);

  useEffect(() => {
    dispatch(fetchWords(page, group));
  }, [page, group, dispatch]);

  const gameFinish = () => {
    dispatch(sprintSlice.actions.setInprogress(false));
  };

  const addAnswer = (answer: boolean) => {
    dispatch(sprintSlice.actions.setAnswers([...answers, { ...quizeList[currentQuize], answer }]));
  };

  const handleChangeGroup = (e: ChangeEvent<HTMLSelectElement>) => {
    const group = e.currentTarget.value;
    dispatch(sprintSlice.actions.setGroup(group));
    gameFinish();
  };

  const handleChangeScore = (score: number) => {
    dispatch(sprintSlice.actions.setScore(score));
  };

  const handleChangeHP = (newHP: number) => {
    dispatch(sprintSlice.actions.setHP(newHP));
    if (newHP === 0) gameFinish();
  };

  const nextQuize = () => {
    const nextQuizeNumber = currentQuize + 1;
    if (nextQuizeNumber <= quizeList.length) {
      dispatch(sprintSlice.actions.setCurrentQuize(nextQuizeNumber));
    }
  };

  const answerType = (type: boolean) => {
    const rightAnswerPoint = 100;
    if (quizeList[currentQuize].answer === type) {
      const newScore = score + rightAnswerPoint;
      handleChangeScore(newScore);
      addAnswer(true);
    } else {
      const newHP = hp - 1;
      addAnswer(false);
      handleChangeHP(newHP);
    }
  };

  const onAnswer = (answer: boolean) => {
    answerType(answer);
    nextQuize();
  };

  const startTimer = () => {
    setTimeout(() => gameFinish(), 60000);
  };

  const startGame = () => {
    dispatch(sprintSlice.actions.setInprogress(true));
    dispatch(sprintSlice.actions.setAnswers([]));
    dispatch(sprintSlice.actions.setHP(3));
    startTimer();
  };

  const Statistics = answers?.map((word) => (
      <ListItem key={word.id}>
        <Checkbox defaultChecked={word.answer}>{word.word}</Checkbox>
      </ListItem>
  ));

  const stopStartRender = () => {
    if (inprogress) {
      return <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
      <Stat>
          <StatNumber fontSize={'6xl'}>{score}</StatNumber>
          <StatNumber fontSize={'4xl'}>{hp}<SunIcon/></StatNumber>
      </Stat>

      <Heading fontSize={'3xl'}>{quizeList[currentQuize]?.word ?? 'Загрузка...'}</Heading>
      <Heading fontSize={'2xl'}>{quizeList[currentQuize]?.wordTranslate ?? 'Загрузка...'}</Heading>
      <Stack spacing={4} direction='row' align='center' justify='center'>
        <Button
          colorScheme='red'
          size="lg"
          width={200}
          onClick={() => onAnswer(false)}
          // display={{ base: 'none', md: 'inline-flex' }}
          // as={'a'}
          // fontSize={'sm'}
          // fontWeight={600}
          // color={'white'}
          >
          Не верно
        </Button>
        <Button
          colorScheme='green'
          size="lg"
          width={200}
          onClick={() => onAnswer(true)}
          // display={{ base: 'none', md: 'inline-flex' }}
          // as={'a'}
          // fontSize={'sm'}
          // fontWeight={600}
          // color={'white'}
          >
          Верно
        </Button>
      </Stack>
    </Stack>;
    }
    return <Container>
            {answers.length > 0 && inprogress === false ? <><OrderedList>{Statistics}</OrderedList><Button colorScheme='green'
            margin={'10px'}
            size="lg"
            width={200}
            onClick={() => startGame()}>
              Старт
            </Button></> : <Button colorScheme='green'
            margin={'10px'}
            size="lg"
            width={200}
            onClick={() => startGame()}>
              Старт
            </Button>}
    </Container>;
  };

  return quizeList.length > 0 ? <>
    <Header />
      <Flex
        textAlign={'center'}
        pt={10}
        justifyContent={'center'}
        direction={'column'}
        width={'full'}>
          <>
          <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
          <Heading fontSize={'3xl'}>Sprint</Heading>
          <Text color={'gray.600'} fontSize={'xl'}>
            Дано слово и перевод. Отвечай верно или не верно.
          </Text>
          <Select defaultValue={'0'}
            onChange={handleChangeGroup}
            bg='purple.400'
            borderColor='purple.400'
            width={'200px'}
            alignSelf={'center'}>
            <option value='0'>Уровень 1</option>
            <option value='1'>Уровень 2</option>
            <option value='2'>Уровень 3</option>
            <option value='3'>Уровень 4</option>
            <option value='4'>Уровень 5</option>
            <option value='5'>Уровень 6</option>
          </Select>
        </Stack>
        {stopStartRender()}
          </>
        </Flex>
      <Footer />
  </> : <Spinner/>;
};

export default Sprint;
