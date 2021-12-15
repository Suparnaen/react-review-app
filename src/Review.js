import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

/*
since we need to get one person per screen, so we will set state as index so that at one time we can 
access the people array
*/

const Review = () => {
  const [index, setIndex] = useState(0);
  //console.log(people);
  const { name, job, image, text } = people[index];

  const checkNumber = (number) => {
    if (number > people.length - 1) {//if num > last item in array
      return 0;
    }
    if (number < 0) {
      return people.length - 1; //return last item in array
    }
    return number;
  }

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);//in order to handle index out of bound error, implement checkNumber function
    })
  }
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    })
  }
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);// get random number in range of length of people array and round it
    //console.log(randomNumber)
    if (randomNumber === index) {
      randomNumber = index + 1; //this may increase length of index, hence use checknumber function to prevent overflow/underflow
    }
    setIndex(checkNumber(randomNumber));
  }

  return (
    <article className="review">
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>
        suprise me
      </button>
    </article>
  );
};

export default Review;


