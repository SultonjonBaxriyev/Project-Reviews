import React, { useState } from "react";
const Reviews = (props) => {
  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = props.info[index];
  const nextBtn = () => {
    if(props.info.length-1 === index) {
        setIndex(0)
    } else {
        setIndex(index+1)
    }
  };
  const prevBtn = () => {
    if(index === 0) {
        setIndex(props.info.length-1)
    } else {
        setIndex(index-1)
    }
  };
  const surprise = ()=> {
    setIndex(Math.round(Math.random()*3))
  }
  return (
    <article className="review" id={id}>
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <i className="fa-solid fa-quote-right"></i>
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="text">{text}</p>
      <div className="button-container">
        <button onClick={prevBtn} className="prev-btn">
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <button onClick={nextBtn} className="next-btn">
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
      <button onClick={surprise} className="random-btn">Surprise me</button>
    </article>
  );
};
export default Reviews;
