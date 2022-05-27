import { motion } from "framer-motion"
import Link from "next/link"

function CategoryLists({text, url, img} : { 
    text: string 
    img?: string
    url: string 
}):JSX.Element {
  return (
    <div className="category_list">
        <motion.li
        initial={{opacity: 0, x: '-100px' }}
        animate={{opacity: 1,
        x: "0",
        transition: {
            delay: .5,
            duration: '1'
            
        }
        }}
        exit={{opacity: 0,
        x: "100px",
        transition:{
            ease: "easeOut"
        }}}
        >
            <Link href={url}>
                <a>
                    <div className="image">
                         {/* eslint-disable-next-line */}
                        <img src={img} alt={text} />
                    </div>
                    <h2>
                        {text}
                    </h2>
                    <p>
                        shop
                        <span>
                             {/* eslint-disable-next-line */}
                            <img src="/images/shared/desktop/icon-arrow-right.svg" alt="icon right" />
                        </span>
                    </p>
                </a>
            </Link>
        </motion.li>
    </div>
  )
}
export default CategoryLists