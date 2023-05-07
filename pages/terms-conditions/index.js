import React from "react";
import styles from "./style.module.css";
import Accordian from "../../components/Accordian/Accordian";
import Link from "next/link";
function index() {
  const items = [
    {
      title: "ACCESS AND USE OF THE WEBSITE",
      content: (
        <p>
          1.1 You may access the contents of the WEBSITE, products, service or
          feature in accordance with the following terms and conditions. You
          undertake to comply with these terms and conditions and all laws,
          rules and regulations applicable to your use of the WEBSITE.
          <br />
          <br />
          1.2 You undertake and warrant that any information provided by you to
          Baazi is correct and valid. In case of any wrong information/
          impersonation/ furnishing of wrong information, you shall be liable
          for consequences and you shall indemnify Baazi against any such loss,
          damage, consequences, which may have to be faced by Baazi due to such
          breach. In case it is found that the information provided is false,
          Baazi may deny access to the WEBSITE immediately without prejudice to
          any of the terms envisaged under these terms and conditions, Baazi may
          also initiate any such actions against you as it may deem proper.
          <br />
          <br />
          1.3 If you are accessing any website or webpage through this website
          then your access and use of the said website/webpage will be governed
          by the terms of use and other obligations as mentioned or provided in
          any manner whatsoever on that website.
          <br />
          <br />
          1.4 You have read and understood the privacy policy of our Company,
          details of which is available at privacy policy and agree with the
          same, in entirety. The said privacy policy forms part of the Terms of
          Use.
        </p>
      ),
    },
    {
      title: "CHANGES",
      content: (
        <p>
          2.1. We reserve the rights to change or discontinue any or all of the
          Service Offerings or change or remove functionality of any or all of
          the Service Offerings from time to time and that shall not be
          construed breach of any contract or term, whatsoever.
        </p>
      ),
    },
    {
      title: "UNLAWFUL AND / OR PROHIBITED USE OF THE WEBSITE",
      content: (
        <p>
          3.1 As a condition of your use of the WEBSITE, you shall not use the
          WEBSITE for any purpose(s) that is unlawful, illegal or is prohibited
          by the Terms of Use. You shall not use the WEBSITE in any manner that
          could damage, disable, overburden, or impair any Baazi server, or the
          network(s) connected to any Baazi server, or interfere with any other
          party&apos;s use and enjoyment of any services associated with the
          WEBSITE. You shall not attempt to gain unauthorized access to any
          section of the WEBSITE, other accounts, computer systems or networks
          connected to any Baazi server or to any of the services associated
          with the WEBSITE, through hacking, cracking, password or login details
          mining or by any other means. You shall not obtain or attempt to
          obtain any materials or information about and / or related to the
          Company, through any means not intentionally made available through
          the WEBSITE.
        </p>
      ),
    },
    {
      title: "PROPRIETARY RIGHTS",
      content: (
        <p>
          4.1 Baazi Games Private Limited owns all rights, titles and interest
          in and to the Service Offerings, and all related technology and
          intellectual property rights. Subject to the terms of these terms and
          conditions, we grant you a limited, revocable, non-exclusive,
          non-sub-licensable, non-transferrable license to access and use the
          Services solely in accordance with these terms and conditions; You
          obtain no rights under these terms and conditions from us, our
          affiliates to the Service Offerings, including in any related
          intellectual property rights.
          <br />
          <br />
          4.2 License Restrictions. You shall use the WEBSITE in the manner as
          provided for in these terms and conditions. You shall not use the
          WEBSITE for any purpose other than as expressly permitted by these
          terms and conditions. You will not attempt to (a) modify, distribute,
          alter, tamper with, repair, or otherwise create derivative works of
          any Content in the WEBSITE, products, services or features, (b)
          reverse engineer, copy, adopt, disassemble, or decompile the WEBSITE,
          its UX/ UI code, products, services or features or any part thereof,
          or apply any other process or procedure to derive the source code of
          any software included in the WEBSITE, products, services or features,
          (c) resell or sub-license the WEBSITE, products, services or features.
          You will not misrepresent or embellish the relationship between us and
          you (including by expressing or implying that we support, sponsor,
          endorse, or contribute to you or your business endeavors).
          <br />
          <br />
          4.3 Suggestions. If you provide any Suggestions to us or our
          affiliates, we and our affiliates will be entitled to use the
          Suggestions without restriction. You hereby irrevocably assign to us
          all right, title, and interest in and to the Suggestions and agree to
          provide us any assistance we require to document, perfect, and
          maintain our rights in the Suggestions.
        </p>
      ),
    },
    {
      title: "INDEMNIFICATION",
      content: (
        <p>
          5.1 General. You will defend, indemnify, and hold harmless us, our
          affiliates and each of our/their respective employees, officers,
          directors, and representatives from and against any Losses arising out
          of or relating to any third-party claim concerning: (a) your use of
          the WEBSITE, products, services or features; (b) breach of these terms
          and conditions or violation of applicable law by you; You will be
          liable to reimburse us for reasonable attorneys&apos; fees, as well as
          our employees&apos; and contractors&apos; time and materials spent
          responding to any third party notices or other compulsory legal order
          or process associated with third party claims described in (a) through
          (b) to the tune of loss/damages incurred.
        </p>
      ),
    },
    {
      title: "DISCLAIMERS AND LIMITATIONS OF LIABILITY",
      content: (
        <p>
          This website is provided to you “as is” and “as available”, without
          warranty of any kind, either expressed or implied, including, without
          limitation, any implied warranties of merchantability, fitness for a
          particular purpose, and non-infringement. Baazi does not warrant that
          this website will meet your requirements or achieve a particular
          result, or that your use of this website will be uninterrupted or
          error-free. If your use of this website or the material contained on
          this website results in your need to service or replace any property,
          material, equipment, data, or other item, then Baazi will not be
          liable for those costs. Without limiting the generality of the
          foregoing sentences, Baazi will not be liable for any direct,
          incidental, consequential, indirect, or punitive damages arising out
          of your use of this website. The disclaimers and limitations contained
          in this paragraph are a material part of our agreement to provide this
          website to you.
        </p>
      ),
    },
    {
      title: "MODIFICATIONS TO THESE TERMS AND CONDITIONS",
      content: (
        <p>
          We may modify these Terms and Conditions (including any Policies) at
          any time by posting a revised version on the WEBSITE; By continuing to
          use the WEBSITE after the effective date of any modifications to these
          Terms and Conditions, you agree to be bound by the modified terms. It
          is your responsibility to check the WEBSITE regularly for
          modifications to these Terms and Conditions. These terms and
          conditions were modified last on the date mention at the end of these
          Terms and Conditions.
        </p>
      ),
    },
    {
      title: "MISCELLANEOUS",
      content: (
        <p>
          8.1 Force Majeure. We and our affiliates will not be liable for any
          delay or failure to perform any obligation under these Terms and
          Conditions where the delay or failure results from any cause beyond
          our reasonable control, including acts of God, labor disputes or other
          industrial disturbances, electrical or power outages, utilities or
          other telecommunications failures, earthquake, storms or other
          elements of nature, blockages, embargoes, riots, acts or orders of
          government, acts of terrorism, or war.
          <br />
          <br />
          8.2 Governing Law. The laws of India, without reference to conflict of
          law rules, govern these Terms and Conditions and any dispute of any
          sort that might arise between you and us.
          <br />
          <br />
          8.3 Disputes. Any dispute or claim relating in any way to your use of
          the WEBSITE, or to any products sold or services provided by Baazi
          shall be referred to and finally determined by an expedited
          arbitration in accordance with the WIPO Expedited Arbitration Rules.
          The arbitral tribunal shall consist of a sole arbitrator, duly
          appointed by Baazi. The place of arbitration shall be New Delhi. The
          language to be used in the arbitral proceedings shall be English. The
          dispute, controversy or claim shall be decided in accordance with the
          law of India. The arbitration award shall be final and binding on both
          parties. 8.4 Compliance. You shall comply with all applicable laws,
          rules and regulations.
          <br />
          <br />
          8.5 Language. All communications and notices made or given pursuant to
          this Terms and Conditions must be in the English language. If we
          provide a translation of the English language version of this Terms
          and Conditions, the English language version of the Terms and
          Conditions will control if there is any conflict.
          <br />
          <br />
          8.6 Confidentiality and Publicity. You will take all reasonable
          measures to avoid disclosure, dissemination or unauthorized use of
          Baazi Confidential Information, including, at a minimum, those
          measures you take to protect your own confidential information of a
          similar nature. You will not issue any press release or make any other
          public communication with respect to these Terms and Conditions or
          your use of the Service Offered by Baazi.
          <br />
          <br /> 8.7 Feedback. (a) We welcome your input regarding our Policy
          and any comments on the Services we provide to you. You may send us
          your comments and responses by post to enquiries at C-2 Jangpura
          Extension, New Delhi. 8.8 No Third-Party Beneficiaries. Except as set
          forth in these Terms and Conditions, these Terms and Conditions do not
          create any third-party beneficiary rights in any individual or entity.{" "}
          <br />
          <br /> 8.9 No Waivers. The failure by us to enforce any provision of
          these Terms and Conditions will not constitute a present or future
          waiver of such provision nor limit our right to enforce such provision
          at a later time. All waivers by us must be in writing to be effective.
          <br />
          <br />
          8.10 Severability. If any portion of these Terms and Conditions are
          held to be invalid or unenforceable, the remaining portions of the
          Terms and Conditions will remain in full force and effect. Any invalid
          or unenforceable portions will be interpreted to effect and intent of
          the original portion. If such construction is not possible, the
          invalid or unenforceable portion will be severed from these Terms and
          Conditions but the rest of the Terms and Conditions will remain in
          full force and effect.{" "}
        </p>
      ),
    },
    {
      title: "THIRD PARTY CONTENT",
      content: (
        <p>
          The WEBSITE may provide information of third parties, including
          articles, analyst reports, news reports, tools to facilitate
          calculation, company information and data about financial markets,
          including any regulatory authority and other financial markets and
          other data from external sources (the “Third Party Content”). You
          acknowledge and agree that the Third-Party Content is not created or
          endorsed by Baazi. The provision of Third-Party Content is for general
          informational purposes only and does not constitute a recommendation
          or solicitation to purchase or sell any securities or shares or to
          make any other type of investment or investment decision. In addition,
          the Third-Party Content is not intended to provide tax, legal or
          investment advice. You acknowledge that the Third-Party Content
          provided to you is obtained from sources believed to be reliable, but
          that no guarantees are made by Baazi or the providers of the
          Third-Party Content as to its accuracy, completeness, timeliness.
          <br />
          <br />
          By using any Third Party Content or link, you may leave this WEBSITE
          and be directed to an external WEBSITE, or to a WEBSITE maintained by
          an entity other than Baazi. If You decide to visit any such site, you
          do so at your own risk and it is your responsibility to take all
          protective measures to guard against viruses or any other destructive
          elements. Baazi makes no warranty or representation regarding, and
          does not endorse, any linked Website(s) or the information appearing
          thereon or any of the products or services described thereon. Links do
          not imply that Baazi or this WEBSITE sponsors, endorses, is affiliated
          or associated with, or is legally authorized to use any trademark,
          trade name, logo or copyright symbol displayed in or accessible
          through the links, or that any linked site is authorized to use any
          trademark, trade name, logo or copyright symbol of Baazi or any of its
          affiliates or subsidiaries. <br />
          <br />
          You hereby expressly acknowledge and agree that the linked sites may
          or may not be under the control of Baazi and Baazi is not responsible
          for the contents of any linked site or any link contained in a linked
          site, or any changes or updates to such sites. Baazi is not
          responsible for webcasting or any other form of transmission received
          from any linked Website.{" "}
        </p>
      ),
    },
  ];
  return (
    <>
      <div className="aboutusleftlinks">
        <Link href="/terms-conditions" className="active">
          Terms &amp; Conditions
        </Link>
      </div>
      <div className="mainwraper">
        <div className="container">
          <div className="innerwraper">
            <div className="aboutus-content clearfix">
              <div className="comman-head mb-5">
                <h4 className="heading-3 darkcolor mb-3">
                  <span>The fine print</span>
                </h4>
                <h2 className="heading-1 ">
                  <span className="darkcolor">Terms &amp; </span>
                  <span className="bluecolor">Conditions</span>
                </h2>
                <div className="spltext">
                  <p>
                    We play games, but not with you. Let’s get straight to the
                    point.
                  </p>
                </div>
              </div>
            </div>
            <div className="csr-group-list">
              <div className="csr-group  mb-4">
                <div className="row">
                  <div className="col-md-6 mb-4 col-csr">
                    <img
                      src="https://baazigames.com/wp-content/uploads/2021/03/TnC.jpg"
                      alt="Baazi Games"
                      className="w-100 h-auto rounded-2"
                    />
                  </div>
                  <div className="col-md-6 col-csr2">
                    <p>
                      BY CONTINUING USAGE OF THIS WEBSITE / MOBILE APPLICATION
                      (“WEBSITE”), YOU ARE CONSENTING TO BE BOUND BY THE TERMS
                      AND CONDITIONS OF USAGE OF THIS WEBSITE AND THE TECHNOLOGY
                      PLATFORM PROVIDED ON THE WEBSITE FOR MEETING THE BUSINESS
                      REQUIREMENTS (COLLECTIVELY REFERRED TO AS “THE WEBSITE”).
                      IF YOU FIND ANY OF THESE TERMS AND CONDITIONS
                      UNACCEPTABLE, DO NOT CONTINUE BROWSING THIS WEBSITE. YOUR
                      CONTINUED USAGE OF THE WEBSITE SHALL OPERATE AS LEGALLY
                      ENFORCEABLE BINDING CONTRACT BETWEEN YOU AND THE COMPANY,
                      MOONSHINE TECHNOLOGY PRIVATE LIMITED.
                    </p>
                  </div>

                  <div className="col-md-12 mt-2">
                    <h5 className="mb-3">TERMS AND CONDITIONS:</h5>
                    <p>
                      This WEBSITE Terms and Conditions contains the terms and
                      conditions that govern your access to and use of the
                      WEBSITE (as defined below) and is an agreement between
                      MOONSHINE TECHNOLOGY PRIVATE LIMITED (“Baazi,” “we,” “us,”
                      or “our”) and you or the entity you represent (“you” or
                      “your”). This Agreement takes effect when you access the
                      WEBSITE. These terms and conditions are an electronic
                      record, duly published on the WEBSITE, in terms of
                      Information Technology Act, 2000 (“IT Act”) and rules
                      thereunder as applicable and also the provisions
                      pertaining to electronic records in various statutes in
                      India as amended from time to time.
                    </p>
                    <p>
                      You represent and warrant to us that you are competent and
                      possess legal capacity to enter into a Contract (i.e. you
                      have attained at least 18 years of age, you have capacity
                      to enter into agreements as per The Indian Contract Act,
                      1872).
                    </p>
                  </div>
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
