import { useMemo } from 'react';
import { QuizeSprintType, WordType } from '../../types/index';

const useQuizeGenerator = (words: WordType[]) => {
  const array = (words: WordType[]) => {
    const wordsText = Array.from(Array(20).keys()).sort(() => Math.random() - 0.5);
    const wordsTranslation = Array.from(Array(20).keys()).sort(() => Math.random() - 0.5);
    const quizeList: QuizeSprintType[] = words.map((word, index) => {
      const quize = {
        id: word.id,
        word: words[wordsText[index]].word,
        wordTranslate: words[wordsTranslation[index]].wordTranslate,
        answer: wordsText[index] === wordsTranslation[index],
      };
      return quize;
    });
    return quizeList;
  };

  const quizeList = useMemo(() => array(words), [words]);

  return { quizeList };
};

export default useQuizeGenerator;
