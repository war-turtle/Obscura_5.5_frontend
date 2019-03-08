import React from 'react';
import PropTypes from 'prop-types';

const DisplayImage = (props) => {
  const { images } = props;
  const className = `col s${Math.floor(12 / images.length)}`;
  return (
    <div className="row">

      {images.map((Obj, i) => (
        <div key={i} className={className}>
          <img
            className="team-img"
            src={`images/team/${Obj.url}`}
            alt="team-pic"
          />
          <p>
            {Obj.name}
          </p>
        </div>
      ))}

    </div>
  );
};

const architectArray1 = [
  { name: 'Mithun', url: 'IMG-20190113-WA0042.jpg' },
  { name: 'Prasanna', url: 'IMG-20190113-WA0043.jpg' },
  { name: 'Pusharak', url: 'Pusharak.jpg' },
];

const architectArray0 = [
  { name: 'Chirantan', url: '12087904_1047786278566471_6169075697809371159_o.jpg' },
  { name: 'Arijit', url: 'Arijit.jpg' },
  { name: 'Pranjal', url: 'IMG-20190113-WA0041.jpg' },
];

const architectArray2 = [
  { name: 'Utkarsh', url: 'Utkarsh Kumar.jpg' },
  { name: 'Vatsal', url: 'Vatsal Garg.jpg' },
  { name: 'Srijan', url: 'Srijan Saxena.jpg' },
];

const Hall = () => (
  <div>
    <div className="row center">
      <div className="col s12">
        <h3>
        Hall Of Fame
        </h3>
      </div>
      <div className="row fade">
        <DisplayImage images={architectArray0} />
        <DisplayImage images={architectArray1} />
        <DisplayImage images={architectArray2} />
      </div>
    </div>

  </div>
);

DisplayImage.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Hall;
