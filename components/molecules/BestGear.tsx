import FadeInOnScroll from "./FadeInOnScroll";

function BestGear() {
  return (
    <>
      <FadeInOnScroll>
        <div className="best_gear">
          <div className="wrapper">
            <div className="best-gear_content">
              <div className="best-gear_picture">
                <picture>
                  <source
                    media="(min-width: 1000px)"
                    srcSet="/images/shared/desktop/image-best-gear.jpg"
                  />
                  <source
                    media="(min-width: 768px)"
                    srcSet="/images/shared/tablet/image-best-gear.jpg"
                  />
                  <source srcSet="/images/shared/mobile/image-best-gear.jpg" />
                  {/* eslint-disable-next-line */}
                  <img
                    src="/images/shared/mobile/image-best-gear.jpg"
                    alt="man listening to music with headphones"
                  />
                </picture>
              </div>
              <div className="best-gear_text">
                <h2>
                  Bringing you the <span>best</span> audio gear
                </h2>
                <p>
                  Located at the heart of New York City, Audiophile is the
                  premier store for high end headphones, earphones, speakers,
                  and audio accessories. We have a large showroom and luxury
                  demonstration rooms available for you to browse and experience
                  a wide range of our products. Stop by our store to meet some
                  of the fantastic people who make Audiophile the best place to
                  buy your portable audio equipment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </FadeInOnScroll>
    </>
  );
}
export default BestGear;
