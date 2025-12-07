import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIRoute } from "astro";

/**
 * Generate RSS feed for blog posts
 */
export const GET: APIRoute = async (context) => {
  try {
    const posts = await getCollection("posts");

    return rss({
      title: "Karthik's personal blog",
      description:
        "I'm a software engineer passionate about solving real-world problems through code. I love writing technical blogs where I share insights, tutorials, and experiences from the world of web development, DevOps, and automation.",
      site: context.site ?? "https://karthik.nayak.in",
      items: posts
        .sort((a, b) => {
          try {
            return Date.parse(b.data.date) - Date.parse(a.data.date);
          } catch (error) {
            console.error("Error parsing dates in RSS feed:", error);
            return 0;
          }
        })
        .map((post) => ({
          title: post.data.title,
          description: post.data.excerpt,
          link: `/blogs/${post.slug}`,
          pubDate: new Date(post.data.date),
          author: post.data.author,
        })),
      customData: `<language>en</language>`,
    });
  } catch (error) {
    console.error("Error generating RSS feed:", error);
    return new Response("Error generating RSS feed", { status: 500 });
  }
};
