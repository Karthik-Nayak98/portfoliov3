import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const blog = await getCollection("posts");

  return rss({
    title: "Karthik's personal blog",
    description:
      "I'm a software engineer passionate about solving real-world problems through code. I love writing technical blogs where I share insights, tutorials, and experiences from the world of web development, DevOps, and automation.",
    site: context.site,
    items: blog
      .sort((a, b) => Date.parse(b.data.date) - Date.parse(a.data.date))
      .map((post) => ({
        title: post.data.title,
        description: post.data.excerpt,
        link: `/${post.slug}/`,
        pubDate: post.data.date,
        author: post.data.author,
      })),
    customData: `<language>en</language>`,
  });
}
