import ProductLink from "./ProductLink";

export interface OtherProductProps {
  slug: string;
  name: string;
  image: { mobile: string; tablet: string; desktop: string };
}

const OtherProduct:React.FC<{other: OtherProductProps[] | undefined}> = ({other}):JSX.Element => {
  return (
    <div className="other-product">
      <h2>
        You may also like
      </h2>
      <ul>
        {
          other?.map((item: OtherProductProps) => (
            <ProductLink  {...item} key={item.slug} />
          ))
        }
      </ul>
    </div>
  )
}
export default OtherProduct