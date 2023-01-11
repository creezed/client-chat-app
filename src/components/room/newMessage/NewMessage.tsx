import {
  Flex,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { FiSend } from 'react-icons/fi';

export const NewMessage = () => {
  return (
    <Flex
      as="footer"
      flexShrink={0}
      justify="center"
      align="center"
      height="96px"
      padding="18px 36px"
      backgroundColor="white"
    >
      <InputGroup>
        <Input
          size="lg"
          variant="filled"
          borderRadius="16px"
          placeholder="Your messages..."
          _focus={{ borderColor: 'whatsapp.600' }}
        />
        <InputRightElement
          cursor="pointer"
          height="full"
          width="4rem"
          borderRadius="0 16px 16px 0"
          transition=".18s"
          userSelect="none"
          color="whatsapp.700"
          _hover={{ backgroundColor: 'whatsapp.700', color: 'white' }}
          _active={{ backgroundColor: 'whatsapp.800', color: 'white' }}
        >
          <Icon as={FiSend} />
        </InputRightElement>
      </InputGroup>
    </Flex>
  );
};
