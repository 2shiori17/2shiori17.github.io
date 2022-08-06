import { basename, join } from "path";
import { readdir, readFile } from "fs/promises";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import remarkGfm from "remark-gfm";
import { parse } from "date-fns";

const ID_FORMAT = "yyyy-MM-dd";
const EXTENSION = ".md";
const POST_DIR = join(process.cwd(), "2shiori17", "blog");

export interface Metadata {
  id: string;
  date: number;
  title: string;
}

export interface Article {
  metadata: Metadata;
  serialized: MDXRemoteSerializeResult;
}

function getMetadata(
  path: string,
  serialized: MDXRemoteSerializeResult
): Metadata {
  const id = basename(path, EXTENSION);
  const date = parse(id, ID_FORMAT, new Date()).getTime();
  const title = serialized.frontmatter?.["title"];

  if (!title) {
    throw new Error(`No title found in ${path}`);
  }

  return { id, date, title };
}

async function parseMDX(path: string): Promise<Article> {
  const source = (await readFile(path)).toString();
  const serialized = await serialize(source, {
    parseFrontmatter: true,
    mdxOptions: { remarkPlugins: [remarkGfm] },
  });
  const metadata = getMetadata(path, serialized);
  return { metadata, serialized };
}

export async function getArticles(): Promise<Article[]> {
  const paths = await readdir(POST_DIR);
  return Promise.all(paths.map((path) => parseMDX(join(POST_DIR, path))));
}

export async function getArticle(id: string): Promise<Article> {
  return parseMDX(join(POST_DIR, `${id}${EXTENSION}`));
}
