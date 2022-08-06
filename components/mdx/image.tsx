import type { MDXRemoteProps } from "next-mdx-remote";
import { Image } from "@chakra-ui/react";

type Components = NonNullable<MDXRemoteProps["components"]>;

export const img: NonNullable<Components["img"]> = (props) => (
  <Image src={props.src || ""} alt={props.alt} title={props.title} />
);
