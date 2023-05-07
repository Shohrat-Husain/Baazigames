import React from "react";
import { NewsData } from "../../NewsData";
import Link from "next/link";
export default function NewsHome() {
  return (
    <>
      <section className="mainwraper">
        <div class="container">
          <div class="comman-head mb-5">
            <h4 class="heading-3 darkcolor mb-3">
              <span>News & Media</span>
            </h4>
            <h2 class="heading-1 mb-3">
              <span class="darkcolor">Baazi Games </span>
              <span class="bluecolor">in News & Media</span>
            </h2>
          </div>
          <div class="newsmedia row">
            {NewsData.slice(0, 3).map((item) => (
              <div class="pocomn col-md-4" key={item.id}>
                <div class="featureimage">
                  <a href={item.url} target="_blank">
                    <img src={item.img} alt="image" />
                  </a>
                </div>
                <div class="post-content">
                  <a href={item.url} target="_blank">
                    <h4>{item.title}</h4>
                  </a>
                  <div class="artby">
                    <span>{item.Source}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p class="text-center my-5 pb-3">
            <Link href="/news" className="commanbutton buttonbg">
              more news
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
