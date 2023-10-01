import { groq } from "next-sanity";
import { readClient } from "./lib/client";
import { buildQuery } from "./utils";

export const getProductPlaylist = async () => {
  try {
    const productPlaylist = await readClient.fetch(
      groq`*[_type == "productPlaylist"]{
        _id,
        title,
        products[0...6]->{
          title,
          _id,
          actualPrice,
          salePrice,
          brand,
          "image": image.asset->url,
          category,
          sourceLink
        }
      }`
    );

    return productPlaylist;
  } catch (error) {
    console.log(error);
  }
};

export const getCategories = async () => {
  try {
    const categories = await readClient.fetch(
      groq`*[_type == "categories"]{
        _id,
        title,
      }`
    );

    return categories;
  } catch (error) {
    console.log(error);
  }
};

export const getProducts = async (params) => {
  const { query, category, page } = params;

  try {
    const products = await readClient.fetch(
      groq`${buildQuery({
        type: "product",
        query,
        category,
        page: parseInt(page),
      })}
      {
        title,
        _id,
        actualPrice,
        salePrice,
        brand,
        "image": image.asset->url,
        category,
        sourceLink
      }`
    );
    return products;
  } catch (error) {
    console.log(error);
  }
};
