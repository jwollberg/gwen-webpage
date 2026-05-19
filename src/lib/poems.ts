import { sitePath } from "./paths";

type MarkdownModule = {
  frontmatter: PoemFrontmatter;
  Content: any;
};

type CategoryModule = {
  frontmatter: CategoryFrontmatter;
};

export type PoemFrontmatter = {
  title: string;
  category: string;
  image?: string;
  music?: string;
  tags?: string[];
  featured?: boolean;
  draft?: boolean;
};

export type Poem = PoemFrontmatter & {
  slug: string;
  Content: any;
};

export type CategoryFrontmatter = {
  title: string;
  image?: string;
  order?: number | null;
  draft?: boolean;
};

export type Category = CategoryFrontmatter & {
  slug: string;
  poems: Poem[];
};

const poemModules = import.meta.glob<MarkdownModule>("../content/poems/*.md", {
  eager: true,
});

const categoryModules = import.meta.glob<CategoryModule>(
  "../content/categories/*.md",
  {
    eager: true,
  },
);

export const poems: Poem[] = Object.entries(poemModules)
  .map(([path, module]) => {
    const slug = path.split("/").pop()?.replace(".md", "") ?? "";

    return {
      ...module.frontmatter,
      slug,
      Content: module.Content,
    };
  })
  .filter((poem) => !poem.draft)
  .sort((a, b) => a.title.localeCompare(b.title));

export const categories: Category[] = Object.entries(categoryModules)
  .map(([path, module]) => {
    const slug = path.split("/").pop()?.replace(".md", "") ?? "";

    return {
      ...module.frontmatter,
      slug,
      poems: poems.filter((poem) => poem.category === slug),
    };
  })
  .filter((category) => !category.draft)
  .sort((a, b) => {
    const orderA = a.order ?? 999;
    const orderB = b.order ?? 999;

    if (orderA !== orderB) {
      return orderA - orderB;
    }

    return a.title.localeCompare(b.title);
  });

export const categoryMap = new Map(
  categories.map((category) => [category.slug, category]),
);

export const featuredPoems = poems.filter((poem) => poem.featured).slice(0, 3);

export function getPoemBySlug(slug: string): Poem | undefined {
  return poems.find((poem) => poem.slug === slug);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}

export function getPoemsByCategory(categorySlug: string): Poem[] {
  return poems.filter((poem) => poem.category === categorySlug);
}

export function getPoemPath(poem: Pick<Poem, "category" | "slug">): string {
  return sitePath(`/poems/${poem.category}/${poem.slug}/`);
}

export function getCategoryPath(category: Pick<Category, "slug">): string {
  return sitePath(`/poems/${category.slug}/`);
}

export function getAdjacentPoems(slug: string, categorySlug?: string): {
  previous?: Poem;
  next?: Poem;
} {
  const poemSet = categorySlug ? getPoemsByCategory(categorySlug) : poems;
  const index = poemSet.findIndex((poem) => poem.slug === slug);

  return {
    previous: index > 0 ? poemSet[index - 1] : undefined,
    next: index >= 0 && index < poemSet.length - 1 ? poemSet[index + 1] : undefined,
  };
}
