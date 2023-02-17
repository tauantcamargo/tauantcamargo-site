import { Box, Container, Flex, Heading, Link, Menu, MenuButton, MenuItem, MenuList, Stack, useColorModeValue } from "@chakra-ui/react"
import Logo from './layouts/logo'
import NextLink from 'next/link'
import ThemeToggleButton from "./theme-toggle-button"
import { HamburgerIcon } from "@chakra-ui/icons"
import { SiGithub, SiLinkedin } from 'react-icons/si'

const LinkItem = ({ isExternal, href, path, children }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha')

  return (
    <Link href={href} isExternal={isExternal} p={2} bg={ active ? 'glassTeal' : undefined } color={active ? 'orange' : inactiveColor}>
      {children}
    </Link>
  )
}

const Navbar = props => {
  const { path } = props
  return (
    <Box 
      position="fixed" 
      as="nav" 
      w="100%" 
      bg={useColorModeValue('#ffffff40', '#20202380')} 
      style={{ backdropFilter: 'blur(10px)'}} 
      zIndex={1} 
      {...props}
    >
      <Container 
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        alignItems="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          columnGap={8}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/#about-me" path={path}>
            About me
          </LinkItem>
          <LinkItem href="https://www.linkedin.com/in/tauan-tathiell/" isExternal path={path}>
            <SiLinkedin fontSize={18} />
          </LinkItem>
          <LinkItem href="https://github.com/tauantcamargo" isExternal path={path}>
            <SiGithub fontSize={18} />
          </LinkItem>
        </Stack>

        <Box flex={1} align="right">
          <ThemeToggleButton />

          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={HamburgerIcon}
                icon={<HamburgerIcon />}
                fontSize={40}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <NextLink href="#about-me" passHref>
                  <MenuItem as={Link}>About me</MenuItem>
                </NextLink>
                <NextLink href="https://www.linkedin.com/in/tauan-tathiell/" passHref>
                  <MenuItem as={Link}>Linkedin</MenuItem>
                </NextLink>
                <MenuItem
                  as={Link}
                  href="https://github.com/tauantcamargo"
                >
                  Github
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
