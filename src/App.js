import React from 'react';
import Review from './Review';


function App() {
  return <main>
    <section className="container">

      <div className="title">
        <h2>our reviews</h2>
        <div className="underline"></div>
      </div>
      <Review />
    </section>
  </main>;
}

export default App;
/*
Got error:
TypeError: Object is not iterable (cannot read property Symbol(Symbol.iterator))
This was due to incorrect syntax for variable
Instead of writing like this:
const { name, job, image, text } = people[index];

It was written in square bracket, which is incorrect
const [] name, job, image, text ] = people[index];
*/