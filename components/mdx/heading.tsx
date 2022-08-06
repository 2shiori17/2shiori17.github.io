import type { MDXRemoteProps } from "next-mdx-remote";
import { Heading } from "@chakra-ui/react";

type Components = NonNullable<MDXRemoteProps["components"]>;

export const h1: NonNullable<Components["h1"]> = (props) => (
  <Heading as="h1">{props.children}</Heading>
);

export const h2: NonNullable<Components["h2"]> = (props) => (
  <Heading as="h2">{props.children}</Heading>
);

export const h3: NonNullable<Components["h3"]> = (props) => (
  <Heading as="h3">{props.children}</Heading>
);

export const h4: NonNullable<Components["h4"]> = (props) => (
  <Heading as="h4">{props.children}</Heading>
);

export const h5: NonNullable<Components["h5"]> = (props) => (
  <Heading as="h5">{props.children}</Heading>
);

export const h6: NonNullable<Components["h6"]> = (props) => (
  <Heading as="h6">{props.children}</Heading>
);
