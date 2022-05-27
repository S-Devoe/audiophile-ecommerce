import Link from "next/link"
import FadeInOnScroll from "./FadeInOnScroll"

function ZX7Speakers(): JSX.Element {
  return (
    <FadeInOnScroll>
      <section className="zx7">
        <div className="zx7_container">
          <div className="zx7_text">
            <h2>ZX7 speaker</h2>
            <Link href="/speakers/zx7-speaker" passHref>
              <button className="button_secondary">
                <a>See Product</a>
              </button>
            </Link>
          </div>
          <div className="zx7_picture">
            <picture>
              <source
                media="(min-width: 1200px)"
                srcSet="/images/home/desktop/image-speaker-zx7.jpg"
              />
              <source
                media="(min-width: 768px)"
                srcSet="/images/home/tablet/image-speaker-zx7.jpg"
              />
              <source srcSet="/images/home/mobile/image-speaker-zx7.jpg" />
              {/* eslint-disable-next-line */}
              <img src="/images/home/mobile/image-speaker-zx7.jpg" alt="zx7" loading="lazy"/>
            </picture>
          </div>
        </div>
      </section>
    </FadeInOnScroll>
  );
}
export default ZX7Speakers