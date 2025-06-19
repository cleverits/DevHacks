import Footer from "../Footers/Footer";
import Footer2 from "../Footers/Footer2";

export default function Contact() {
  return (
    <>
      <div className="Contact1">
        <div className="Contact1_1">
          <div className="Contact1_1_1">
            <h4>Կապվեք մեզ հետ</h4>
            <h2>Կոնտակտներ</h2>
            <p>
              Մեզ մոտ մասնագիտացած են ավտոմեքենաների խնամքի և փայլեցման մեջ՝
              ապահովելով բարձրակարգ սպասարկում և որակյալ արդյունքներ: Գնահատում
              ենք ձեր հետաքրքրությունը և ցանկանում ենք տրամադրել անհրաժեշտ բոլոր
              տեղեկությունները մեր ծառայությունների, կիրառվող նյութերի և
              տեխնոլոգիաների մասին։ Մեր գլխավոր նպատակն է ձեր մեքենային
              վերադարձնել իր նախնական փայլը և ապահովել հուսալի պաշտպանություն
              արտաքին ազդեցություններից։ Աշխատում ենք որակյալ միջոցներով և
              ժամանակակից մեթոդներով՝ երաշխավորելով լավագույն արդյունքը։ Անկախ
              նրանից՝ ցանկանում եք վերականգնել մեքենայի լաքի շերտը, հեռացնել
              մանր քերծվածքները, թե պարզապես ավելացնել լրացուցիչ պաշտպանություն,
              մոտեցումը միշտ անհատական է, իսկ լուծումները՝ պրոֆեսիոնալ։
            </p>
          </div>
          <div className="Contact1_1_2">
            <h2 style={{ textTransform: "uppercase" }}>Գտնվելու վայրը</h2>
            <div>
              <img
                src={`${
                  import.meta.env.BASE_URL
                }PolirovkaNkar/icons8-location-100 (1).png`}
                alt=""
              />
              <p>Vanadzor</p>
            </div>
            <div>
              <img
                src={`${
                  import.meta.env.BASE_URL
                }PolirovkaNkar/icons8-telephone-100 (1).png`}
                alt=""
              />
              <p>+(374) 94-52-88-52</p>
            </div>
            <div>
              <img
                src={`${
                  import.meta.env.BASE_URL
                }PolirovkaNkar/icons8-email-96.png`}
                alt=""
              />
              <p>autopolishing@gmail.com</p>
            </div>
          </div>
          <div className="Contact1_1_3">
            <h2>ՄԵՆՔ ՍՈՑԻԱԼԱԿԱՆ ՑԱՆՑԵՐՈՒՄ</h2>
            <div>
              <a
                href="https://www.facebook.com/profile.php?id=61556186294309"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={`${
                    import.meta.env.BASE_URL
                  }PolirovkaNkar/free-icon-facebook-3670271.png`}
                  alt=""
                />
              </a>
              <a
                href="https://www.instagram.com/_auto_detailing_/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={`${
                    import.meta.env.BASE_URL
                  }PolirovkaNkar/free-icon-instagram-1384015 (1).png`}
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
        <div className="Contact1_2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.218761904883!2d44.4898045!3d40.8182431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abcfeb49781f9%3A0xabc1234567890!2sYour%20Location!5e0!3m2!1sen!2sus!4v1700000000000"
            width="680"
            height="610"
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <Footer />
      <Footer2 />
    </>
  );
}
