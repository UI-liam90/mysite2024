import { imageFragment } from "~data/dataFragments";
export const meetTheTeamFields = /* GraphQL */ `
fieldGroupName
showPopups
text
title
titleType
teamMembers {
    bio
    name
    image {
        ${imageFragment}
    }
    socialMedia {
        icon
        url: link
    }
}
`;
