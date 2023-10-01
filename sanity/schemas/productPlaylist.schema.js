const schema = {
  name: "productPlaylist",
  title: "Product Playlist",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "products",
      title: "Products",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "product" }],
        },
      ],
    },
  ],
};

export default schema;
