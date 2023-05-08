import React from "react";
import styles from "./style.module.css";
import Accordian from "../../components/Accordian/Accordian";
import Link from "next/link";
function index() {
  const items = [
    {
      title: "PERSONAL DATA WE COLLECT",
      content: (
        <p>
          a). In general, you can browse the Website without providing us with
          any of personal information about yourself. You don&apos;t have to
          create an account to access and use some of the Baazi&apos;s
          information and services, such as viewing public Baazi profiles or
          public listings. However even when browsing, Baazi may receive some
          personal information from you, like the device you&apos;re using and
          your IP address;
          <br />
          <br />
          b). If you choose to use our services from the gaming portals of Baazi
          brands, including inter alia PokerBaazi, RummyBaazi, BalleBaazi, we
          may require you to provide contact and identity information, billing
          information, and other personal information as indicated on the forms
          throughout the Website. Under some circumstances we may require some
          additional financial information. Where possible, we indicate which
          fields are required and which are optional. You always have the option
          to not provide information by choosing not to use a particular service
          or feature
          <br />
          <br />
          c). If you send us personal correspondence, such as emails or letters,
          or if other users or third parties send us correspondence about your
          activities or postings on the Website, we may collect such information
          into a file specific to you; d). From time-to-time we may provide you
          the opportunity to participate in contests or surveys on or through
          the Website. If you choose to participate, we will request certain
          personal information, including your email address, from you.
          Participation in these surveys or contests is completely voluntary and
          you therefore have a choice whether or not to disclose this
          information. The requested information typically includes contact
          information and demographic information. We will not share the
          personal information you provide through a contest or survey with
          other third parties unless we give you prior notice and choice;
          <br />
          <br />
          e). If you choose to participate in any program, you will be asked to
          provide your login credentials for your carrier accounts as part of
          the enrollment process. Baazi collects this information for the sole
          purpose of uploading your rates to the Baazi Platform. All information
          provided is protected in accordance with this Privacy Policy.
        </p>
      ),
    },
    {
      title: "LOG FILES",
      content: (
        <p>
          a). We gather certain information automatically and store it in log
          files. This information includes internet protocol (IP) addresses,
          browser type, internet service provider (ISP), referring/exit pages,
          operating system, date/time stamp, and clickstream data. We use this
          information to analyze trends, to administer the Website, to track
          users&apos; movements around the Website and to gather demographic
          information about our user base as a whole.
          <br />
          <br />
          b). We track trends in users&apos; usage and volume statistics to create a
          more efficient and usable Website, and to determine areas of the
          Website that could be improved to enhance the user experience.
          <br />
          <br />
          c). Log files are used on the Website, and in any link to the Website
          from an email.
        </p>
      ),
    },
    {
      title: "TRACKING TECHNOLOGIES",
      content: (
        <p>
          Technologies such as: cookies, crawlers and similar technologies are
          used by Baazi and our marketing partners, affiliates, and customer
          support and fraud prevention service providers. These technologies are
          used in analyzing trends, administering the Website, tracking
          users&apos; movements around the Website and to gather demographic
          information about our user base as a whole. We may receive reports
          based on the use of these technologies by these companies on an
          individual as well as aggregated basis.
        </p>
      ),
    },
    {
      title: "COOKIES INFORMATION",
      content: (
        <p>
          a). When you visit the Website, we may send one or more cookies –
          small files – to your computer or other device, which may enable us or
          others to uniquely identify your browser. A cookie is a file
          containing an identifier (a string of letters and numbers) that is
          sent by a web browser requests a page from the server. This enables
          the web server to identify and track the web browser.
          <br />
          <br />
          b). Baazi may use both session cookies and persistent cookies. A
          persistent cookie remains after you close your browser. Persistent
          cookies may be used by your browser. Persistent cookies may be used
          your browser on subsequent visits to the site. Persistent cookies are
          temporary and typically disappear after your browser. You may be able
          to rest your web browser to refuse all cookies or to indicate when a
          cookie is being sent. However, some features of the Website or Service
          may not function properly if the ability to accept cookies is
          disabled.
          <br />
          <br />
          c). We use the session cookies to keep track of you whilst you
          navigate the Website to prevent frauds and increase website security.
          We use the persistent cookies to enable our Site to recognize you
          visit and keep track of your preference in relation to your usage of
          our website.
          <br />
          <br />
          d). We may use Google Analytics to analyze the usage of this Website.
          Google Analytics generates statistical and other information about
          website use by means of cookies, which are stored on users&apos;
          computers. The information generated relating to our Website is used
          to create reports about the use of the Website. Google will store this
          information and Google&apos;s privacy policy is available at:
        </p>
      ),
    },
    {
      title: "BEHAVIORAL TARGETING/RE-TARGETING",
      content: (
        <div>
          <h4>GOOGLE&apos;S PRIVACY POLICY</h4>
          <p>
            We partner with third parties to manage our advertising on other
            Websites. Our third party partners may use technologies such as
            cookies and similar technologies to gather information about your
            activities on this Website and other Websites in order to provide
            you advertising based upon your browsing activities and interests.
          </p>
        </div>
      ),
    },
    {
      title: "HOW WE USE YOUR PERSONAL DATA",
      content: (
        <div>
          <p>
            We may collect and use your data principally for the following
            purposes:
          </p>
          <ul>
            <li>
              Provide services and features that are most likely to meet your
              needs and facilitate the services you request
            </li>
            <li>
              Customize your experience and the content, products, and services
              offered to you;
            </li>
            <li>
              Verify the accuracy of your name, address, and other information;
            </li>
            <li>
              Bill you for your use of our services and collect fees owed;
            </li>
            <li>
              Provide support for your transactions, products, and services you
              use;
            </li>
            <li> Assist you to resolve disputes;</li>
            <li> Comply with legal requirements;</li>
            <li>
              Inform you about online and offline offers, products, services,
              and updates;
            </li>
            <li>
              Provide targeted advertising, including the use of re-targeting
              technology;
            </li>
            <li> Measure consumer interest in our products and services;</li>
            <li>
              Detect and protect us against error, fraud, and other criminal
              activity and enforce our User Agreement;
            </li>
            <li>
              Look across multiple users to identify problems or resolve
              disputes and identify users using multiple usernames or aliases;
            </li>
            <li>
              Compare and review your personal information for errors,
              omissions, and accuracy;
            </li>
            <li>
              Conduct internal research on our users&apos; demographics,
              interest, and behavior to better understand, protect, and serve
              you and our community;
            </li>
            <li>
              Improve our marketing and promotional efforts, analyze Website
              usage, improve our content and product offerings, and customize
              the Website&apos;s content, layout, and services;
            </li>
            <li>
              Collect personal information on behalf of our payment processors
              in order to meet compliance obligations, such as Know Your
              Customer.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "INFORMATION SHARING AND DISCLOSURE",
      content: (
        <div>
          <p>
            As a matter of policy, we do not sell, rent or share any of your
            personal information, including your email address, to third parties
            for their marketing purposes without your explicit consent. The
            profile you create on the Website will be publicly accessible unless
            otherwise indicated. You may change the privacy settings of your
            profile through your account portal. However, the following
            describes some of the ways that your personal information may be
            disclosed in the normal scope of business to provide our services.
          </p>
          <p>
            External Service Providers: There could be separate services offered
            by third parties that we refer to as external service providers that
            may be complementary to your use of the Website. If you choose to
            use these separate services, disclose information to the external
            service providers, and/or grant them permission to collect
            information about you, then their use of your information is
            governed by their privacy policy. We may disclose your personal
            information, including your email address, to external service
            providers, unless you expressly request us not to disclose. To
            prevent our disclosure of your personal information to an external
            service provider, you can decline such consent or simply not use
            their services. Because we do not control the privacy practices of
            these third parties, you should evaluate their practices before
            deciding to use their services.
          </p>
          <p>
            Internal Service Providers for Our Operations: We may use third
            parties that we refer to as internal service providers to facilitate
            or outsource one or more aspects of the business (sometimes
            utilizing framing techniques), product and service operations that
            we provide to you and therefore we may provide some of your personal
            information, including your email address, directly to these
            internal service providers. Any sensitive information that is
            transmitted to internal service providers involved in any payment
            processing functions will be encrypted or tokenized. These internal
            service providers&apos; are subject to confidentiality agreements with us
            and other legal restrictions that prohibit their use of the
            information we provide them for any other purpose except to
            facilitate the specific outsourced Baazi related operation, unless
            you have explicitly agreed or given your prior permission to them
            for additional uses. If you provide additional information to an
            internal service provider directly, then their use of your personal
            information is governed by their applicable privacy policy.
          </p>
        </div>
      ),
    },
    {
      title: "LEGAL REQUESTS",
      content: (
        <div>
          <p>
            a). Baazi cooperates with law enforcement inquiries, as well as
            other third parties to enforce laws, such as: intellectual property
            rights, fraud and other rights, to help protect you and the Baazi
            community from bad actors. Therefore, in response to a verified
            request by law enforcement or other government officials relating to
            a criminal investigation or alleged illegal activity, we can (and
            you authorize us to) disclose your name, city, state, telephone
            number, email address, user history, fraud complaints, and quoting
            and listing history without a notice, summon, warrant or any similar
            request, order or direction, issued by any court or governmental
            authority. Without limiting the above, in an effort to respect your
            privacy and our ability to keep the community free from bad actors,
            we will not otherwise disclose your personal information to law
            enforcement or other government officials without a notice, summon,
            warrant or any similar request, order or direction, of or from a
            court or a governmental authority, except when we believe in good
            faith that the disclosure of information is necessary to: prevent
            imminent physical harm or financial loss; or report suspected
            illegal activity.
          </p>
          <p>
            b). Due to the existing regulatory environment, we cannot ensure
            that all of your private communications and other personal
            information will never be disclosed in ways not otherwise described
            in this Privacy Policy. By way of example (without limiting the
            foregoing), we may be forced to disclose personal information,
            including your email address, to the government or third parties
            under certain circumstances, third parties may unlawfully intercept
            or access transmissions or private communications, or users may
            abuse or misuse your personal information that they collect from the
            Website. Therefore, although we use industry standard practices to
            protect your privacy, we do not promise, and you should not expect,
            that your personal information or private communications will always
            remain private. See “Security Section” below.
          </p>
          <p>
            c). We collect your location-based information for the purpose of
            locating a service provider / truck or place that you may be
            searching for in your area. We will only share this information with
            our mapping provider for the sole purpose of providing you this
            service.
          </p>
        </div>
      ),
    },
    {
      title: "COMMUNICATIONS FROM THE WEBSITE",
      content: (
        <div>
          <p>
            a). We will occasionally send you information on products, services,
            special deals, and promotions, as well as a newsletter. You are
            signed up for these emails at registration and you may unsubscribe
            at any time by going to your account tab and opting out of the
            emails, or by following the directions to unsubscribe in the email.
          </p>
          <p>
            b). Out of respect for your privacy, we provide you a way to
            unsubscribe from each of these communications when we ask for it. If
            you no longer wish to receive our newsletter and promotional
            communications, you may opt-out of receiving them by following the
            instructions included in each newsletter or communication or by
            emailing us at support@pokerbaazi.com.
          </p>
          <p>
            c). You will be notified when your personal information is collected
            by any third party that is not our agent/service provider, so you
            can make an informed choice as to whether or not to share your
            information with that party.
          </p>
          <p>
            d). We will send you strictly service-related announcements on rare
            occasions when it is necessary to do so. For instance, if our
            service is temporarily suspended for maintenance, we might send you
            an email. Generally, you may not opt-out of these communications,
            which are not promotional in nature. If you do not wish to receive
            them, you have the option to deactivate your account.
          </p>
          <p>
            e). Based upon the personal information you provide us, we will send
            you a welcoming email to verify your email address, username and
            password. We will also communicate with you in response to your
            inquiries, to provide the services you request, and to manage your
            account. Email is the primary means of communication between members
            doing transactions on the Website and you must be able to receive
            this information to use Baazi properly.
          </p>
        </div>
      ),
    },
    {
      title: "LINKS TO OTHER WEBSITES",
      content: (
        <div>
          <p>
            This Website contains links to other Websites that are not owned or
            controlled by Baazi. Please be aware that we are not responsible for
            the privacy practices of such other Websites. We encourage you to be
            aware when you leave our Website and to read the privacy policies of
            each and every Web Website that collects personal information. This
            privacy policy applies only to information collected by this Web
            Website.
          </p>
          <p>
            Some portions of the Baazi platform implement Google Maps mapping
            services, including Google Maps API(s). Your use of Google Maps is
            subject to Google&apos;s Terms of Service and Google&apos;s Privacy
            Policy, as may be amended by Google from time to time.
          </p>
        </div>
      ),
    },
    {
      title: "TESTIMONIALS",
      content: (
        <div>
          <p>
            We display personal testimonials of satisfied customers on our
            Website in addition to other endorsements. We may post your
            testimonial along with your first name and last initial. If you wish
            to update or delete your testimonial, you can contact us at{" "}
            <a href="mailto:support@pokerbaazi.com">support@pokerbaazi.com.</a>.
          </p>
        </div>
      ),
    },
    {
      title: "SOCIAL MEDIA CONNECTIONS & FEATURES",
      content: (
        <div>
          <p>
            a). Baazi may allow users to access Facebook Connect to interact
            with friends and to share on Facebook through wall and friends&apos; news
            feeds. If you are already logged into Baazi and Facebook, when you
            click on “Connect with Facebook” you will be prompted to merge your
            profiles. If you are already logged into Baazi but not logged into
            Facebook, when you click on “Connect with Facebook” you will be
            prompted to enter your Facebook credentials or to “Sign up for
            Facebook.” By proceeding, you are allowing the Baazi Website to
            access your information and you are agreeing to the Facebook Terms
            of Use in your use of the Baazi Website.
          </p>
          <p>
            b). Conversely, if you are not currently registered as a Baazi user
            and you click on “Sign in using Facebook” you will first be asked to
            enter your Facebook credentials and then be given the option to
            register and join Baazi. Once you register on the Baazi Website and
            Connect with Facebook, you will be able to automatically post recent
            activity back to Facebook. You have the option to disable Facebook
            Connect at any time by logging into your profile and clicking on “My
            Facebook Profile.” Further, you can edit privacy settings for the
            reviews that appear on Facebook or disconnect this service by
            visiting the Facebook Application Settings page.
          </p>
          <p>
            c). Our Website includes social media features, such as “Follow Us”
            on various social media platforms. These features may collect
            information such as your IP address and which page you are visiting
            on our Website, and they may set a cookie to enable the feature to
            function properly. Social media features and widgets are either
            hosted by a third party or hosted directly on our Website. Your
            interactions with these features are governed by the privacy policy
            of the company providing them.
          </p>
        </div>
      ),
    },
    {
      title: "ACCESS TO PERSONAL INFORMATION",
      content: (
        <div>
          <p>
            a). Upon request we will provide you with information about whether
            we hold, or process on behalf of a third party, any of your personal
            information. You may request this information by contacting
            support@pokerbaazi.com. We will respond to your request within 30
            days.
          </p>
          <p>
            b). We will retain your information for as long as you are accessing
            our website or are using our services, if any, provided through the
            Website. We will retain and use your information as necessary to
            comply with our legal obligations, resolve disputes, and enforce our
            agreements.
          </p>
        </div>
      ),
    },
    {
      title: "SECURITY",
      content: (
        <div>
          <p>
            a). The security of your personal information is important to us.
            When you enter sensitive information (such as credit card number) on
            our registration or order forms, we encrypt that information using
            secure socket layer technology (SSL).
          </p>
          <p>
            b). We follow generally accepted industry standards to protect the
            personal information, including your email address, submitted to us,
            both during transmission and once we receive it. No method of
            transmission over the Internet, or method of electronic storage, is
            100% secure, however. Therefore, while we strive to use commercially
            acceptable means to protect your personal information, we cannot
            guarantee its absolute security.
          </p>
        </div>
      ),
    },
    {
      title: "INTERNATIONAL PRIVACY LAWS",
      content: (
        <div>
          <p>
            If you are visiting the Website outside of India, please be aware
            that you are sending information to India where our servers are
            located. That information may then be transferred within India or
            back out of India to other countries outside of your country of
            residence. These countries (including India) may not have data
            protection laws as comprehensive or protective as those in your
            country of residence; however, our collection, storage, and
            protection of your Personal Information will be governed by this
            Privacy Policy, in accordance with the applicable laws in India.
          </p>
        </div>
      ),
    },
    {
      title: "BUSINESS TRANSITIONS",
      content: (
        <div>
          <p>
            In the event Baazi goes through a business transition, such as a
            merger, acquisition by another company, or sale of all or a portion
            of its , your personal information, including your email address,
            will likely be among the transferred. You will be notified via email
            of any such change in ownership or control of your personal
            information, which may be after the said transfer of the .
          </p>
        </div>
      ),
    },
    {
      title: "CHANGES IN THIS PRIVACY POLICY",
      content: (
        <div>
          <p>
            If we decide to change our privacy policy, we will post those
            changes to this privacy policy on our Website and other places we
            deem appropriate so that you are aware of what information we
            collect, how we use it, and under what circumstances, if any, we
            disclose it.
          </p>
        </div>
      ),
    },
    {
      title: "CONTACT US",
      content: (
        <div>
          <p>
            If you have any questions or suggestions regarding our privacy
            policy or to exercise your rights regarding your personal
            information, please contact us at support@pokerbaazi.com or by mail
            at the address below.
          </p>
        </div>
      ),
    },
  ];
  return (
    <>
      <div className="aboutusleftlinks">
        <Link href="/privacy-policy" className="active">
          Privacy Policy
        </Link>
      </div>
      <div className="mainwraper">
        <div className="container">
          <div className="innerwraper">
            <div className="aboutus-content clearfix">
              <div className="comman-head mb-5">
                <h4 className="heading-3 darkcolor mb-3">
                  <span>No closed doors</span>
                </h4>
                <h2 className="heading-1 ">
                  <span className="darkcolor">Privacy </span>
                  <span className="bluecolor">Policy</span>
                </h2>
                <div className="spltext">
                  <p>
                    We believe in an open book policy when it comes to your
                    privacy.
                  </p>
                </div>
              </div>
            </div>
            <div className="csr-group-list">
              <div className="csr-group  mb-4">
                <div className="row">
                  <div className="col-md-6 mb-3 col-csr">
                    <picture>
                    <source srcSet="https://baazigames.com/wp-content/uploads/2021/03/Privacy.jpg" type="image/jpg" />
                    <img
                      src="https://baazigames.com/wp-content/uploads/2021/03/Privacy.jpg"
                      alt="baazigames"
                      className="w-100 h-auto rounded-2"
                    />
                    </picture>
                  </div>
                  <div className="col-md-6 col-csr2">
                    <p>
                      Your privacy is very important to all of us at Baazi. We
                      have established this privacy policy (“Privacy Policy”) to
                      explain to you how your personal information, if any, is
                      protected, collected and used. It also describes your
                      choices regarding use, access and correction of your
                      personal information. Personal information is information
                      about you that is personally identifiable such as your
                      name, address, phone number, and email address that is not
                      otherwise publicly available.
                    </p>
                    <p>
                      The privacy practices of this statement apply to our
                      services available through the website / mobile
                      application and/ or any other platform, under the branding
                      of Baazi (“Website”), which platform is owned and operated
                      by Moonshine Technology Private Limited, (“Baazi”, “we”,
                      “our”, “us”).
                    </p>
                  </div>
                </div>
                <div className="col-md-12">
                  <h5 className="mb-3"></h5>
                  <p>
                    Baazi is the controller of your Personal Data and
                    responsible for the collection, processing and disclosure of
                    your personal data as described in this Privacy Policy
                    unless expressly specified otherwise. By visiting this
                    Website, you agree to be bound by the terms and conditions
                    of this Privacy Policy and expressly consent to our use and
                    disclosure of your personal information in accordance with
                    this Privacy Policy. If you do not agree, please do not use
                    or access our Website. This Privacy Policy is incorporated
                    into and is subject to the terms of the Baazi Terms and
                    Conditions. We reserve the right to modify this Privacy
                    Policy at any time and hence please review it frequently.
                  </p>
                </div>
              </div>
            </div>
            {/* my accordian */}
            <Accordian items={items} />
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
