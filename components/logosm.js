import Link from 'next/link'
import { Text, useColorModeValue, chakra } from '@chakra-ui/react'
import styled from '@emotion/styled'
import Image from 'next/image'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  > svg {
    transition: 200ms ease;
  }

  &:hover > svg {
    transform: rotate(20deg);
  }
`
const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})


const Logo2 = () => {
  return (
    (<Link href="/" scroll={false}>

      <LogoBox>
       
        {/* <Text
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
          fontFamily='M PLUS Rounded 1c", sans-serif'
          fontWeight="bold"
          ml={3}
        > */}
            <ProfileImage
              src="/images/signature.png"
              alt="sign"
              width="90"
              height="45"
              marginTop={10}
            />
        {/* </Text> */}
      </LogoBox>

    </Link>)
  );
}


export default Logo2
