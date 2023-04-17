import { HamburgerIcon } from "@chakra-ui/icons"
import { Box, Container, Flex, Heading, Link, Menu, MenuButton, MenuItem, MenuList, Stack, useColorModeValue } from "@chakra-ui/react"
import NextLink from 'next/link'
import { SiFiles, SiGithub, SiInstagram, SiLinkedin } from 'react-icons/si'
import Logo from './layouts/logo'
import ThemeToggleButton from "./theme-toggle-button"

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
          columnGap={3}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="https://www.linkedin.com/in/tauan-tathiell/" isExternal path={path}>
            <SiLinkedin fontSize={18} />
          </LinkItem>
          <LinkItem href="https://github.com/tauantcamargo" isExternal path={path}>
            <SiGithub fontSize={18} />
          </LinkItem>
          <LinkItem href="https://www.instagram.com/tauantathiell.dev" isExternal path={path}>
            <SiInstagram fontSize={18} />
          </LinkItem>
          <LinkItem href="https://dev.to/tauantcamargo" isExternal path={path}>
            <SiFiles fontSize={18} />
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
                <MenuItem
                  as={Link}
                  href="https://github.com/tauantcamargo"
                >
                  Github
                </MenuItem>
                <NextLink href="https://www.linkedin.com/in/tauan-tathiell/" passHref>
                  <MenuItem as={Link}>Linkedin</MenuItem>
                </NextLink>
                <MenuItem
                  as={Link}
                  href="https://www.instagram.com/tauantathiell.dev"
                >
                  Instagram
                </MenuItem>
                <MenuItem
                  as={Link}
                  href="https://dev.to/tauantcamargo"
                >
                  Dev.to
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
