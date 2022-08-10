import type { MDXRemoteProps } from "next-mdx-remote";
import { Alert } from "@chakra-ui/react";

type Components = NonNullable<MDXRemoteProps["components"]>;

export const blockquote: NonNullable<Components["blockquote"]> = (props) => (
  <Alert as="blockquote" variant="left-accent" colorScheme="gray">
    {props.children}
  </Alert>
);
