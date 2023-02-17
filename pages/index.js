import { Box, chakra, Container, Heading, Icon, useColorModeValue } from "@chakra-ui/react"
import styled from "@emotion/styled"
import Image from "next/image"
import { memo } from "react"
import { SiCss3, SiGraphql, SiHtml5, SiJavascript, SiJquery, SiReact, SiRubyonrails, SiTypescript, SiVuedotjs, SiNextdotjs } from 'react-icons/si'
import Section from "../components/section"
import { Text } from "@chakra-ui/react"

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const TechIcons = [SiTypescript, SiJavascript, SiNextdotjs, SiReact, SiRubyonrails, SiJquery, SiVuedotjs, SiHtml5, SiCss3, SiGraphql]

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
        <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} align="center" fontSize={26}>
          Hey Folks, I&apos;m a Software Developer! 🍻
        </Box>
      </Section>

      <Section delay={0.2} id="about-me">
        <Box id="about" display={{ md: 'flex' }} mt={10} justifyContent="space-between" alignItems="flex-start">
          <Box flexGrow={1}>
            <Heading display="flex" alignItems="center" as="h3" fontSize={20}>
              <Text fontSize={{ md: '3xl', sm: '4xl' }} color={useColorModeValue('blackAlpha', 'orange')}>Tauan Camargo</Text>
                <Heading as="span" color={useColorModeValue('grey', 'whiteAlpha')} ml={1} fontSize={12} style={{ transform: 'translateY(3px)' }}>
                - (Software Developer)
                </Heading>
            </Heading> 
            
            <Box as="p" mt={2} fontSize={{ md: 17 }}>
              Hi there! I&apos;m Tauan Camargo. I&apos;m a software developer from Brazil. I&apos;m passionate about web development and I&apos;m always looking for new challenges.
              <br />
              <br />
              My clients are US-based small to mid-sized companies who&apos;re looking for an expert that can take a set of propositions and tasks and deliver a well-architected piece of software on the web without a lot of handholding.
              <br />
              <br />
              As a solution-oriented developer, I am a lifelong learner and a lover of JavaScript. I am passionate about creating new things and am motivated by the opportunity to positively impact people&apos;s lives through software development.
              <br />
              <br />
              With experience in a wide range of technologies, including Javascript, Typescript, React, NextJs, VueJs, Angular2+, React Native, Nodejs, NestJs, Express, Ruby on Rails, Git, Github, Jira, MVC, Rest, GraphQL and Redux, I am constantly expanding my skills and knowledge.
              <br />
              <br />
              I&apos;m a self-taught developer and I&apos;m always looking for new challenges. I&apos;m currently working at <a href="https://www.moz.com/" target="_blank" rel="noreferrer">Moz</a> as a Full Stack Developer.
            </Box>
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
              w="180px"
              h="180px"
              display="inline-block"
              borderRadius="full"
              overflow='hidden'
            >
              <ProfileImage
                src="/images/tauan.jpeg"
                alt="Profile image"
                borderRadius='full'
                width="180px"
                height="180px"
              />
            </Box>
          </Box>
        </Box>
      </Section>

      <Section delay={0.3}>
        <Box mt={10}>
          <Heading as="h3" variant="section-title" fontSize={32} color={useColorModeValue('blackAlpha', 'orange')}>
            Technologies
          </Heading>

          <Box
            rowGap={6}
            columnGap={2}
            flexWrap="wrap" 
            borderRadius="lg"
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
            pt={6}
            pb={6}
            align="center"
            mt={4}
            display="flex"
            alignItems="center"
            justifyContent="flex-start"
          >
            {TechIcons.map((ico, index) => 
              <IconBox width={98} key={index}>
                <Icon as={ico} fontSize={50} />
              </IconBox>
            )}
          </Box>
        </Box>
      </Section>
    </Container>
  )
}

export default memo(Page)
