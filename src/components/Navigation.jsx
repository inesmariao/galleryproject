import React from 'react'
import { Link } from 'react-router-dom';
import Covenas1 from './Covenas1';
import Covenas2 from './Covenas2';
import Covenas4 from './Covenas4';
import Covenas5 from './Covenas5';
import Covenas6 from './Covenas6';
import Covenas8 from './Covenas8';

const Navigation = () => {
  return (
    <div className="container mt-4 father">
        <Link to="/covenas1" className="links">
            <figure className="image-size">
              <Covenas1 />
              <figcaption>Coveñas3</figcaption>
            </figure>
        </Link>
        <Link to="/covenas2" className="links">
            <figure className="image-size">
              <Covenas2 />
              <figcaption>Coveñas4</figcaption>
            </figure>
        </Link>
        <Link to="/covenas4" className="links">
            <figure className="image-size">
              <Covenas4 />
              <figcaption>Coveñas4</figcaption>
            </figure>
        </Link>
        <Link to="/covenas5" className="links">
            <figure className="image-size">
              <Covenas5 />
              <figcaption>Coveñas5</figcaption>
            </figure>
        </Link>
        <Link to="/covenas6" className="links">
            <figure className="image-size">
              <Covenas6 />
              <figcaption>Coveñas6</figcaption>
            </figure>
        </Link>
        <Link to="/covenas8" className="links">
            <figure className="image-size">
              <Covenas8 />
              <figcaption>Coveñas8</figcaption>
            </figure>
        </Link>
    </div>
  )
}

export default Navigation