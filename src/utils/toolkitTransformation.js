export const ElementToJSON = (el) => {
  switch (el) {
    case "input":
      return {
        name: "input",
        type: "text",
        category: "input",
        label: "",
        property: {
          placeholder: "",
          required: "",
          value: "",
        },
      };

    case "button":
      return {
        name: "button",
        type: "button",
        category: "button",
        label: "Submit",
        property: {
          placeholder: "",
          required: "",
          value: "",
        },
      };

      case "star":
        return {
          name: "star",
          type: "star",
          category: "star",
          label: "",
          property: {
            placeholder: "",
            required: "",
            value: "",
          },
        };

    default:
      return {
        name: "text",
        type: "",
        category: "text",
        label: "Text Element",
        property: {},
      };
  }
};
