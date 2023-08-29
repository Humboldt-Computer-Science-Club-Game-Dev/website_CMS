/* Requisition Form Schema */
import MarginAndPadding from "../components/MarginAndPadding";

export default {
  title: "Requisition Form",
  name: "requisition",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    MarginAndPadding,
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title: `${title} (Requisition Form)`,
      };
    },
  },
};
