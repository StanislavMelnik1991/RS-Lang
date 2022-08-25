import { Checkbox, Button, Input, ListItem, List } from "@chakra-ui/react";
import { useState } from "react";


const Words = () => {
  const [wordsList, setWordsList] = useState<string[]>(["hello", "world"]);
  const [newWord, setNewWord] = useState<string>();

  const addWord = () => {
    if (newWord) {
      setWordsList((wordsList) => [...wordsList, newWord]);
    }
  };

  const listItems = wordsList.map((word) => (
    <ListItem>
      <Checkbox defaultChecked>{word}</Checkbox>
    </ListItem>
  ));

  const wordList = () => <List border='1px' borderColor='gray.200' width='320px' borderRadius='8px' alignContent='center'>{listItems}</List>;

  return (
    <main>
      <div className="new-word">
        <Input
          id="add_word"
          name="add_word"
          type="text"
          onChange={(e) => setNewWord(e.target.value)}
          width="280px"
        />
        <Button
          type="submit"
          colorScheme="purple"
          width="280px"
          onClick={() => addWord()}
        >
          add word
        </Button>
      </div>
      <div className="words-list">{wordList()}</div>
    </main>
  );
};

export default Words;
