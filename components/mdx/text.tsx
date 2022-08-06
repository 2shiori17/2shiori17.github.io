import type { MDXRemoteProps } from "next-mdx-remote";
import { Text } from "@chakra-ui/react";

type Components = NonNullable<MDXRemoteProps["components"]>;

export const p: NonNullable<Components["p"]> = (props) => (
  <Text>{props.children}</Text>
);

export const strong: NonNullable<Components["strong"]> = (props) => (
  <Text as="strong">{props.children}</Text>
);

export const em: NonNullable<Components["em"]> = (props) => (
  <Text as="em">{props.children}</Text>
);

export const s: NonNullable<Components["s"]> = (props) => (
  <Text as="s">{props.children}</Text>
);
