import type { ReactNode, ReactElement } from "react";
import type { MDXRemoteProps } from "next-mdx-remote";
import { Code, chakra } from "@chakra-ui/react";
import Highlight, { Language, defaultProps } from "prism-react-renderer";

type Components = NonNullable<MDXRemoteProps["components"]>;

const isReactElement = (node: ReactNode): node is ReactElement =>
  node !== null && typeof node === "object" && "props" in node;

export const code: NonNullable<Components["code"]> = (props) => (
  <Code>{props.children}</Code>
);

export const pre: NonNullable<Components["pre"]> = (props) => {
  if (!isReactElement(props.children)) {
    return null;
  }

  const { className, children } = props.children.props;
  const code = (children as string | undefined)?.trim() || "";
  const lang = ((className as string | undefined)
    ?.split(" ")
    .find((s) => s.startsWith("language-"))
    ?.replace(/language-/, "") || "") as Language;

  return (
    <Highlight {...defaultProps} code={code} language={lang}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <chakra.pre className={className} style={style}>
          {tokens.map((line, i) => (
            <chakra.div key={i} {...getLineProps({ line, key: i })}>
              <chakra.span opacity={0.3} mr="6">
                {i + 1}
              </chakra.span>
              {line.map((token, key) => (
                <chakra.span key={i} {...getTokenProps({ token, key })} />
              ))}
            </chakra.div>
          ))}
        </chakra.pre>
      )}
    </Highlight>
  );
};
