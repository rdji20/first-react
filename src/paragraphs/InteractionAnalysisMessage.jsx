import React from "react";

export default () => {
  return (
    <p>
      I knew from the beginning that I needed a map chart of Lillard’s shots to
      see his development in a playoff environment so I needed to choose
      Portland’s best season with Lillard (2019-19) when they knocked OKC with
      the famous Lillard shot. I needed to compare his shots with someone who
      played well that same season and that is why I chose James Harden from the
      Nets (He was with the Rockets that season). In the visualization I thought
      on using triangles for Harden and circles for LIllard instead of using
      color to differentiate between them; but since I wanted to show also
      spatial relationship between the shots, I realized that having another
      shape would confuse the viewer on where exactly that shot was shot in
      relations with the other data points. Choosing what to do was not really
      hard because I understood what I wanted to know about this data: Where
      Lillard shoots the most shots, what type of shot Lillard makes in some
      area of the court, how it is compared with Harden, volume of shots made vs
      attempted, etc. I also wanted to make the user feel the liberty of
      toggling between showing both players or just Lillard shots; as well as
      clustering the shots by quarter to see when that player is more reliable.
      I also had to make a formula to fit the data in my basketball court svg by
      converting ft and meters to pixels, as well as creating an svg which I
      know that is scaled to the real nba half court.
      <br />
      <br />
      Since I want these assignments to be part of my personal portfolio I chose
      to work alone and in the beginning it was hard to visualize when to use
      React app.js and when to use my index.js page to add event listeners but
      in the end I realized that whenever the interaction is directly with each
      data set (Harden and Lillard shots) I needed to do my work in React; and
      when I needed to generalize, I could use my index.js page to add event
      listeners in vanilla js. I probably took between 20 to 35 people hours in
      making this interactive data vis. I think that what took me most time was
      to debug cascading problems, because I was working in many different
      files.
    </p>
  );
};
