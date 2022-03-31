import { Box, chakra, Container, Heading, Icon, useColorModeValue } from "@chakra-ui/react"
import Image from "next/image"
import Section from "../components/section"
import { SiJavascript, SiRubyonrails, SiJquery, SiTypescript, SiReact, SiVuedotjs, SiHtml5, SiCss3, SiGraphql } from 'react-icons/si'
import styled from "@emotion/styled"

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const TechIcons = [SiTypescript, SiJavascript, SiReact, SiRubyonrails, SiJquery, SiVuedotjs, SiHtml5, SiCss3, SiGraphql]

const IconBox = styled(Box)`
    margin-top: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

  :hover svg {
    color: orange;
  }
`

const Page = () => {
  return (
    <Container mt={7}>
      <Section delay={0.1}>
        <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} align="center">
          Hello, I&apos;m a fullstack developer based in Brazil!
        </Box>
      </Section>

      <Section delay={0.2}>
        <Box id="about" display={{ md: 'flex' }} mt={5} justifyContent="space-between" alignItems="center">
          <Box flexGrow={1}>
            <Heading display="flex" alignItems="center" as="h3" fontSize={26}>
              Tauan Camargo <Heading as="span" color={useColorModeValue('grey', 'whiteAlpha')} ml={2} fontSize={12} style={{ transform: 'translateY(3px)' }}> - (Software Developer)</Heading></Heading>
            <Box as="p" mt={2} fontSize={{ md: 13 }}>
            Hi i&apos;m Tauan Camargo, experienced developer with more than 5 years of career. Focused in Javascript stack, but already i worked with Ruby, C# and other languages. As a front-end worked with technologies like ReactJs (Typescript), VueJs, Angular2+, NextJs, Ruby on Rails. Enthusiast in mobile world working with React Native, Flutter and PWA&apos;s.</Box>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Box
              borderColor={useColorModeValue('blackAlpha', 'whiteAlpha.800')}
              borderWidth={3}
              borderStyle="solid"
              w="150px"
              h="150px"
              display="inline-block"
              borderRadius="full"
              overflow='hidden'
            >
              <ProfileImage
                src="/images/tauan.jpeg"
                alt="Profile image"
                borderRadius='full'
                width="150px"
                height="150px"
              />
            </Box>
          </Box>
        </Box>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title" fontSize={32}>
          Technologies
        </Heading>

        <Box rowGap={2} flexWrap="wrap" borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} align="center" mt={4} display="flex" alignItems="center" justifyContent="flex-start">
          {TechIcons.map((ico, index) => <IconBox width={{ sm: '80px', md: '68px'}} key={index}><Icon as={ico} fontSize={40} /></IconBox>)}
        </Box>
      </Section>
    </Container>
  )
}

export default Page
