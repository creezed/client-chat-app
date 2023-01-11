/* eslint-disable react/jsx-props-no-spreading */
import {
  Button,
  CheckboxGroup,
  Flex,
  FormControl,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  RadioGroup,
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { FC, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { UserChoice } from '~/components/forms/conversation/elements';
import {
  ICreateDirect,
  ICreateGroup,
} from '~/components/forms/conversation/interfaces';
import {
  createDirectFormSchema,
  createGroupFormSchema,
} from '~/components/forms/conversation/schemas';

interface ICreateConversationForm {
  type: 'group' | 'direct';
}

interface IUsers {
  id: string;
  firstName: string;
  lastName: string;
}

export const CreateConversationForm: FC<ICreateConversationForm> = ({
  type,
}) => {
  const [value] = useState<IUsers[]>([
    { id: '1', firstName: 'Егор', lastName: 'Дедюков' },
    { id: '2', firstName: 'Влад', lastName: 'Иванов' },
    { id: '3', firstName: 'Антон', lastName: 'Григорьевич' },
  ]);

  const {
    handleSubmit,
    formState: { isValid },
    control,
  } = useForm<ICreateDirect | ICreateGroup>({
    mode: 'onSubmit',
    resolver: yupResolver(
      type === 'direct' ? createDirectFormSchema : createGroupFormSchema,
    ),
  });

  const onSubmit = (data: ICreateDirect | ICreateGroup) => {
    if (type === 'direct') {
      console.log(data);
    }
    if (type === 'group') {
      console.log(data);
    }
  };

  return (
    <Flex
      as="form"
      flexDir="column"
      alignItems="flex-start"
      gap={4}
      onSubmit={handleSubmit(onSubmit)}
    >
      <InputGroup as="header">
        <InputLeftElement>
          <Icon as={BiSearch} />
        </InputLeftElement>
        <Input
          borderRadius="16px"
          placeholder="Search..."
          variant="filled"
          _focus={{ borderColor: 'whatsapp.600' }}
        />
      </InputGroup>
      <FormControl>
        {type === 'direct' ? (
          <Controller
            name="recipientId"
            control={control}
            render={({ field: { ref, ...rest } }) => (
              <RadioGroup {...rest}>
                <Flex
                  flexDirection="column"
                  width="full"
                  as="ul"
                  overflowY="auto"
                  overflowX="hidden"
                  maxH="400px"
                >
                  {value.map(user => (
                    <UserChoice
                      id={user.id}
                      lastName={user.lastName}
                      firstName={user.firstName}
                      key={user.id}
                      type="radio"
                    />
                  ))}
                </Flex>
              </RadioGroup>
            )}
          />
        ) : (
          <Controller
            name="recipientsId"
            control={control}
            render={({ field: { ref, ...rest } }) => (
              <CheckboxGroup {...rest}>
                <Flex
                  flexDirection="column"
                  width="full"
                  as="ul"
                  overflowY="auto"
                  overflowX="hidden"
                  maxH="400px"
                >
                  {value.map(user => (
                    <UserChoice
                      id={user.id}
                      lastName={user.lastName}
                      firstName={user.firstName}
                      key={user.id}
                      type="checkbox"
                    />
                  ))}
                </Flex>
              </CheckboxGroup>
            )}
          />
        )}
      </FormControl>

      <Flex justifyContent="flex-end" width="full">
        <Button
          rightIcon={<Icon as={AiOutlineArrowRight} />}
          disabled={!isValid}
          colorScheme="whatsapp"
          type="submit"
        >
          Go to dialog
        </Button>
      </Flex>
    </Flex>
  );
};
