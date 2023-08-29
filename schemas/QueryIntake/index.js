/* Query Intake Schema */

export default {
  title: "Query Intake",
  name: "queryIntake",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title: `${title} (Query Intake)`,
      };
    },
  },
};
