/** NOTE:
 * don't use TS Enums here, since they just cause unneccesary issues and Astro
 * does not currently properly support const enums
 */

/**
 * Sizes to use in <Picture> and getImage
 */
export const IMAGE_SIZES = {
  Meta: 1200,
  PageWidth: 1480 // should match theme.css
} satisfies Record<string, number>;
