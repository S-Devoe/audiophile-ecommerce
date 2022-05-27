import Link from "next/link";
import FadeInOnScroll from "./FadeInOnScroll";

function YX1Earphones() {
  return (
    <section className="yx1">
      <div className="yx1_container">
        <FadeInOnScroll>
          <div className="yx1_picture">
            <picture>
              <source
                media="(min-width: 1200px)"
                srcSet="/images/home/desktop/image-earphones-yx1.jpg"
              />

              <source
                media="(min-width: 768px)"
                srcSet="/images/home/mobile/image-earphones-yx1.jpg"
              />

              <source srcSet="/images/home/mobile/image-earphones-yx1.jpg" />
              {/* eslint-disable-next-line */}
              <img
                src="/images/home/mobile/image-earphones-yx1.jpg"
                alt="yx1-earphones"
                loading="lazy"
              />
            </picture>
          </div>
        </FadeInOnScroll>
        <FadeInOnScroll
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        >
          <div className="yx1_text">
            <h2>YX1 Earphones</h2>
            <div className="yx1_button">
              <Link href="/earphones/yx1-earphones" passHref>
                <button className="button_secondary">
                  <a>See Product</a>
                </button>
              </Link>
            </div>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
export default YX1Earphones;
