import socialFields from "./socialFields";
import linkFeilds from "./linkFeilds";
/* Link Hub Schema */

export default {
  title: "Link Hub",
  name: "linkHub",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      name: "Footer",
      title: "footer",
      type: "genericActionButton",
    },
    {
      title: "Profile Image",
      name: "profileImage",
      type: "image",
    },
    {
      title: "Social Link 1",
      name: "socialLink1",
      type: "object",
      fields: socialFields,
    },
    {
      title: "Social Link 2",
      name: "socialLink2",
      type: "object",
      fields: socialFields,
    },
    {
      title: "Social Link 3",
      name: "socialLink3",
      type: "object",
      fields: socialFields,
    },
    {
      title: "Link 1",
      name: "link1",
      type: "object",
      fields: linkFeilds,
    },
    {
      title: "Link 2",
      name: "link2",
      type: "object",
      fields: linkFeilds,
    },
    {
      title: "Link 3",
      name: "link3",
      type: "object",
      fields: linkFeilds,
    },
    {
      title: "Link 4",
      name: "link4",
      type: "object",
      fields: linkFeilds,
    },
    {
      title: "Background",
      name: "background",
      type: "image",
    },
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title: `${title} (Link Hub)`,
      };
    },
  },
};
