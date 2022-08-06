import type { NextPage, GetStaticProps, GetStaticPaths } from "next";
import type { ParsedUrlQuery } from "querystring";
import { MDXRemote } from "next-mdx-remote";
import { Box } from "@chakra-ui/react";
import { Layout, mdxComponents } from "../../components";
import { getArticles, getArticle, type Article } from "../../lib";

interface Props {
  article: Article;
}

interface Params extends ParsedUrlQuery {
  id: string;
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const articles = await getArticles();
  const paths = articles.map((article) => ({
    params: { id: article.metadata.id },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const article = await getArticle(params!.id);
  return { props: { article } };
};

const Article: NextPage<Props> = (props) => {
  return (
    <Layout>
      <Box as="main">
        <MDXRemote {...props.article.serialized} components={mdxComponents} />
      </Box>
    </Layout>
  );
};

export default Article;
