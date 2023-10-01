const schema = {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
    },
    {
      name: "actualPrice",
      title: "Actual Price",
      type: "number",
    },
    {
      name: "salePrice",
      title: "Sale Price",
      type: "number",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
    },
    {
      name: "brand",
      title: "Brand",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          "mobile",
          "laptop",
          "watch",
          "clothes",
          "kitchen",
          "household",
          "other",
        ],
      },
    },
    {
      name: "sourceLink",
      title: "Source Link",
      type: "url",
      validation: (Rule) => Rule.required(),
    },
  ],
};

export default schema;
