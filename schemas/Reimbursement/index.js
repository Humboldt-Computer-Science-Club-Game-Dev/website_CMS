/* Reimbursement Schema */
import MarginAndPadding from "../components/MarginAndPadding";

export default {
  title: "Reimbursement",
  name: "reimbursement",
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
        title: `${title} (Reimbursement)`,
      };
    },
  },
};
