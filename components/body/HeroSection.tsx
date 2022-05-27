import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

function HeroSection() {
  return (
    <section className="hero_section">
      <div className="wrapper">
        <motion.div className="content">
          <motion.div
            className="picture"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: "2" }}
          >
            <picture className="hero_picture">
              <source
                srcSet="/images/home/desktop/image-hero.jpg"
                media="(min-width: 1200px )"
              />
              <source
                srcSet="/images/home/tablet/image-hero.jpg"
                media="(min-width: 768px )"
              />
              <source srcSet="/images/home/mobile/image-hero.jpg" />

              {/* eslint-disable-next-line */}
              <img src="/images/home/mobile/image-hero.jpg" alt="Headphone" />
            </picture>
          </motion.div>

          <motion.div
            className="hero_content"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                delay: 1.5,
                duration: "2",
              },
            }}
          >
            <span>New product</span>
            <h1>XX99 Mark II Headphones</h1>
            <p>
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <div className="hero_button">
              <Link href="/headphones/xx99-mark-two-headphones">
                <button className="button_primary">See Product</button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
export default HeroSection