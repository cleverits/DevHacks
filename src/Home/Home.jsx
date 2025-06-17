import Footer from "../Footers/Footer";
import Footer2 from "../Footers/Footer2";

export default function Home() {
  return (
    <>
      <section className="container">
        <h1>Edmon</h1>
      </section>
      <section className="container2">
        <div>
          <h2>
            Մեքենաների Փայլեցում &nbsp; &nbsp;| &nbsp; &nbsp;
            <span>Ինտերիերը Մաքուր</span>
          </h2>
        </div>
      </section>
      <section className="container3">
        <div className="block1">
          <img src="/PolirovkaNkar/AdobeStock_367018612-1024x683.jpeg" alt="" />
        </div>
        <div className="block2">
          <img src="/PolirovkaNkar/istockphoto-1415036627-612x612.jpg" alt="" />
        </div>
      </section>
      <section className="container3_1">
        <div className="block3">
          <img src="/PolirovkaNkar/car-polish-vs-scratch-remover.jpg" alt="" />
        </div>
        <div className="block4">
          <img src="/PolirovkaNkar/Car-polishing-scaled-1.jpg" alt="" />
        </div>
      </section>
      <Footer />
      <Footer2 />
    </>
  );
}
