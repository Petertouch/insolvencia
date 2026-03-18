import { create } from "zustand";
import { persist } from "zustand/middleware";
import { BLOG_POSTS, type BlogPost } from "@/lib/blog-data";

interface BlogStore {
  posts: BlogPost[];
  addPost: (post: Omit<BlogPost, "slug">) => void;
  updatePost: (slug: string, data: Partial<BlogPost>) => void;
  deletePost: (slug: string) => void;
  getPost: (slug: string) => BlogPost | undefined;
}

function toSlug(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export const useBlogStore = create<BlogStore>()(
  persist(
    (set, get) => ({
      posts: BLOG_POSTS,
      addPost: (post) => {
        const slug = toSlug(post.titulo);
        set((s) => ({ posts: [{ ...post, slug }, ...s.posts] }));
      },
      updatePost: (slug, data) => {
        set((s) => ({
          posts: s.posts.map((p) =>
            p.slug === slug ? { ...p, ...data } : p
          ),
        }));
      },
      deletePost: (slug) => {
        set((s) => ({ posts: s.posts.filter((p) => p.slug !== slug) }));
      },
      getPost: (slug) => get().posts.find((p) => p.slug === slug),
    }),
    { name: "insolvencia-blog" }
  )
);
