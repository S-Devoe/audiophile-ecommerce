import { GetStaticPaths, GetStaticProps } from "next"
import Head from "next/head"
import ProductPageTemplate from "../../components/templates/ProductPage"
import Params from "../../interfaces/Param"
import { Product } from "../../interfaces/Product"
import { getProductBySlug, getProductsPaths } from "../../utilities/products"


 

const ProductPage: React.FC<{product: Product}> = ({product}):JSX.Element => {
  // console.log(product);
  return (
    <>
    <Head>
      <title>{`Audiophile shop - ${product.name}`}</title>
      
    </Head>
    <section className="">
      <ProductPageTemplate product={product}/>
    </section>
    </>
  )
}
export default ProductPage


export const getStaticPaths: GetStaticPaths = async () => {
  const paths =  getProductsPaths().map((path) => ({
    params: {category: path.category, slug: path.slug}
  }))
  // console.log(paths)

  return {
    paths,
    fallback: false
  }

} 

export const getStaticProps: GetStaticProps = async (context) => {
  
  const params= context.params as Params
  // console.log(params.slug)

  const product: Product | undefined = getProductBySlug(params.slug);
  // console.log(product);


  return{
    props: {
      product
    }
  }
}

