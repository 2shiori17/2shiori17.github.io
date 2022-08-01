import { basename, join } from "path";
import { readdir, readFile } from "fs/promises";
import { serialize } from "next-mdx-remote/serialize";
import { parse } from "date-fns";

const ID_FORMAT = "yyyy-MM-dd";
const EXTENSION = ".mdx";
const POST_DIR = join(process.cwd(), "posts");

type Serialized = Awaited<ReturnType<typeof serialize>>;

export interface Metadata {
  id: string;
  date: number;
  title: string;
}

export interface Article {
  metadata: Metadata;
  serialized: Serialized;
}

function getMetadata(path: string, serialized: Serialized): Metadata {
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
  const serialized = await serialize(source, { parseFrontmatter: true });
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
