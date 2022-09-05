import { QuizeSprintType, WordType } from '../../types/index';

const useQuizeGenerator = (words: WordType[]) => {
  [];

  const quizeList: QuizeSprintType[] = words.map((word) => {
    const quize = {
      id: word.id,
      word: word.word,
      wordTranslate: word.wordTranslate,
      answer: true,
    };
    return quize;
  });
  return { quizeList };
};

export default useQuizeGenerator;
