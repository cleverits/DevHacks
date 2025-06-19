export default function Footer() {
  return (
    <footer className="Footer">
      <div className="Footer_Block">
        <div className="Footer_block1">
          <h3>Auto Polishing</h3>
          <p>
            Բարի գալուստ Վանաձորի Դետալինգ կենտրոն: Մենք առաջարկում ենք Մեքենայի
            ամբողջական փայլեցում, ինտերիերի խորը մաքրում, կերամիկապատում ինչպես
            նաև անհատական ապակիների և լուսարձակների փայլեցում։
          </p>
          <span>🕒 Երկուշաբթի-Կիրակի՝ 24/7</span>
        </div>

        <div className="Footer_block2">
          <h3>ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐ</h3>
          <p>Դետեյլինգ լվացում</p>
          <p>Ձայնամեկուսացում</p>
          <p>Անտիքրոմ</p>
          <p>Փայլեցում</p>
          <p>Թաղանթապատում</p>
        </div>

        <div className="Footer_block3">
          <h3>ԿՈՆՏԱԿՏՆԵՐ</h3>
          <div>
            <img
              src={`${
                import.meta.env.BASE_URL
              }PolirovkaNkar/icons8-location-100.png`}
              alt=""
            />
            <span>Վանաձոր</span>
          </div>
          <div>
            <img
              src={`${
                import.meta.env.BASE_URL
              }PolirovkaNkar/icons8-telephone-100.png`}
              alt=""
            />
            <span> +(374) 94-52-88-52</span>
          </div>
          <div>
            <img
              src={`${
                import.meta.env.BASE_URL
              }PolirovkaNkar/icons8-email-100.png`}
              alt=""
            />
            <span>autopolishing@gmail.com</span>
          </div>
        </div>

        <div className="Footer_block4">
          <h3>Հետևեք մեզ</h3>
          <a
            href="https://www.instagram.com/_auto_detailing_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={`${
                import.meta.env.BASE_URL
              }PolirovkaNkar/icons8-instagram-150.png`}
              alt="Instagram"
            />
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=61556186294309"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={`${
                import.meta.env.BASE_URL
              }PolirovkaNkar/icons8-facebook-150.png`}
              alt="Facebook"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
