import React from "react";
import Image from "next/image";
// import style from './'

export default function BlogCard() {
  return (
    <div className={``}>
      <div className="bannerSection relative">
        <Image />
        <div className="textData">
          <div className="logoFlex">
            <Image />
            <span>Article</span>
          </div>
          <h3>START PROP TRADING IN MIAMI TO SEIZE GLOBAL OPPORTUNITIES</h3>
        </div>
      </div>

      <div className="contentData">
        <p className="readTime">Read Time: 3 min</p>

        <h3>START PROP TRADING IN MIAMI TO SEIZE GLOBAL OPPORTUNITIES</h3>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque possimus mollitia porro cupiditate. Facere fugiat corporis ipsa doloribus, ad ab, ullam ea, quae suscipit cumque magnam ipsum eum adipisci inventore.
        </p>
      </div>
    </div>
  );
}
