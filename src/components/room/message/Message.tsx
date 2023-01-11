import { Avatar, Box, Flex, ScaleFade, Text } from '@chakra-ui/react';
import { FC } from 'react';

interface IMessage {
  from: 'me' | number;
}

export const Message: FC<IMessage> = ({ from }) => {
  return (
    <ScaleFade initialScale={0.9} in>
      <Flex
        as="article"
        backgroundColor="transparent"
        width="full"
        justifyContent={from === 'me' ? 'flex-end' : 'flex-start'}
      >
        <Flex
          maxWidth="45%"
          gap={4}
          flexDirection={from === 'me' ? 'row-reverse' : 'row'}
        >
          <Avatar />
          <Flex
            flexDirection="column"
            gap={2}
            align={from === 'me' ? 'flex-end' : 'flex-start'}
          >
            <Flex gap={3} flexDirection={from === 'me' ? 'row-reverse' : 'row'}>
              <Text noOfLines={1} fontWeight={600}>
                {from === 'me' ? 'You' : 'Putri Tanjak'}
              </Text>
              <Text noOfLines={1} color="gray.500">
                9:36 AM
              </Text>
            </Flex>

            <Box
              color={from === 'me' ? 'whiteAlpha.900' : 'chakra-body-text'}
              backgroundColor={from === 'me' ? 'whatsapp.600' : 'gray.100'}
              borderRadius={
                from === 'me' ? '20px 0 20px 20px' : '0 20px 20px 20px'
              }
              padding="12px"
            >
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusamus aliquid at consequatur eveniet provident quis repellat
                sapiente sed, totam voluptas? Aperiam architecto autem
                consequatur culpa eos neque qui reiciendis sequi?
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </ScaleFade>
  );
};
