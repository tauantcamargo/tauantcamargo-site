import { Box, chakra, Container, Heading, Icon, useColorModeValue } from "@chakra-ui/react"
import Image from "next/image"
import Section from "../components/section"
import { SiJavascript, SiRubyonrails, SiJquery, SiTypescript, SiReact, SiVuedotjs, SiHtml5, SiCss3, SiGraphql } from 'react-icons/si'
import styled from "@emotion/styled"

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const TechIcons = [SiTypescript, SiJavascript, SiReact, SiRubyonrails, SiJquery, SiVuedotjs, SiHtml5, SiCss3, SiGraphql]

const IconBox = styled.span`
  margin-right: 23.7px;
  margin-top: 5px;
  cursor: pointer;

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
          <Box width="400px">
            <Heading display="flex" alignItems="center" as="h3" fontSize={32}>
              Tauan Camargo <Heading as="span" color={useColorModeValue('grey', 'whiteAlpha')} ml={2} fontSize={14} style={{ transform: 'translateY(3px)' }}> - (Software Developer)</Heading></Heading>
            <Box as="p" fontSize={11}>
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

        <Box mt={4} bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} borderRadius="lg" display="flex" alignItems="center" justifyContent="space-between">
          {TechIcons.map((ico, index) => <IconBox key={index}><Icon as={ico} fontSize={40} /></IconBox>)}
        </Box>
      </Section>
    </Container>
  )
}

export default Page
