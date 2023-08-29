/* Online Intake Schema */

import marginAndPadding from "../components/MarginAndPadding";

import allowComments from "../components/allowComments";

export default {
  title: "Online Intake",
  name: "onlineIntake",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Background Image",
      name: "backgroundImage",
      type: "image",
    },
    {
      title: "Calendy Route ID to Schedule Expedited Intake",
      name: "calendyRouteID",
      type: "string",
      desctiption:
        "This is the route ID of the calendy page. This is used to create the link to the calendy embed.",
    },
    {
      title: "Fixed Calendy Height Desktop",
      name: "fixedCalendyHeightDesktop",
      type: "number",
      description:
        "This is the height, in px, of the calendy embed on desktop. ",
      initialValue: 1042,
    },
    {
      title: "Fixed Calendy Height Mobile",
      name: "fixedCalendyHeightMobile",
      type: "number",
      description:
        "This is the height, in px, of the calendy embed on mobile. ",
      initialValue: 1181,
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
        title: `${title} (Online Intake)`,
      };
    },
  },
};
