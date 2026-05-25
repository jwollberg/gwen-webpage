import { defineCollection, z } from "astro:content";

const poems = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    category: z.string(),
    image: z.string().nullable().optional(),
    imageBrightness: z.number().nullable().optional(),
    textColor: z.string().nullable().optional(),
    music: z.string().nullable().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const categories = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    image: z.string().nullable().optional(),
    imageBrightness: z.number().nullable().optional(),
    textColor: z.string().nullable().optional(),
    order: z.number().nullable().optional(),
  }),
});

const settings = defineCollection({
  type: "content",
  schema: z.object({
    homeImage: z.string().nullable().optional(),
    backgroundImage: z.string().nullable().optional(),
    backgroundBrightness: z.number().nullable().optional(),
    backgroundType: z.string().nullable().optional(),
    backgroundColor: z.string().nullable().optional(),
    backgroundPosition: z.string().nullable().optional(),
    embeddedImage: z.string().nullable().optional(),
    embeddedImageAlt: z.string().nullable().optional(),
    embeddedImageBrightness: z.number().nullable().optional(),
    embeddedImagePosition: z.string().nullable().optional(),
    textBoxWidth: z.string().nullable().optional(),
    textBoxStyle: z.string().nullable().optional(),
    featureImage: z.string().nullable().optional(),
    featureImageAlt: z.string().nullable().optional(),
    label: z.string().nullable().optional(),
    heading: z.string().optional(),
    introText: z.string().optional(),
    bodyText: z.string().optional(),
    primaryButtonLabel: z.string().nullable().optional(),
    primaryButtonUrl: z.string().nullable().optional(),
    secondaryButtonLabel: z.string().nullable().optional(),
    secondaryButtonUrl: z.string().nullable().optional(),
    images: z
      .array(
        z.object({
          image: z.string().nullable().optional(),
          alt: z.string().nullable().optional(),
          brightness: z.number().nullable().optional(),
        }),
      )
      .optional(),
    websiteEditorText: z.string().optional(),
    foldersText: z.string().optional(),
    templateIntro: z.string().optional(),
    publishFlowIntro: z.string().optional(),
    siteBackgroundColor: z.string().optional(),
    panelBackgroundColor: z.string().optional(),
    deepPanelColor: z.string().optional(),
    lightPanelColor: z.string().optional(),
    lightPanelSoftColor: z.string().optional(),
    mainTextColor: z.string().optional(),
    mutedTextColor: z.string().optional(),
    lightPanelTextColor: z.string().optional(),
    accentColor: z.string().optional(),
    accentMutedColor: z.string().optional(),
    buttonColor: z.string().optional(),
    linkColor: z.string().optional(),
    bodyFont: z.string().optional(),
    headingFont: z.string().optional(),
    brandFont: z.string().optional(),
  }),
});

export const collections = { poems, categories, settings };
