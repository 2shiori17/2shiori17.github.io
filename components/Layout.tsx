import type { ReactNode } from "react";
import Head from "next/head";
import NextLink from "next/link";
import {
  forwardRef,
  Box,
  BoxProps,
  Center,
  Container,
  Flex,
  Heading,
  HStack,
  Icon,
  Link,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { FaTwitter, FaGithub, FaKeybase } from "react-icons/fa";

const Header = forwardRef<BoxProps, "div">((props, ref) => (
  <Box ref={ref} {...props}>
    <Container maxWidth="container.md" paddingY={4}>
      <Flex alignItems="center">
        <NextLink href="/" passHref>
          <Link>
            <Heading as="p" size="md">
              2shiori17
            </Heading>
          </Link>
        </NextLink>
        <Spacer />
        <HStack spacing={4}>
          <Link href="https://twitter.com/2shiori17" isExternal>
            <Icon boxSize={5} as={FaTwitter} />
          </Link>
          <Link href="https://github.com/2shiori17" isExternal>
            <Icon boxSize={5} as={FaGithub} />
          </Link>
          <Link href="https://keybase.io/2shiori17" isExternal>
            <Icon boxSize={5} as={FaKeybase} />
          </Link>
        </HStack>
      </Flex>
    </Container>
  </Box>
));

const Footer = forwardRef<BoxProps, "div">((props, ref) => (
  <Box ref={ref} {...props}>
    <Container maxWidth="container.md" paddingY={4}>
      <Center>
        <Text>&copy; {new Date().getFullYear()} 2shiori17</Text>
      </Center>
    </Container>
  </Box>
));

export interface LayoutProps {
  children: ReactNode;
}

export function Layout(props: LayoutProps) {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex,nofollow,noarchive" />
      </Head>

      <Box minHeight="100vh" display="grid" gridTemplateRows="auto 1fr auto">
        <Header as="header" borderBottomWidth={1} />
        <Container as="main" maxWidth="container.md" marginY={8}>
          {props.children}
        </Container>
        <Footer as="footer" borderTopWidth={1} />
      </Box>
    </>
  );
}
