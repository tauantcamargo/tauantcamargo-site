import Link from 'next/link'
import { Icon, Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { Gi3DGlasses } from 'react-icons/gi'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-heigh: 20px;
  padding: 10px;

  svg {
    font-size: 28px;
    transform: rotate(-20deg);
  }

  &:hover svg {
    transform: rotate(0deg);
  }
`

const Logo = () => {
  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Icon as={Gi3DGlasses} color={useColorModeValue('gray.800', 'whiteAlpha.900')} />
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily="M PLUS Rounded 1c" fontWeight="bold" ml={3}
          >
            tauantcamargo
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
