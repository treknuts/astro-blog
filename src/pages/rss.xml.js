import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET() {
  const posts = await getCollection("blog");
  return rss({
    title: "Nobody Asked | Blog",
    description: "Everything unsolicited",
    site: "https://nobody-asked.netlify.app",
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.slug}`,
    })),
    customData: "<language>en-us</language>",
  });
}
