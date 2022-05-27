import { GetStaticPaths, GetStaticProps } from "next"
import Head from "next/head"
import { useRouter } from "next/router"
import CategoryTemplate from "../../components/templates/CategoryPage"

import Params from "../../interfaces/Param"
import { Product } from "../../interfaces/Product"
import { getCategories, getProductsByCategory } from "../../utilities/products"


const CategoryPage = ({ products }: { products: Product[] }): JSX.Element => {
  const {
    query: { category },
  } = useRouter();
  return (
    <>
      <Head>
        <title>{`Audiophile Shop - ${category}`}</title>
      </Head>
      <CategoryTemplate products={products} />
    </>
  );
};
export default CategoryPage


export const getStaticPaths: GetStaticPaths = async () => {
    const categories: string[] = getCategories()
    // console.log(categories)
    const paths = categories.map((category) => ({params: {category}}))
    return {
        paths: paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async context => {
    const params = context.params as Params

    const products: Product[] = getProductsByCategory(params.category)

    return{
        props: {
            products
        }
    }
}
