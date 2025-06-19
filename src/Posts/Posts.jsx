import Footer from "../Footers/Footer";
import Footer2 from "../Footers/Footer2";

const videoSources = [
  "IMG_4507.mp4",
  "IMG_4508.mp4",
  "IMG_4509.mp4",
  "IMG_4510.mp4",
  "IMG_4511.mp4",
  "IMG_4512.mp4",
  "IMG_4641.mp4",
  "IMG_4646.mp4",
  "IMG_4647.mp4",
  "IMG_4648.mp4",
  "IMG_4649.mp4",
  "IMG_4784.mp4",
  "IMG_4786.mp4",
  "IMG_4787.mp4",
  "IMG_4788.mp4",
  "IMG_4789.mp4",
  "IMG_4790.mp4",
  "IMG_4791.mp4",
  "IMG_4887.mp4",
];

export default function Posts() {
  return (
    <>
      <section className="Posts">
        <div className="Posts_Container">
          {videoSources.map((fileName, index) => (
            <video key={index} controls width="600" preload="metadata">
              <source src={`/PolirovkaNkar/${fileName}`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ))}
        </div>
      </section>

      <Footer />
      <Footer2 />
    </>
  );
}
