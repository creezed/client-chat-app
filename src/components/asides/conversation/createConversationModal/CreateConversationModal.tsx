import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';
import { FC } from 'react';
import { CreateConversationForm } from '~/components/forms/conversation';

interface ICreateConversationModal {
  isOpen: boolean;
  onClose: () => void;
}

export const CreateConversationModal: FC<ICreateConversationModal> = ({
  isOpen,
  onClose,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create conversation</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Tabs variant="soft-rounded" colorScheme="whatsapp">
            <TabList>
              <Tab>Create Direct</Tab>
              <Tab>Create Group</Tab>
            </TabList>
            <TabPanels mt={4}>
              <TabPanel p={0}>
                <CreateConversationForm type="direct" />
              </TabPanel>
              <TabPanel p={0} mt={4}>
                <CreateConversationForm type="group" />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
