import { format } from "date-fns";
import { VStack, Heading, Text } from "@chakra-ui/react";
import type { Article } from "../lib";

export interface ArticleTitleProps {
  article: Article;
}

export function ArticleTitle(props: ArticleTitleProps) {
  const title = props.article.metadata.title;
  const date = format(new Date(props.article.metadata.date), "MMM d, yyyy");

  return (
    <VStack>
      <Heading as="h1">{title}</Heading>
      <Text>{date}</Text>
    </VStack>
  );
}
