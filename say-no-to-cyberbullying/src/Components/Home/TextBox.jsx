import React from 'react'

export default function TextBox({Main, Description, img}) {
  return (
      <div className="TextBox">
          <div className="center title-text">
              <h1>{Main}</h1>
          </div>
          <div className="center">
              <img src={img} alt="" />
          </div>
          <div className="center description-text">
              <p>{Description}</p>
          </div>
      </div>
  );
}
