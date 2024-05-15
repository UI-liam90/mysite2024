import { globalBlockSettingsFragment } from "~data/dataFragments";
import { contactBlockFields } from "~components/ContactBlock/query";
import { formBlockFields } from "~components/FormBlock/query";
import { imageBlockFields } from "~components/ImageBlock/query";
import { textBlockFields } from "~components/TextBlock/query";
const blocks = `
... on PageBuilderBlocksColumnOneBlocksContactBlockLayout {
    ${contactBlockFields}
  }
... on PageBuilderBlocksColumnOneBlocksFormBlockLayout {
    ${formBlockFields}
  }
... on PageBuilderBlocksColumnOneBlocksImageBlockLayout  {
    ${imageBlockFields}
  }
... on PageBuilderBlocksColumnOneBlocksTextBlockLayout {
    ${textBlockFields}
  }
`;

export const multiColumnItems = `
fieldGroupName
numberOfColumns
${globalBlockSettingsFragment}
columnOne {
    blocks {
        ${blocks}
    }
}
columnTwo {
    blocks {
        ${blocks}
    }
}
columnThree {
    blocks {
        ${blocks}
    }
}
columnFour {
    blocks {
        ${blocks}
    }
}
columnFive {
    blocks {
        ${blocks}
    }
}
columnSix {
    blocks {
        ${blocks}
    }
}
`;
