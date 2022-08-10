import type { MDXRemoteProps } from "next-mdx-remote";
import * as mdx from "./components";

export * from "./container";

export const MDXComponents: MDXRemoteProps["components"] = {
  // ------------------------------
  //  Leaf blocks
  //  https://github.github.com/gfm/#leaf-blocks
  // ------------------------------

  h1: mdx.h1,
  h2: mdx.h2,
  h3: mdx.h3,
  h4: mdx.h4,
  h5: mdx.h5,
  h6: mdx.h6,

  pre: mdx.pre,

  p: mdx.p,

  table: mdx.table,
  thead: mdx.thead,
  tbody: mdx.tbody,
  tfoot: mdx.tfoot,
  tr: mdx.tr,
  th: mdx.th,
  td: mdx.td,

  // ------------------------------
  //  Container blocks
  //  https://github.github.com/gfm/#container-blocks
  // ------------------------------

  blockquote: mdx.blockquote,

  ul: mdx.ul,
  ol: mdx.ol,
  li: mdx.li,

  // ------------------------------
  //  Inlines
  //  https://github.github.com/gfm/#inlines
  // ------------------------------

  code: mdx.code,
  strong: mdx.strong,
  em: mdx.em,
  s: mdx.s,
  a: mdx.a,
  img: mdx.img,
};
