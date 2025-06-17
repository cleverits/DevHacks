import Footer from "../Footers/Footer";
import Footer2 from "../Footers/Footer2";

const videoSources = [
  "IMG_4507.MOV",
  "IMG_4508.MOV",
  "IMG_4509.MOV",
  "IMG_4510.MOV",
  "IMG_4511.MOV",
  "IMG_4512.MOV",
  "IMG_4641.MOV",
  "IMG_4646.MOV",
  "IMG_4647.MOV",
  "IMG_4648.MOV",
  "IMG_4649.MOV",
  "IMG_4784.MOV",
  "IMG_4786.MOV",
  "IMG_4787.MOV",
  "IMG_4788.MOV",
  "IMG_4789.MOV",
  "IMG_4790.MOV",
  "IMG_4791.MOV",
  "IMG_4887.MOV",
];

export default function Posts() {
  return (
    <>
      <section className="Posts">
        <div className="Posts_Container">
          {videoSources.map((fileName, index) => (
            <video key={index} controls>
              <source src={`/PolirovkaNkar/${fileName}`} type="video/mp4" />
            </video>
          ))}
        </div>
      </section>

      <Footer />
      <Footer2 />
    </>
  );
}
