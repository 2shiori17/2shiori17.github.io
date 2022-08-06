import { Heading } from "@chakra-ui/react";
import type { MDXRemoteProps } from "next-mdx-remote";

export const mdxComponents: MDXRemoteProps["components"] = {
  // Heading
  h1: (props) => <Heading as="h1">{props.children}</Heading>,
  h2: (props) => <Heading as="h2">{props.children}</Heading>,
  h3: (props) => <Heading as="h3">{props.children}</Heading>,
  h4: (props) => <Heading as="h4">{props.children}</Heading>,
  h5: (props) => <Heading as="h5">{props.children}</Heading>,
  h6: (props) => <Heading as="h6">{props.children}</Heading>,
};
