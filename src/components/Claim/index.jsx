import React, { useState, useEffect, useRef } from 'react';

const Claim = () => {
  const wordArray = ['Memorable', 'Custom', 'Powerful', 'Unique'];
  const [currWord, setCurrWord] = useState(wordArray[0]);
	const [isActive, setIsActive] = useState(true);
	const index = useRef(0);
	useEffect(() => {
		let interval = null;
    interval = setInterval(() => {
      index.current++;
      setCurrWord(wordArray[index.current]);
      if (index.current === wordArray.length - 1) {
        index.current = 0
      }
    }, 1000);
		return () => clearInterval(interval);
	});
  return (
    <section className="h-100" id="claim">
      <div className="row gx-0 h-100 align-items-center">
        <div className="col-10 offset-2 col-md-5 offset-md-7 text-uppercase">
          <div className="row">
            <div className="col">
              <h1 className="hero font-archivo">
                <span className="left">We create</span>
                <span className="swap right text-highlight">{currWord}</span>
                <span className="right">metaverse</span>
                <span className="left">experiences</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Claim;
