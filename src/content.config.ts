import { defineCollection, z } from "astro:content";

const poems = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    category: z.string(),
    image: z.string().optional(),
    imageBrightness: z.number().optional(),
    textColor: z.string().optional(),
    music: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const categories = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    image: z.string().optional(),
    imageBrightness: z.number().optional(),
    textColor: z.string().optional(),
    order: z.number().nullable().optional(),
  }),
});

const settings = defineCollection({
  type: "content",
  schema: z.object({
    homeImage: z.string().optional(),
    backgroundImage: z.string().optional(),
    backgroundBrightness: z.number().optional(),
    backgroundType: z.string().optional(),
    backgroundColor: z.string().optional(),
    backgroundPosition: z.string().optional(),
    embeddedImage: z.string().optional(),
    embeddedImageAlt: z.string().optional(),
    embeddedImageBrightness: z.number().optional(),
    embeddedImagePosition: z.string().optional(),
    textBoxWidth: z.string().optional(),
    textBoxStyle: z.string().optional(),
    featureImage: z.string().optional(),
    featureImageAlt: z.string().optional(),
    label: z.string().optional(),
    heading: z.string().optional(),
    introText: z.string().optional(),
    bodyText: z.string().optional(),
    primaryButtonLabel: z.string().optional(),
    primaryButtonUrl: z.string().optional(),
    secondaryButtonLabel: z.string().optional(),
    secondaryButtonUrl: z.string().optional(),
    images: z
      .array(
        z.object({
          image: z.string().optional(),
          alt: z.string().optional(),
          brightness: z.number().optional(),
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
