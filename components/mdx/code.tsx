import type { MDXRemoteProps } from "next-mdx-remote";
import { Code } from "@chakra-ui/react";

type Components = NonNullable<MDXRemoteProps["components"]>;

export const code: NonNullable<Components["code"]> = (props) => (
  <Code>{props.children}</Code>
);
