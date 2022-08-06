import type { MDXRemoteProps } from "next-mdx-remote";
import { Link } from "@chakra-ui/react";

type Components = NonNullable<MDXRemoteProps["components"]>;

// TODO: internal link

export const a: NonNullable<Components["a"]> = (props) => (
  <Link href={props.href} title={props.title}>
    {props.children}
  </Link>
);
