import Header from "@/components/Header";
import Content from "../../components/Content";
import { getCategories, getProductPlaylist, getProducts } from "@/sanity/actions";
import { Categories } from "@/components/Category";
import SearchForm from "@/components/SearchForm";

export const revalidate = 900;

export default async function Home({ searchParams }) {
  const products = await getProducts({
    query: searchParams?.query || '',
    category: searchParams?.category || '',
    page: '1',
  });

  const productPlaylist = await getProductPlaylist();
  const categories = await getCategories();

  return (
    <main className="flex items-center justify-center px-10 pt-8 pb-5 mx-auto w-full max-w-screen-2xl flex-col">
      <section className="w-full">
        <div className="flex items-center justify-center relative min-h-[274px] w-full flex-col rounded-xl bg-banner bg-contain bg-no-repeat bg-center text-center">
        </div>
      </section>
      <section className="flex flex-col md:flex-row gap-x-10 gap-y-5 my-5">
        <Categories categories={categories} />
        <SearchForm />
      </section>

      {(searchParams?.query || searchParams?.category) && (
        <section className="flex items-center justify-center w-full flex-col mb-6">
          <Header
            query={searchParams?.query || ''}
            category={searchParams?.category || ''}
          />
          <div className="flex w-full flex-wrap justify-center gap-10 md:gap-16 sm:justify-start">
            {products?.length > 0 ? (
              products?.map((product) => (
                <Content
                  key={product._id}
                  title={product.title}
                  brand={product.brand}
                  category={product.category}
                  actual={product.actualPrice}
                  sale={product.salePrice}
                  image={product.image}
                  src={product.sourceLink}
                />
              ))
            ) : (
              <p className="my-10 text-[14px] text-white font-normal leading-[17.5px]">
                No Products Found
              </p>
            )}</div>
        </section>
      )}
      {productPlaylist?.map((item) => (
        <section key={item._id} className="flex items-center justify-center w-full flex-col mb-10">
          <h1 className="font-bold sm:text-[32px] sm:leading-[33.6px] text-[28px] leading-[40px] tracking-[-0.25%] self-start text-white">{item.title}</h1>
          <div className="flex w-full flex-wrap justify-center gap-16 sm:justify-start mt-6">
            {item.products?.map((product) => (
              <Content
                key={product._id}
                title={product.title}
                brand={product.brand}
                category={product.category}
                actual={product.actualPrice}
                sale={product.salePrice}
                image={product.image}
                src={product.sourceLink}
              />
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
