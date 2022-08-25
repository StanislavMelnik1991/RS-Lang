import { List } from "@chakra-ui/react";
import Word from "./word"

type Props = {
  title: string,
  words: string[],
};

const WordList: React.FC<Props> = ({
  title,
  words,
}) => {
  
  return (
    <>
      <h3>{title}</h3>
      <List
        border="1px"
        borderColor="gray.200"
        width="320px"
        borderRadius="8px"
        alignContent="center"
      >
        {words.map((word) => <Word word={word}/>)}
      </List>
    </>
  );
};

export default WordList;
