import marginAndPadding from "../components/MarginAndPadding";

import allowComments from "../components/allowComments";

/* SubsplashGiving Schema */

export default {
  title: "Subsplash Giving",
  name: "subsplashGiving",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Subsplash ID",
      description: "Its probably 2XZTC9",
      name: "subsplashID",
      type: "string",
    },
    marginAndPadding,
    ...allowComments,
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title: `${title} (Subsplash Giving)`,
      };
    },
  },
};
