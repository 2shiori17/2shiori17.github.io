import type { MDXRemoteProps } from "next-mdx-remote";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

type Components = NonNullable<MDXRemoteProps["components"]>;

// TODO: table alignment

export const table: NonNullable<Components["table"]> = (props) => (
  <TableContainer>
    <Table align={props.align}>{props.children}</Table>
  </TableContainer>
);

export const thead: NonNullable<Components["thead"]> = (props) => (
  <Thead>{props.children}</Thead>
);

export const tbody: NonNullable<Components["tbody"]> = (props) => (
  <Tbody>{props.children}</Tbody>
);

export const tfoot: NonNullable<Components["tfoot"]> = (props) => (
  <Tfoot>{props.children}</Tfoot>
);

export const tr: NonNullable<Components["tr"]> = (props) => (
  <Tr>{props.children}</Tr>
);

export const th: NonNullable<Components["th"]> = (props) => (
  <Th align={props.align}>{props.children}</Th>
);

export const td: NonNullable<Components["td"]> = (props) => (
  <Td align={props.align}>{props.children}</Td>
);
