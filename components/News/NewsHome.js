import React from "react";
import { NewsData } from "../../NewsData";
import Link from "next/link";
export default function NewsHome() {
  return (
    <>
      <section className="mainwraper">
        <div className="container">
          <div className="comman-head mb-5">
            <h4 className="heading-3 darkcolor mb-3">
              <span>News & Media</span>
            </h4>
            <h2 className="heading-1 mb-3">
              <span className="darkcolor">Baazi Games </span>
              <span className="bluecolor">in News & Media</span>
            </h2>
          </div>
          <div className="newsmedia row">
            {NewsData.slice(0, 3).map((item) => (
              <div className="pocomn col-md-4" key={item.id}>
                <div className="featureimage">
                  <a href={item.url} target="_blank">
                    <picture>
                    <source srcSet={item.img} type="image/jpg" />
                    <img src={item.img} alt="image" />
                    </picture>
                  </a>
                </div>
                <div className="post-content">
                  <a href={item.url} target="_blank">
                    <h4>{item.title}</h4>
                  </a>
                  <div className="artby">
                    <span>{item.Source}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center my-5 pb-3">
            <Link href="/news" className="commanbutton buttonbg">
              more news
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
