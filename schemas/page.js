export default {
  // Setup a 'document' type to house the page builder field

  name: "page",
  type: "document",
  title: "Page",

  fields: [
    {
      name: "pageDisplayName",
      title: "Page Display name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "pageDisplayName",
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "").slice(0, 200),
      },
    },
    {
      name: "useParallax",
      title: "Use Parallax",
      type: "boolean",
      initialValue: true,
    },
    {
      name: "useLocomotiveScroll",
      title: "Use Smooth Scroll",
      type: "boolean",
      initialValue: true,
    },
    {
      name: "onClick",
      title: "On Click Do What",
      type: "string",
      options: {
        list: [
          { title: "Change Page", value: "link" },
          { title: "Expand Nav Menu", value: "expandNavMenu" },
          { title: "Sign User Out", value: "signOut" },
        ],
      },
      initialValue: "link",
    },
    {
      name: "navIcon",
      title: "Nav Icon",
      type: "string",
      options: {
        list: [
          {
            title: "None",
            value: "none",
          },
          {
            title: "Menu",
            value: "menu",
          },
        ],
      },
      initialValue: "none",
    },
    {
      title: "Nav Priority",
      type: "number",
      name: "navPriority",
      initialValue: 0,
    },
    {
      name: "hideIf",
      title: "Hide If",
      type: "string",
      options: {
        list: [
          { title: "User is signed in", value: "userPressent" },
          { title: "No user is signed in", value: "noUserPressent" },
          { title: "Don't hide", value: "dont" },
        ],
      },
      initialValue: "dont",
    },
    {
      name: "sections",
      type: "array",
      title: "Page builder",
      of: [
        {
          name: "landingScreen",
          title: "Landing Screen",
          type: "landingScreen",
        },
        { type: "pivotalDisplay" },
        { type: "sectionTitle" },
        { type: "featuredVideo" },
        { type: "decision" },
        { type: "thematicDisplay" },
        { type: "standaloneText" },
        { type: "horizontalRule" },
        { type: "emailUsForm" },
        { type: "eventDisplay" },
        { type: "gallery" },
        { type: "mapAtLocation" },
        { type: "signUp" },
        { type: "signIn" },
        { type: "accountHeader" },
        { type: "titheHistory" },
        { type: "givePayment" },
        { type: "stylishDisplay" },
        { type: "meetingScheduler" },
        { type: "temporaryFaithLifeGiving" },
        { type: "cardDisplay" },
        { type: "subsplashGiving" },
        { type: "linkHub" },
        { type: "onlineIntake" },
        { type: "queryIntake" },
        { type: "requisition" },
        { type: "reimbursement" },
      ],
    },
  ],
};
