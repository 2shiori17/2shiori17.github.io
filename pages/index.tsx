import type { NextPage, GetStaticProps } from "next";
import { Box } from "@chakra-ui/react";
import { ArticleList, Layout } from "../components";
import { type Metadata, getArticles } from "../lib";

interface Props {
  articles: Metadata[];
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const articles = (await getArticles())
    .map((article) => article.metadata)
    .sort((a, b) => b.date - a.date);
  return { props: { articles } };
};

const Index: NextPage<Props> = (props) => {
  return (
    <Layout>
      <Box as="main">
        <ArticleList articles={props.articles} />
      </Box>
    </Layout>
  );
};

export default Index;
