import React from 'react';

import './InfoStyles.css';

export default function Info() {
  return(
    <section className="info">

      <article className="info-content">
          <h3>
            Magna tempus sed amet
            aliquam veroeros
          </h3>
        <div className="info-content-text">
          <p>
            Morbi interdum mollis sapien.
            Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet,
            lectus arcu.
          </p>
        </div>
        <div className="info-content-button">
          <button>
            More
          </button>
        </div>
      </article>

      <article className="info-content">
          <h3>
            Interdum lorem pulvinar
            adipiscing vitae
          </h3>
        <div className="info-content-text">
          <p>
            Morbi interdum mollis sapien.
            Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet,
            lectus arcu.
          </p>
        </div>
        <div className="info-content-button">
          <button>
            More
          </button>
        </div>
      </article>

      <article className="info-content">
          <h3>
            Libero purus magna sapien
            sed ullamcorper
          </h3>
        <div className="info-content-text">
          <p>
            Morbi interdum mollis sapien.
            Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet,
            lectus arcu.
          </p>
        </div>
        <div className="info-content-button">
          <button>
            More
          </button>
        </div>
      </article>
      
    </section>
  );
}