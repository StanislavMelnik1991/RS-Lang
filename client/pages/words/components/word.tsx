import { Checkbox, ListItem, Box, Text} from "@chakra-ui/react";
import Example from "./example";
import { Word } from "../types/types"

const Word: React.FC = ({
  word: Word,
}) => {
  
  return (
    <>
      <ListItem>
        <Checkbox defaultChecked>
          <Box>
            <Text>{word.word}</Text>
            <Text>{word.transcription}</Text>
            <Text>{word.translation}</Text>
          </Box>
          <Box>
            <Example example={word.example}/>
          </Box>
        </Checkbox>
      </ListItem>
    </>
  );
};

export default Word;
