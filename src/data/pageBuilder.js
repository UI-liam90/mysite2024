import { contactBlockFields } from "~components/ContactBlock/query";
import { faqBlockFields } from "~components/FaqBlock/query";
import { galleryBlockFields } from "~components/GalleryBlock/query";
import { heroBlockFields } from "~components/HeroBlock/query";
import { newsAndTrendsBlockFields } from "~components/NewsAndTrendsBlock/query";
import { textBlockFields } from "~components/TextBlock/query";
import { codingHeroFields } from "~components/CodingHeroBannerBlock/query";
import { multiColumnItems } from "~components/MultiColumnBlock/query";

export const pageBuilderBlocks = `
        ... on PageBuilderBlocksContactBlockLayout {
            ${contactBlockFields}
        }
        ... on PageBuilderBlocksCodingHeroBannerLayout {
            ${codingHeroFields}
        }
        ... on PageBuilderBlocksFaqBlockLayout {
            ${faqBlockFields}
        }
        ... on PageBuilderBlocksGalleryBlockLayout {
            ${galleryBlockFields}
        }
        ... on PageBuilderBlocksHeroBannerLayout {
            ${heroBlockFields}
        }
        ... on PageBuilderBlocksNewsAndTrendsBlockLayout {
            ${newsAndTrendsBlockFields}
        }
        ... on PageBuilderBlocksTextBlockLayout {
            ${textBlockFields}
        }
        ... on PageBuilderBlocksTextBlockLayout {
            ${textBlockFields}
        }
        ... on PageBuilderBlocksMultiColumnBlockLayout {
            ${multiColumnItems}
        }
`;
