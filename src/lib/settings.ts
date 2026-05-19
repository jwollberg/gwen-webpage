import { getEntry } from "astro:content";
import type { CollectionEntry } from "astro:content";

type SettingsData = CollectionEntry<"settings">["data"];

export type PageId =
  | "home"
  | "poetry"
  | "short-stories"
  | "artwork"
  | "gallery"
  | "publisher";

type ImageItem = {
  image: string;
  alt: string;
};

export type PageSettings = {
  backgroundType: string;
  backgroundImage: string;
  backgroundColor: string;
  backgroundPosition: string;
  embeddedImage: string;
  embeddedImageAlt: string;
  embeddedImagePosition: string;
  textBoxWidth: string;
  textBoxStyle: string;
  label: string;
  heading: string;
  introText: string;
  bodyText: string;
  primaryButtonLabel: string;
  primaryButtonUrl: string;
  secondaryButtonLabel: string;
  secondaryButtonUrl: string;
  images: ImageItem[];
  websiteEditorText: string;
  foldersText: string;
  templateIntro: string;
  publishFlowIntro: string;
};

export type ThemeSettings = {
  siteBackgroundColor: string;
  style: string;
};

const pageDefaults: Record<PageId, PageSettings> = {
  home: {
    backgroundType: "image",
    backgroundImage: "/media/images/writing-desk-hero.png",
    backgroundColor: "#07110f",
    backgroundPosition: "center",
    embeddedImage: "/media/images/still-life-roses.png",
    embeddedImageAlt: "A still-life photograph from Gwen's visual archive",
    embeddedImagePosition: "right",
    textBoxWidth: "wide",
    textBoxStyle: "glass",
    label: "Poetry, short fiction, and visual work",
    heading: "A private weather made public.",
    introText:
      "Gwenevere Ivy Greenwood is a writer and artist creating poems, short fiction, and visual work shaped by memory, nature, grief, tenderness, and the strange light of ordinary rooms.",
    bodyText:
      "This site is a personal archive: part reading room, part journal, part visual collection. It gathers finished work, work in progress, and the images that help carry the mood of the writing.",
    primaryButtonLabel: "Read poetry",
    primaryButtonUrl: "/poems/",
    secondaryButtonLabel: "Short stories",
    secondaryButtonUrl: "/short-stories/",
    images: [],
    websiteEditorText: "",
    foldersText: "",
    templateIntro: "",
    publishFlowIntro: "",
  },
  poetry: {
    backgroundType: "image",
    backgroundImage: "/media/images/rain-window.png",
    backgroundColor: "#07110f",
    backgroundPosition: "center",
    embeddedImage: "/media/images/shoreline-notebook.png",
    embeddedImageAlt: "A notebook near the shoreline",
    embeddedImagePosition: "right",
    textBoxWidth: "standard",
    textBoxStyle: "glass",
    label: "Poetry",
    heading: "Poems and collections",
    introText:
      "Open a title to read the poem here. The page stays still enough to feel like a room, while the writing moves at its own pace.",
    bodyText: "",
    primaryButtonLabel: "",
    primaryButtonUrl: "",
    secondaryButtonLabel: "",
    secondaryButtonUrl: "",
    images: [],
    websiteEditorText: "",
    foldersText: "",
    templateIntro: "",
    publishFlowIntro: "",
  },
  "short-stories": {
    backgroundType: "image",
    backgroundImage: "/media/images/shoreline-notebook.png",
    backgroundColor: "#07110f",
    backgroundPosition: "center",
    embeddedImage: "/media/images/rain-window.png",
    embeddedImageAlt: "Rain on a window",
    embeddedImagePosition: "left",
    textBoxWidth: "standard",
    textBoxStyle: "glass",
    label: "Short Stories",
    heading: "Under construction",
    introText:
      "Short stories are currently being prepared and submitted for publication. Once they appear in magazines or journals, this page will gather links to those published pieces instead of posting the full stories here.",
    bodyText: "",
    primaryButtonLabel: "",
    primaryButtonUrl: "",
    secondaryButtonLabel: "",
    secondaryButtonUrl: "",
    images: [],
    websiteEditorText: "",
    foldersText: "",
    templateIntro: "",
    publishFlowIntro: "",
  },
  artwork: {
    backgroundType: "image",
    backgroundImage: "/media/images/still-life-roses.png",
    backgroundColor: "#07110f",
    backgroundPosition: "center",
    embeddedImage: "/media/images/writing-desk-hero.png",
    embeddedImageAlt: "A writing desk",
    embeddedImagePosition: "right",
    textBoxWidth: "standard",
    textBoxStyle: "glass",
    label: "Artwork",
    heading: "A visual archive in progress.",
    introText:
      "This section will eventually hold photography, drawings, and mixed media work. For now, it keeps the mood open and quiet while the final layout takes shape.",
    bodyText: "",
    primaryButtonLabel: "",
    primaryButtonUrl: "",
    secondaryButtonLabel: "",
    secondaryButtonUrl: "",
    images: [
      { image: "/media/images/rain-window.png", alt: "" },
      { image: "/media/images/shoreline-notebook.png", alt: "" },
      { image: "/media/images/writing-desk-hero.png", alt: "" },
    ],
    websiteEditorText: "",
    foldersText: "",
    templateIntro: "",
    publishFlowIntro: "",
  },
  gallery: {
    backgroundType: "color",
    backgroundImage: "",
    backgroundColor: "#182a24",
    backgroundPosition: "center",
    embeddedImage: "/media/images/rain-window.png",
    embeddedImageAlt: "Rain on a window",
    embeddedImagePosition: "right",
    textBoxWidth: "standard",
    textBoxStyle: "solid",
    label: "",
    heading: "Gallery",
    introText: "Images from the poem archive, gathered in one quiet place.",
    bodyText: "",
    primaryButtonLabel: "",
    primaryButtonUrl: "",
    secondaryButtonLabel: "",
    secondaryButtonUrl: "",
    images: [],
    websiteEditorText: "",
    foldersText: "",
    templateIntro: "",
    publishFlowIntro: "",
  },
  publisher: {
    backgroundType: "color",
    backgroundImage: "",
    backgroundColor: "#f5efe4",
    backgroundPosition: "center",
    embeddedImage: "/media/images/writing-desk-hero.png",
    embeddedImageAlt: "A writing desk",
    embeddedImagePosition: "right",
    textBoxWidth: "standard",
    textBoxStyle: "paper",
    label: "",
    heading: "Publisher",
    introText:
      "The admin screen lives at /admin/. It gives you a website login and form editor for poems, images, and music.",
    bodyText: "",
    primaryButtonLabel: "",
    primaryButtonUrl: "",
    secondaryButtonLabel: "",
    secondaryButtonUrl: "",
    images: [],
    websiteEditorText:
      "Open the admin page from your published website. You will see a login screen, then a form-based editor for adding and changing poems.",
    foldersText:
      "These folders hold the editable writing, category, image, and music files used by the website.",
    templateIntro: "Use this starter layout when adding a poem by hand.",
    publishFlowIntro: "Use this order when publishing through the admin screen.",
  },
};

const fontStacks: Record<string, string> = {
  "cormorant-garamond": '"Cormorant Garamond", Georgia, "Times New Roman", serif',
  "libre-baskerville": '"Libre Baskerville", Georgia, "Times New Roman", serif',
  lora: "Lora, Georgia, serif",
  merriweather: "Merriweather, Georgia, serif",
  "playfair-display": '"Playfair Display", Georgia, serif',
  "system-serif": 'Georgia, "Times New Roman", serif',
  "system-sans":
    'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  "ms-madi": '"Ms Madi", "Segoe Script", "Lucida Handwriting", cursive',
};

const themeDefaults = {
  siteBackgroundColor: "#07110f",
  panelBackgroundColor: "#10201b",
  deepPanelColor: "#182a24",
  lightPanelColor: "#f5efe4",
  lightPanelSoftColor: "#ebe0cf",
  mainTextColor: "#fff7eb",
  mutedTextColor: "#d4c5ae",
  lightPanelTextColor: "#2e2921",
  accentColor: "#a3ad7b",
  accentMutedColor: "#7c8a5b",
  buttonColor: "#5b1216",
  linkColor: "#c99a4a",
  bodyFont: "system-sans",
  headingFont: "cormorant-garamond",
  brandFont: "ms-madi",
};

function hasText(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function textValue(data: SettingsData, key: keyof SettingsData, fallback: string): string {
  const value = data[key];

  return hasText(value) ? value : fallback;
}

function colorValue(value: unknown, fallback: string): string {
  if (hasText(value) && /^#[0-9a-fA-F]{3,8}$/.test(value)) {
    return value;
  }

  return fallback;
}

function fontValue(value: unknown, fallbackKey: string): string {
  if (hasText(value) && value in fontStacks) {
    return fontStacks[value];
  }

  return fontStacks[fallbackKey] ?? fontStacks["system-sans"];
}

function optionValue(value: unknown, allowed: string[], fallback: string): string {
  if (hasText(value) && allowed.includes(value)) {
    return value;
  }

  return fallback;
}

function imageListValue(images: SettingsData["images"], fallback: ImageItem[]): ImageItem[] {
  if (!Array.isArray(images)) {
    return fallback;
  }

  const cleanImages = images
    .filter((item) => hasText(item?.image))
    .map((item) => ({
      image: item.image ?? "",
      alt: item.alt ?? "",
    }));

  return cleanImages.length > 0 ? cleanImages : fallback;
}

export async function getPageSettings(pageId: PageId): Promise<PageSettings> {
  const fallback = pageDefaults[pageId];
  const entry = await getEntry("settings", pageId);
  const data: SettingsData = entry?.data ?? {};

  const homeImageFallback =
    pageId === "home" && hasText(data.homeImage) ? data.homeImage : fallback.backgroundImage;
  const embeddedImageFallback = hasText(data.featureImage)
    ? data.featureImage
    : fallback.embeddedImage;
  const embeddedImageAltFallback = hasText(data.featureImageAlt)
    ? data.featureImageAlt
    : fallback.embeddedImageAlt;

  return {
    backgroundType: optionValue(data.backgroundType, ["image", "color"], fallback.backgroundType),
    backgroundImage: textValue(data, "backgroundImage", homeImageFallback),
    backgroundColor: colorValue(data.backgroundColor, fallback.backgroundColor),
    backgroundPosition: optionValue(
      data.backgroundPosition,
      ["center", "top", "bottom", "left", "right"],
      fallback.backgroundPosition,
    ),
    embeddedImage: textValue(data, "embeddedImage", embeddedImageFallback),
    embeddedImageAlt: textValue(data, "embeddedImageAlt", embeddedImageAltFallback),
    embeddedImagePosition: optionValue(
      data.embeddedImagePosition,
      ["right", "left", "hidden"],
      fallback.embeddedImagePosition,
    ),
    textBoxWidth: optionValue(data.textBoxWidth, ["narrow", "standard", "wide"], fallback.textBoxWidth),
    textBoxStyle: optionValue(
      data.textBoxStyle,
      ["glass", "solid", "paper", "simple"],
      fallback.textBoxStyle,
    ),
    label: textValue(data, "label", fallback.label),
    heading: textValue(data, "heading", fallback.heading),
    introText: textValue(data, "introText", fallback.introText),
    bodyText: textValue(data, "bodyText", fallback.bodyText),
    primaryButtonLabel: textValue(data, "primaryButtonLabel", fallback.primaryButtonLabel),
    primaryButtonUrl: textValue(data, "primaryButtonUrl", fallback.primaryButtonUrl),
    secondaryButtonLabel: textValue(data, "secondaryButtonLabel", fallback.secondaryButtonLabel),
    secondaryButtonUrl: textValue(data, "secondaryButtonUrl", fallback.secondaryButtonUrl),
    images: imageListValue(data.images, fallback.images),
    websiteEditorText: textValue(data, "websiteEditorText", fallback.websiteEditorText),
    foldersText: textValue(data, "foldersText", fallback.foldersText),
    templateIntro: textValue(data, "templateIntro", fallback.templateIntro),
    publishFlowIntro: textValue(data, "publishFlowIntro", fallback.publishFlowIntro),
  };
}

export async function getThemeSettings(): Promise<ThemeSettings> {
  const entry = await getEntry("settings", "theme");
  const data: SettingsData = entry?.data ?? {};

  const siteBackgroundColor = colorValue(
    data.siteBackgroundColor,
    themeDefaults.siteBackgroundColor,
  );

  const variables = {
    "--ink": siteBackgroundColor,
    "--ink-soft": colorValue(data.panelBackgroundColor, themeDefaults.panelBackgroundColor),
    "--sage-dark": colorValue(data.deepPanelColor, themeDefaults.deepPanelColor),
    "--paper": colorValue(data.lightPanelColor, themeDefaults.lightPanelColor),
    "--paper-soft": colorValue(data.lightPanelSoftColor, themeDefaults.lightPanelSoftColor),
    "--text": colorValue(data.mainTextColor, themeDefaults.mainTextColor),
    "--text-muted": colorValue(data.mutedTextColor, themeDefaults.mutedTextColor),
    "--body": colorValue(data.lightPanelTextColor, themeDefaults.lightPanelTextColor),
    "--olive-light": colorValue(data.accentColor, themeDefaults.accentColor),
    "--olive": colorValue(data.accentMutedColor, themeDefaults.accentMutedColor),
    "--oxblood": colorValue(data.buttonColor, themeDefaults.buttonColor),
    "--gold": colorValue(data.linkColor, themeDefaults.linkColor),
    "--sans": fontValue(data.bodyFont, themeDefaults.bodyFont),
    "--serif": fontValue(data.headingFont, themeDefaults.headingFont),
    "--script": fontValue(data.brandFont, themeDefaults.brandFont),
  };

  return {
    siteBackgroundColor,
    style: Object.entries(variables)
      .map(([name, value]) => `${name}: ${value}`)
      .join("; "),
  };
}
