import React from 'react'
import { Link } from 'react-router-dom';
import Cccovenas from './Cccovenas';
import Ccovenas from './Cccovenas';
import Covenas1 from './Covenas1';
import Covenas2 from './Covenas2';
import Covenas3 from './Covenas3';

const Navigation = () => {
  return (
    <div>
        <Link to="/cccovenas">
            <figure>
                <Cccovenas />
                <figcaption>Coveñas1</figcaption>
            </figure>
        </Link>
        <Link to="/ccovenas">
            <figure>
              <Ccovenas />
              <figcaption>Coveñas2</figcaption>
            </figure>
        </Link>
        <Link to="/covenas1">
            <figure>
              <Covenas1 />
              <figcaption>Coveñas3</figcaption>
            </figure>
        </Link>
        <Link to="/covenas2">
            <figure>
              <Covenas2 />
              <figcaption>Coveñas4</figcaption>
            </figure>
        </Link>
        <Link to="/covenas3">
            <figure>
              <Covenas3 />
              <figcaption>Coveñas5</figcaption>
            </figure>
        </Link>
    </div>
  )
}

export default Navigation