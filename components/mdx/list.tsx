import type { MDXRemoteProps } from "next-mdx-remote";
import { OrderedList, UnorderedList, ListItem } from "@chakra-ui/react";

type Components = NonNullable<MDXRemoteProps["components"]>;

export const ol: NonNullable<Components["ol"]> = (props) => (
  <OrderedList start={props.start}>{props.children}</OrderedList>
);

export const ul: NonNullable<Components["ul"]> = (props) => (
  <UnorderedList>{props.children}</UnorderedList>
);

export const li: NonNullable<Components["li"]> = (props) => (
  <ListItem>{props.children}</ListItem>
);
