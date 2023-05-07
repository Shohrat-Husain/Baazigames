import React from 'react'

export default function Slider3(props) {
  return (
    <>
    <div class="item">
               <div class="our-famous-imggroup clearfix" data-aos="fade-up"     data-aos-offset="200"     data-aos-easing="ease-in-sine">
                  <img src={props.img} class="img-fluid d-none d-md-block  w-100 h-auto bigevenyimg"  alt="Baazi Games"  />
				  <img src={props.img2} class="img-fluid d-block d-md-none   bigevenyimg"  alt="Baazi Games"  />
                  <div  class="our-famous-overlap-content">
                     <div class="comman-head">
                        <h4 class="heading-3 darkcolor mb-3 "><span>{props.title}</span></h4>
                        <h2 class="heading-1 mb-3"><span class="gradients">{props.verticle} </span>
                        </h2>
                        <p>{props.content}</p>
                        <a href={props.url} target="_blank" class="commanbutton buttonbg">{props.btn_title}</a>
                     </div>
                  </div>
               </div>
            </div>
    </>
  )
}
