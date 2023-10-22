import {
  Heading,
  Stack,
  VStack,
  Box,
  HStack,
  Button,
  Input,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p="11" paddingTop={'7'}  color={'white'}>
      <Stack direction={['coloumn', 'row']}>
        <VStack w={'full'} alignItems={'stretch'} px={'4'}   >
          <Heading  size='md'  textTransform={'uppercase'} textAlign={['center', 'left']}>
            Go To Store Now
          </Heading>
          <HStack borderBottom={'2px solid white'} py="2"    >
            <Input
              placeholder="Enter Your Email"
              borderRadius={'none'}
              outline={'none'}
              border={'none'}
              focusBorderColor="none"
            />
            <Button
              p={'0'}
              colorScheme="purple"
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend />
            </Button>
          </HStack>
        </VStack>

        <VStack
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
          
          textAlign={'center'}
        >
          <Heading textAlign={'center'}>GAMiNG HUB</Heading>
          <Text>@All Right Reserved</Text>
        </VStack>

        <VStack w={'full'} paddingRight={'5'}    textAlign={'center'} >
          <Heading size={'md'}>Social Media</Heading>
          <Button colorScheme="purple" variant={'link'}>
            <a href="http://instagram.com/ig_krishhnaaa_03">Instagram</a>
          </Button>
          <Button colorScheme="purple" variant={'link'}>
            <a href="https://github.com/Codewithkrishna98">GitHub</a>
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
