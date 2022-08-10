import type { ReactNode, ReactElement } from "react";
import type { MDXRemoteProps } from "next-mdx-remote";
import { Box, Code, chakra } from "@chakra-ui/react";
import Highlight, { Language, defaultProps } from "prism-react-renderer";
import dracula from "prism-react-renderer/themes/dracula";

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
    <Box>
      <Highlight {...defaultProps} code={code} language={lang} theme={dracula}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <chakra.pre
            className={className}
            style={style}
            padding={4}
            borderRadius="md"
          >
            {tokens.map((line, i) => (
              <chakra.div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <chakra.span key={i} {...getTokenProps({ token, key })} />
                ))}
              </chakra.div>
            ))}
          </chakra.pre>
        )}
      </Highlight>
    </Box>
  );
};
