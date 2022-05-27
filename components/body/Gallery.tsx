import YX1Earphones from "../molecules/YX1Earphones"
import ZX7Speakers from "../molecules/ZX7Speakers"
import ZX9speakers from "../molecules/ZX9Speakers"

function Gallery() {
  return (
    <section className="gallery">
        <div className="wrapper">
            <ZX9speakers />
            <ZX7Speakers />
            <YX1Earphones />
        </div>
    </section>
  )
}
export default Gallery