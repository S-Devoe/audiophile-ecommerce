
import { links } from '../../utilities/links'
import CategoryLists from '../molecules/CategoryLists'
function Category(): JSX.Element {
  return (
    <section className="category">
        <div className="wrapper">
            <ul>
                {links.slice(1).map((link) => (
                    <CategoryLists  {...link} key={link.id}/>
                ))}
              
            </ul>
        </div>
    </section>
  )
}
export default Category