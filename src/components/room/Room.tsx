import { Chat } from '~/components/room/chat';
import { Header } from '~/components/room/header';
import { NewMessage } from '~/components/room/newMessage';

export const Room = () => {
  return (
    <>
      <Header />
      <Chat />
      <NewMessage />
    </>
  );
};
