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
            className={Obj.small ? "master-img" : "team-img"}
            src={`images/team/${Obj.url}`}
            alt="team-pic"
            height="200"
          />
          <p>
            {Obj.name}
          </p>
        </div>
      ))}

    </div>
  );
};

const developersArray = [
  { name: 'Anuj Sharma', url: 'AnujSharma.jpg' },
  { name: 'Kartik Yadav', url: 'KartikYadav.jpg' },
  { name: 'Anshul Malik (The Great)', url: 'AnshulMalik.jpg' },
];
const architectArray1 = [
  { name: 'Vedant Nepal', url: 'VedantNepal.jpg' },
  { name: 'Tanvi Singhal', url: 'TanviSingla.jpg' },
  { name: 'Prashant Kumar', url: 'PrashantKumar.jpg' },
];

const architectArray3 = [
  { name: 'Rajan Nagpal', url: 'RajanNagpal.jpg' },
  { name: 'Saqib Kamal', url: 'SaqibKamal.jpg' },
  { name: 'Shubhankar Prasad', url: 'Shubhankar.jpg' },
];

const architectArray2 = [
  { name: 'Sushant Adlakha', url: 'SushantAdla.jpg' ,small: true},
  { name: 'Prakhar Maheshwari', url: 'PrakharMaheshwari.jpg', small: true},
];

const architectArray4 = [
  { name: 'Saurabh Nandedkar', url: 'SaurabhNandedkar.jpg' },
  { name: 'Abhimanyu Singh', url: 'AbhimanyuSingh.jpg' },
  { name: 'Yaseen Gouse Samudri', url: 'YaseenGouseSamudri.jpg' },
];

const architectArray5 = [
  { name: 'Hemant Pandey', url: 'IMG_20190211_160435_885.jpg' },
  { name: 'Ajay Arya', url: 'IMG_20190214_153118.jpg' },
  { name: 'Saran', url: 'IMG_5996.jpg' },
];


const Team = () => (
  <div>
    <div className="row center">
      <div className="col s12">
        <h3>
        Meet the team behind ObscurA
        </h3>
      </div>
      <div className="row fade">
        <h5 style={{ marginBottom: '50px' }}>
      Developers
        </h5>
        <DisplayImage images={developersArray} />
        <h5 style={{ marginBottom: '50px' }}>
      Elders
        </h5>
        <DisplayImage images={architectArray1} />
        <DisplayImage images={architectArray3} />
        <h5 style={{ marginBottom: '50px' }}>
      Masters
        </h5>
        <DisplayImage images={architectArray2} />
        <h5 style={{ marginBottom: '50px' }}>
      Apprentices
        </h5>
        <DisplayImage images={architectArray4} />
        <DisplayImage images={architectArray5} />
      </div>
    </div>

  </div>
);

DisplayImage.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Team;
