import NextLink from "next/link";
import { Box, Heading, Text, VStack, Link } from "@chakra-ui/react";
import { format } from "date-fns";
import type { Metadata } from "../lib";

interface ArticleCardProps {
  post: Metadata;
}

function ArticleCard(props: ArticleCardProps) {
  const id = props.post.id;
  const title = props.post.title;
  const date = format(new Date(props.post.date), "MMM d, yyyy");

  return (
    <NextLink href={`/articles/${id}`} passHref>
      <Link width="100%">
        <Box width="100%" borderWidth="1px" borderRadius="md" overflow="hidden">
          <VStack alignItems="start" padding={4}>
            <Heading as="p" size="sm" noOfLines={1}>
              {title}
            </Heading>
            <Text fontSize="xs" noOfLines={1}>
              {date}
            </Text>
          </VStack>
        </Box>
      </Link>
    </NextLink>
  );
}

export interface ArticleListProps {
  articles: Metadata[];
}

export function ArticleList(props: ArticleListProps) {
  return (
    <VStack width="100%" spacing={4}>
      {props.articles.map((article) => (
        <ArticleCard key={article.id} post={article} />
      ))}
    </VStack>
  );
}
