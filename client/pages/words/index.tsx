import { Checkbox, Button, Input } from "@chakra-ui/react";
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
    <li>
      <Checkbox defaultChecked>{word}</Checkbox>
    </li>
  ));

  const wordList = () => <ul>{listItems}</ul>;

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
