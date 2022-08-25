import { Box, Text} from "@chakra-ui/react";

type Props = {
  example: string,
};

const Example: React.FC<Props> = ({
  example,
}) => {
  
  return (
    <>
      <Box>
        <Text>{example}</Text>
      </Box>
    </>
  );
};

export default Example;
