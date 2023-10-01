const schema = {
    name: "categories",
    title: "Categories",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string",
        validation: (Rule) => Rule.required(),
      },
    ],
  };
  
  export default schema;
  