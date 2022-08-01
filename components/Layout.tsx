import type { ReactNode } from "react";
import Head from "next/head";
import NextLink from "next/link";
import {
  forwardRef,
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Icon,
  Spacer,
  BoxProps,
  Link,
} from "@chakra-ui/react";
import { FaTwitter, FaGithub } from "react-icons/fa";

const Header = forwardRef<BoxProps, "div">((props, ref) => (
  <Box ref={ref} {...props}>
    <Container maxWidth="container.md">
      <Flex alignItems="center" paddingY={4}>
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
        </HStack>
      </Flex>
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

      <Header as="header" marginBottom={8} borderBottomWidth={1} />
      <Container maxWidth="container.md">{props.children}</Container>
    </>
  );
}
