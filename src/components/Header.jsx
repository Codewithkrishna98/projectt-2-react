import React from 'react'
import { Drawer,DrawerBody,DrawerHeader,DrawerContent,DrawerOverlay,Button,DrawerCloseButton }
 from '@chakra-ui/react'

 import {BiMenuAltLeft} from 'react-icons/bi'
import { useDisclosure } from '@chakra-ui/react'
import { VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { HStack } from '@chakra-ui/react'
const Header = () => {

const {isOpen ,onOpen,onClose   }= useDisclosure();


  return (
    <>
    
    <Button  pos={'fixed'}  top={'4'} left={'4'} colorScheme="purple" p={'0'} w={"10"} h={'10'} borderRadius={'full'} 
    onClick={onOpen}   zIndex={'overlay'}  >
<BiMenuAltLeft   size={'20'}/>
    </Button>
    
    <Drawer isOpen={isOpen} placement ="left" onClose={onClose} >
<DrawerOverlay/>

<DrawerContent>
<DrawerCloseButton/>
<DrawerHeader>
    GAMiNG HUB
</DrawerHeader>
<DrawerBody>

    <VStack  alignItems={'flex-start'}>

<Button onClick={onClose} colorScheme={'purple'}   variant={'ghost'} >
<Link to={'/'} >Home</Link>
</Button>
<Button onClick={onClose} colorScheme={'purple'}   variant={'ghost'} >
<Link to={'/video'} >Video</Link>
</Button>

<Button onClick={onClose} colorScheme={'purple'}   variant={'ghost'} >
<Link to={'/upload'} >Upload Videos</Link>
</Button>

    </VStack>

    <HStack   pos={'absolute'} bottom={'10'} left={'0'} w={'full'} 
    justifyContent={'space-evenly'}>
<Button onClick={onClose} colorScheme={'purple'}>

    <Link to={"/login"} >Log In</Link>
</Button>
<Button onClick={onClose} colorScheme={'purple'}  variant={"outline"}>

    <Link to={"/signup"}>Sign Up</Link>
</Button>
    </HStack>
</DrawerBody>
</DrawerContent>

    </Drawer>
    </>
  )
}

export default Header