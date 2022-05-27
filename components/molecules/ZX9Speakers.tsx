import Image from "next/image"
import Link from "next/link"
import FadeInOnScroll from "./FadeInOnScroll"

interface Text{
  srcSet: string
}

function ZX9speakers(){
  return (
    <FadeInOnScroll>
      <section className="zx9">
        <div className="zx9_container">
          <div className="zx9_picture">
            <picture>
              <source
                media="(min-width: 1200px)"
                srcSet="/images/home/desktop/image-speaker-zx9.png"
              />
              <source
                media="(min-width: 768px)"
                srcSet="/images/home/tablet/image-speaker-zx9.png"
              />
              <source srcSet="/images/home/mobile/image-speaker-zx9.png" />
              {/* eslint-disable-next-line */}
              <img
                src="/images/home/mobile/image-speaker-zx9.png"
                alt="zx9"
                loading="lazy"
              />
            </picture>
          </div>
          <div className="zx9_text">
            <h2>ZX9 Speaker</h2>
            <p>
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <Link href="/speakers/zx9-speaker" passHref>
              <a>
                <button className="button">see product</button>
              </a>
            </Link>
          </div>
        </div>
      </section>
    </FadeInOnScroll>
  );
}
export default ZX9speakers