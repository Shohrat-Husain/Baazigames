import React, { useEffect, useRef } from "react";
import Scrollspy from "react-scrollspy";
import styles from "./style.module.css";

function index() {
  const sectionRefs = useRef([]);
  const linksRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.pageYOffset;
      const lastSection = sections[sections.length - 1];

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollPosition >= sectionTop - 100) {
          sectionRefs.current[i].scrollIntoView({ behavior: "smooth" });

          for (let j = 0; j < linksRefs.current.length; j++) {
            if (j === i) {
              linksRefs.current[j].classList.add("active");
            } else {
              linksRefs.current[j].classList.remove("active");
            }
          }
        }

        if (
          section === lastSection &&
          scrollPosition + window.innerHeight >=
            document.documentElement.scrollHeight
        ) {
          sectionRefs.current[i].scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = (indexs, event) => {
    event.preventDefault();
    sectionRefs.current[indexs].scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div className="aboutusleftlinks" style={{ position: "fixed" }}>
        <ul className={styles.about_ul}>
          {["About Us", "Team", "Gaming Innovation", "Technology Talks"].map(
            (section, indexs) => (
              <li key={indexs}>
                <a
                  onClick={() => handleLinkClick(indexs)}
                  ref={(el) => (linksRefs.current[indexs] = el)}
                >
                  {section}
                </a>
              </li>
            )
          )}
        </ul>
      </div>

      {/* <div style={{ height: "50px" }}></div> */}

      <div>
        <section
          ref={(el) => (sectionRefs.current[0] = el)}
          style={{ position: "sticky", top: "50px" }}
        >
          <div className="mainwraper aboutrpafft">
            <div className="container">
              <div className="innerwraper">
                <div className="aboutus-content clearfix">
                  <div className="about-thumb aligleft">
                    <picture>
                    <source srcSet="https://baazigames.com/wp-content/uploads/2023/02/Aboutus-V2.jpg" type="image/jpg" />
                    <img
                      src="https://baazigames.com/wp-content/uploads/2023/02/Aboutus-V2.jpg"
                      className="img-fluid w-100  h-auto"
                      alt="Baazi Games"
                    />
                    </picture>
                    <div className="overlapp"></div>
                  </div>
                  <div className="comman-head">
                    <h4 className="heading-3 darkcolor mb-3">
                      <span>About Us</span>
                    </h4>
                    <h2 className="heading-1 mb-3">
                      <span className="darkcolor">Baazi </span>
                      <span className="bluecolor">Games</span>
                    </h2>
                    <p>
                      Established in 2014, Baazi Games set out to give India a
                      flavour of online gaming by introducing a plethora of
                      indigenous apps. Combined with the reward of real money
                      skill-based games, it was a winning formula for all game
                      lovers. With scintillating, top of the line gaming
                      platforms across the board, it wasn’t long before
                      PokerBaazi, CardBaazi and BalleBaazi became household
                      names. Our player-centric brand value only helped us
                      deliver the best for our 12 million-plus users. Coupled
                      with market adaptation, innovative product offerings and a
                      trusted brand name, Baazi Games soon became the force to
                      reckon with and a technology giant. Here we are today with
                      a safe, secure and the most rewarding online gaming
                      network that’s homegrown and India’s very own!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div>
        <section
          ref={(el) => (sectionRefs.current[1] = el)}
          style={{ position: "sticky", top: "50px" }}
        >
          <div className="mainwraper aboutrpafft">
            <div className="container">
              <div className="innerwraper">
                <div className="aboutus-content clearfix">
                  <div className="ourteams-group">
                    <div className="row mb-4">
                      <div className="col-md-5 col-orders-1 mb-4">
                        <div className="about-thumb">
                          <picture>
                          <source srcSet="https://baazigames.com/wp-content/uploads/2021/10/website-images_0011_navkiran-min.jpg" type="image/jpg" />
                          <img
                            src="https://baazigames.com/wp-content/uploads/2021/10/website-images_0011_navkiran-min.jpg"
                            className="img-fluid w-100  h-auto"
                            alt="bg"
                          />
                          </picture>
                        </div>
                      </div>
                      <div className="col-md-7 col-orders-2 mb-4">
                        <div className="comman-head">
                          <h4 className="heading-3 darkcolor mb-3">
                            <span>Founder &amp; CEO, Baazi Games</span>
                          </h4>
                          <h2 className="heading-1 mb-4">
                            <span className="darkcolor">Navkiran </span>
                            <span className="bluecolor">Singh</span>
                          </h2>
                          <p>
                            Navkiran Singh founded Baazi Games in 2014 with his
                            entrepreneurial hammer to chisel India’s first
                            one-stop-shop online gaming platform. Being an avid
                            sportsman and explorer, Navkiran was introduced to
                            Poker in his yesteryears at Manipal University.
                            Envisioning it’s potential, Poker in India needed a
                            home-grown platform and Navkiran had just the skills
                            to get started: Poker and Engineering. He set out to
                            eliminate the social stigma associated with the
                            sport and bring to light the potential of new
                            skill-based professional sports in India. Leaving no
                            stone unturned, Navkiran added further games to the
                            Baazi portfolio that include Rummy and Fantasy
                            Sports. Singh is a true flagbearer of the
                            skill-based mind sport and stands tall with a
                            customer-centric, responsible gaming brand
                            that&apos;s all about giving back to the community.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="row mb-4">
                      <div className="col-md-5 col-orders-1 mb-4">
                        <div className="about-thumb">
                          <picture>
                          <source srcSet="https://baazigames.com/wp-content/uploads/2021/10/website-images_0007_Puneet-Singh-min.jpg" type="image/jpg" />
                          <img
                            src="https://baazigames.com/wp-content/uploads/2021/10/website-images_0007_Puneet-Singh-min.jpg"
                            className="img-fluid w-100  h-auto"
                            alt="bg"
                          />
                          </picture>
                        </div>
                      </div>
                      <div className="col-md-7 col-orders-2 mb-4">
                        <div className="comman-head">
                          <h4 className="heading-3 darkcolor mb-3">
                            <span>Co-Founder, Baazi Games </span>
                          </h4>
                          <h2 className="heading-1 mb-4">
                            <span className="darkcolor">Puneet </span>
                            <span className="bluecolor">Singh</span>
                          </h2>
                          <p>
                            The resoluteness of Puneet Singh has played a
                            pivotal role in the growth of the Real Money Games
                            (RMG) sector in India having worked closely
                            alongside institutions like the IAMAI, AIGF, TORF
                            &amp; FIFS. The avid opening batsman looks for
                            positions and plays at the right business
                            opportunities. Coupled with Puneet&apos;s
                            optimization strategies, Baazi Games certainly
                            pushed the boundaries and knocked this ball out of
                            the park.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="row mb-4">
                      <div className="col-md-5 col-orders-1 mb-4">
                        <div className="about-thumb">
                          <picture>
                          <source srcSet="https://baazigames.com/wp-content/uploads/2021/10/website-images_0008_Anirudh-Chaudhry-min.jpg" type="image/jpg" />
                          <img
                            src="https://baazigames.com/wp-content/uploads/2021/10/website-images_0008_Anirudh-Chaudhry-min.jpg"
                            className="img-fluid w-100  h-auto"
                            alt="bg"
                          />
                          </picture>
                        </div>
                      </div>
                      <div className="col-md-7 col-orders-2 mb-4">
                        <div className="comman-head">
                          <h4 className="heading-3 darkcolor mb-3">
                            <span>Co-Founder &amp; COO, Baazi Games </span>
                          </h4>
                          <h2 className="heading-1 mb-4">
                            <span className="darkcolor">Anirudh </span>
                            <span className="bluecolor">Chaudhry</span>
                          </h2>
                          <p>
                            The man with a plan, Anirudh Chaudhry works in
                            silence and lets the numbers make the noise. His
                            risk-assessing abilities and solid measures to
                            overcome any potential bouncers ensure that chasing
                            the target of becoming India&apos;s No.1 Online
                            Gaming network is smooth sailing for us.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="row mb-4">
                      <div className="col-md-5 col-orders-1 mb-4">
                        <div className="about-thumb">
                          <picture>
                          <source srcSet="https://baazigames.com/wp-content/uploads/2021/10/website-images_0010_Varun-Ganjoo-min.jpg" type="image/jpg" />
                          <img
                            src="https://baazigames.com/wp-content/uploads/2021/10/website-images_0010_Varun-Ganjoo-min.jpg"
                            className="img-fluid w-100  h-auto"
                            alt="bg"
                          />
                          </picture>
                        </div>
                      </div>
                      <div className="col-md-7 col-orders-2 mb-4">
                        <div className="comman-head">
                          <h4 className="heading-3 darkcolor mb-3">
                            <span>
                              Co-Founder &amp; Chief Marketing Officer, Baazi
                              Games{" "}
                            </span>
                          </h4>
                          <h2 className="heading-1 mb-4">
                            <span className="darkcolor">Varun </span>
                            <span className="bluecolor">Ganjoo</span>
                          </h2>
                          <p>
                            Varun Ganjoo, a civil engineer by qualification,
                            envisions building bridges between products and
                            players with a creative foundation that cements a
                            place in the heart of consumers. Today, the brand
                            stands tall with 7.5 million users across verticals.
                            Baazi Games seemed a far-fetched reality in the
                            nascent years of Varun&apos;s career. Ganjoo&apos;s
                            fiery spirit and passion for Poker meant he had to
                            be a part of the foundation stones that were being
                            laid by his fellow college friends for Baazi Games.
                            There was no looking back from there on as
                            Varun&apos;s creative eye has gone onto build some
                            of India&apos;s beloved online sporting spectacles.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="row mb-4">
                      <div className="col-md-5 col-orders-1 mb-4">
                        <div className="about-thumb">
                          <picture>
                          <source srcSet="https://baazigames.com/wp-content/uploads/2021/10/website-images_0009_Avneet-Rana-min.jpg" type="image/jpg" />
                          <img
                            src="https://baazigames.com/wp-content/uploads/2021/10/website-images_0009_Avneet-Rana-min.jpg"
                            className="img-fluid w-100  h-auto"
                            alt="bg"
                          />
                          </picture>
                        </div>
                      </div>
                      <div className="col-md-7 col-orders-2 mb-4">
                        <div className="comman-head">
                          <h4 className="heading-3 darkcolor mb-3">
                            <span>
                              Co-Founder &amp; Chief Technology Officer, Baazi
                              Games{" "}
                            </span>
                          </h4>
                          <h2 className="heading-1 mb-4">
                            <span className="darkcolor">Avneet </span>
                            <span className="bluecolor">Rana</span>
                          </h2>
                          <p>
                            From nine to five to something I can call mine. An
                            engineer by qualification, Avneet Rana started his
                            professional career at Tata Consultancy Services
                            (TCS) in 2012. Rana jumped off the corporate
                            bandwagon to join hands with his comrade Navikiran
                            Singh to finally put his tech skills to play in his
                            own home-turf. True to his talent and hard-working
                            spirit, Rana alongside the team rolled out
                            PokerBaazi 1.0, the first brainchild of Baazi Games.
                            Avneet holds great insights on the digital future of
                            virtual gaming in India and translates it with every
                            product that has made Baazi Games what it is today.{" "}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="row mb-4">
                      <div className="col-md-5 col-orders-1 mb-4">
                        <div className="about-thumb">
                          <picture>
                          <source srcSet="https://baazigames.com/wp-content/uploads/2021/10/website-images_0002_Saurabh-Chopra-min.jpg" type="image/jpg" />
                          <img
                            src="https://baazigames.com/wp-content/uploads/2021/10/website-images_0002_Saurabh-Chopra-min.jpg"
                            className="img-fluid w-100  h-auto"
                            alt="bg"
                          />
                          </picture>
                        </div>
                      </div>
                      <div className="col-md-7 col-orders-2 mb-4">
                        <div className="comman-head">
                          <h4 className="heading-3 darkcolor mb-3">
                            <span>Co-founder &amp; CEO, BalleBaazi </span>
                          </h4>
                          <h2 className="heading-1 mb-4">
                            <span className="darkcolor">Saurabh </span>
                            <span className="bluecolor">Chopra</span>
                          </h2>
                          <p>
                            Saurabh Chopra has been the CEO of BalleBaazi since
                            he started his stint with Baazi Games. A true blue
                            business analyst, strategist and a master blaster
                            with customer acquisition, Saurabh is pitch-perfect
                            for Brand BalleBaazi. His passion for sports and a
                            keen eye for marketing trends in the online gaming
                            space has him lead a team that bleeds blue.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="row mb-4">
                      <div className="col-md-5 col-orders-1 mb-4">
                        <div className="about-thumb">
                          <picture>
                          <source srcSet="https://baazigames.com/wp-content/uploads/2021/10/website-images_0003_Sunit-Warraich-min.jpg" type="image/jpg" />
                          <img
                            src="https://baazigames.com/wp-content/uploads/2021/10/website-images_0003_Sunit-Warraich-min.jpg"
                            className="img-fluid w-100  h-auto"
                            alt="bg"
                          />
                          </picture>
                        </div>
                      </div>
                      <div className="col-md-7 col-orders-2 mb-4">
                        <div className="comman-head">
                          <h4 className="heading-3 darkcolor mb-3">
                            <span>CEO, CardBaazi </span>
                          </h4>
                          <h2 className="heading-1 mb-4">
                            <span className="darkcolor">Sunit </span>
                            <span className="bluecolor">Warraich</span>
                          </h2>
                          <p>
                            A graduate in Economic Honours, Sunit joined the
                            Baazi family in 2016, heading the fraud detection
                            division and overseeing operations. In 2019, Sunit
                            was handed over the bat for Baazi Games&apos; newest
                            avatar, RummyBaazi. Profiling his customers, knowing
                            what makes them tick and keeping current trends in
                            mind, Sunit grew the brand to what stands at a 5
                            lakh user base today.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="row mb-4">
                      <div className="col-md-5 col-orders-1 mb-4">
                        <div className="about-thumb">
                          <picture>
                          <source srcSet="https://baazigames.com/wp-content/uploads/2021/10/website-images_0004_Sudeep-Godara-min.jpg" type="image/jpg" />
                          <img
                            src="https://baazigames.com/wp-content/uploads/2021/10/website-images_0004_Sudeep-Godara-min.jpg"
                            className="img-fluid w-100  h-auto"
                            alt="bg"
                          />
                          </picture>
                        </div>
                      </div>
                      <div className="col-md-7 col-orders-2 mb-4">
                        <div className="comman-head">
                          <h4 className="heading-3 darkcolor mb-3">
                            <span>Chief Strategy Officer, Baazi Games </span>
                          </h4>
                          <h2 className="heading-1 mb-4">
                            <span className="darkcolor">Sudeep </span>
                            <span className="bluecolor">Godara</span>
                          </h2>
                          <p>
                            Sudeep is a seasoned management professional in the
                            Real Money Gaming industry. Armed with applied
                            behaviour analysis, business analytics, business
                            development, and marketing strategy, Sudeep helps
                            drive the brand towards the vision of being India’s
                            go-to platform for all things online gaming.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="row mb-4">
                      <div className="col-md-5 col-orders-1 mb-4">
                        <div className="about-thumb">
                          <picture>
                          <source srcSet="https://baazigames.com/wp-content/uploads/2021/10/website-images_0005_Gaurav-Kapoor-min.jpg" type="image/jpg" />
                          <img
                            src="https://baazigames.com/wp-content/uploads/2021/10/website-images_0005_Gaurav-Kapoor-min.jpg"
                            className="img-fluid w-100  h-auto"
                            alt="bg"
                          />
                          </picture>
                        </div>
                      </div>
                      <div className="col-md-7 col-orders-2 mb-4">
                        <div className="comman-head">
                          <h4 className="heading-3 darkcolor mb-3">
                            <span>CFO, Baazi Games </span>
                          </h4>
                          <h2 className="heading-1 mb-4">
                            <span className="darkcolor">Gaurav </span>
                            <span className="bluecolor">Kapoor</span>
                          </h2>
                          <p>
                            A battle-hardened professional, Gaurav Kapoor has
                            played on different pitches before joining our core
                            team. From Compliance to Investors Relations and
                            then onto Fund Management, he is an all-rounder,
                            ever eager to fetch glory for Baazi Games with his
                            calming presence and never-say-never attitude.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="row mb-4">
                      <div className="col-md-5 col-orders-1 mb-4">
                        <div className="about-thumb">
                          <picture>
                          <source srcSet="https://baazigames.com/wp-content/uploads/2023/04/Pranay-Picture-opt.jpg" type="image/jpg" />
                          <img
                            src="https://baazigames.com/wp-content/uploads/2023/04/Pranay-Picture-opt.jpg"
                            className="img-fluid w-100  h-auto"
                            alt="bg"
                          />
                          </picture>
                        </div>
                      </div>
                      <div className="col-md-7 col-orders-2 mb-4">
                        <div className="comman-head">
                          <h4 className="heading-3 darkcolor mb-3">
                            <span>CHRO, Baazi Games </span>
                          </h4>
                          <h2 className="heading-1 mb-4">
                            <span className="darkcolor">Pranay </span>
                            <span className="bluecolor">Prakash</span>
                          </h2>
                          <p>
                            An XLRI-alumni, Pranay brings with him close to two
                            decades of experience in creating sustainable and
                            scalable HR delivery models to enable robust
                            business growth. His previous assignments have been
                            with organizations like Delhivery, Optum and
                            Reliance Retail, amongst others.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="row mb-4">
                      <div className="col-md-5 col-orders-1 mb-4">
                        <div className="about-thumb">
                          <picture>
                          <source srcSet="https://baazigames.com/wp-content/uploads/2021/10/website-images_0000_Parth-Sharma-min.jpg" type="image/jpg" />
                          <img
                            src="https://baazigames.com/wp-content/uploads/2021/10/website-images_0000_Parth-Sharma-min.jpg"
                            alt="bg"
                            className="img-fluid w-100  h-auto"
                          />
                          </picture>
                        </div>
                      </div>
                      <div className="col-md-7 col-orders-2 mb-4">
                        <div className="comman-head">
                          <h4 className="heading-3 darkcolor mb-3">
                            <span>COO, BalleBaazi</span>
                          </h4>
                          <h2 className="heading-1 mb-4">
                            <span className="darkcolor">Parth </span>
                            <span className="bluecolor">Sharma</span>
                          </h2>
                          <p>
                            Online Skill Gaming is the first industry of the
                            21st century fortunate enough to study &amp; observe
                            real-time user-generated content and Parth has
                            championed this as the CSO of BalleBaazi, the online
                            fantasy gaming offshoot of Baazi Games. He plays a
                            pivotal role in data analysis and drives
                            optimization in product development, marketing and
                            business strategies. Parth&apos;s corporate stint
                            with Credit Suisse as a senior analyst and his prior
                            role of ‘Fixed Income Market Analyst’ makes him just
                            the player that the Baazi Games team needs.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="row mb-4">
                      <div className="col-md-5 col-orders-1 mb-4">
                        <div className="about-thumb">
                          <picture>
                          <source srcSet="https://baazigames.com/wp-content/uploads/2021/10/website-images_0001_Puneet-Dua-min.jpg" type="image/jpg" />
                          <img
                            src="https://baazigames.com/wp-content/uploads/2021/10/website-images_0001_Puneet-Dua-min.jpg"
                            className="img-fluid w-100  h-auto"
                          />
                          </picture>
                        </div>
                      </div>
                      <div className="col-md-7 col-orders-2 mb-4">
                        <div className="comman-head">
                          <h4 className="heading-3 darkcolor mb-3">
                            <span>Chief Innovation Officer, BalleBaazi </span>
                          </h4>
                          <h2 className="heading-1 mb-4">
                            <span className="darkcolor">Puneet </span>
                            <span className="bluecolor">Dua</span>
                          </h2>
                          <p>
                            An incubator, innovator, marketer qualified from
                            Nottingham Trent University, Puneet Dua, fondly
                            known as Dua Ji, is always ready to stretch his
                            limits for the team. Since he has always been around
                            entrepreneurs in his family, who are credited with
                            grooming one of India&apos;s finest schools, Modern
                            Barakhamba, his natural entrepreneurial abilities
                            has empowered BalleBaazi to become a force to be
                            reckoned with in the fantasy sports arena. The
                            versatile professional makes planning and execution,
                            equally fun.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="row mb-4">
                      <div className="col-md-5 col-orders-1 mb-4">
                        <div className="about-thumb">
                          <picture>
                          <source srcSet="https://baazigames.com/wp-content/uploads/2023/04/Himank-Tripathi-opt.jpg" type="image/jpg" />
                          <img
                            src="https://baazigames.com/wp-content/uploads/2023/04/Himank-Tripathi-opt.jpg"
                            className="img-fluid w-100  h-auto"
                          />
                          </picture>
                        </div>
                      </div>
                      <div className="col-md-7 col-orders-2 mb-4">
                        <div className="comman-head">
                          <h4 className="heading-3 darkcolor mb-3">
                            <span>
                              Chief Communications Officer &amp; Spokesperson,
                              Baazi Games{" "}
                            </span>
                          </h4>
                          <h2 className="heading-1 mb-4">
                            <span className="darkcolor">Himank </span>
                            <span className="bluecolor">Tripathi</span>
                          </h2>
                          <p>
                            Himank leads and drives the overall communication
                            strategy for the company. Himank has over two
                            decades of experience in stakeholder engagement and
                            external communications across industries.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div>
        <section
          ref={(el) => (sectionRefs.current[2] = el)}
          style={{ position: "sticky", top: "50px" }}
        >
          <div className="mainwraper aboutrpafft">
            <div className="container">
              <div className="innerwraper">
                <div className="aboutus-content clearfix">
                  <div className="about-thumb aligright">
                    <picture>
                    <source srcSet="https://baazigames.com/wp-content/uploads/2021/03/gaming-innovation.jpg" type="image/jpg" />
                    <img
                      src="https://baazigames.com/wp-content/uploads/2021/03/gaming-innovation.jpg"
                      className="img-fluid w-100  h-auto"
                      alt="Baazi Games"
                    />
                    </picture>
                    <div className="overlapp"></div>
                  </div>
                  <div className="comman-head">
                    <h4 className="heading-3 darkcolor mb-3">
                      <span>Gaming Innovation</span>
                    </h4>
                    <h2 className="heading-1 mb-3">
                      <span className="darkcolor">What sets us</span>
                      <span className="bluecolor"> a part</span>
                    </h2>
                    <p>
                      We are in the business of games and bringing them to your
                      screens is what we do. We merge the power of game
                      popularity, innovation and technology to deliver a
                      scintillating online gaming experience that’s second to
                      none. Our nationwide platforms ensure you play alone but
                      game together, fostering a community of passionate gamers.{" "}
                    </p>
                    <p>
                      Gamers are not forgiving and we are constantly evolving to
                      stay woke. We stay ahead of the game with intuitive
                      features that pushes the game to the next level. With
                      creativity and technology at play, Baazi Games is all set
                      to revolutionize the way you play. Let the games begin.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div>
        <section
          ref={(el) => (sectionRefs.current[3] = el)}
          style={{ position: "sticky", top: "50px" }}
        >
          <div className="mainwraper aboutrpafft">
            <div className="container">
              <div className="innerwraper">
                <div className="aboutus-content clearfix">
                  <div className="about-thumb aligleft">
                    <picture>
                    <source srcSet="https://baazigames.com/wp-content/uploads/2021/03/tech_talk.jpg" type="image/jpg" />
                    <img
                      src="https://baazigames.com/wp-content/uploads/2021/03/tech_talk.jpg"
                      className="img-fluid w-100  h-auto"
                      alt="Baazi Tech Talks"
                    />
                    </picture>
                    <div className="overlapp"></div>
                  </div>
                  <div className="comman-head">
                    <h4 className="heading-3 darkcolor mb-3">
                      <span>Technology Talks</span>
                    </h4>
                    <h2 className="heading-1 mb-3">
                      <span className="darkcolor">Powered by </span>
                      <span className="bluecolor">Gaming</span>
                    </h2>
                    <p>
                      Baazi Games transformed Real Money Games to an organized
                      online environment that facilitated gameplay with ease.
                      The game engine that runs these platforms was built with
                      our native AI and ML, a first in the industry. Further
                      brought to life with enhanced UI/UX, Baazi Games ensured
                      the platform remained a seamless transition from it’s
                      offline avatar.{" "}
                    </p>
                    <p>
                      With the gaming community having versatile taste, Baazi
                      Games served up an à la carte menu of products to suit
                      every gamer’s appetite. With a player centric philosophy,
                      responsive games came as second nature. Keeping up with
                      the ever evolving gaming architecture, Baazi Games leaves
                      no stone unturned, ensuring the platforms adapt to the
                      latest stacks.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        a {
          display: block;
          margin-bottom: 10px;
          font-weight: bold;
          cursor: pointer;
          color: #8a8a8a;
        }

        .active {
          color: #0532b2;
        }

        @media (max-width: 768px) {
          div:first-of-type {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}

export default index;
