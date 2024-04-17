import type { ImageMetadata } from "astro";

export interface PageMeta {
  title: string;
  description: string;
  noRobots?: boolean;
  image?: ImageMetadata | string;
  imageLarge?: boolean;
}
