import React from 'react';
import PropTypes from 'prop-types';

const jwtDecode = require('jwt-decode');

const DisplayImage = (props) => {
  const { images } = props;
  return (
    <div className="row">

      {images.map((Obj, i) => (
        <div key={i} className="col s3">
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


const Team = (props) => {
  const { socket } = props;
  socket.emit('checkUser', jwtDecode(localStorage.getItem('jwtToken')).user);
  const developersArray = [
    { name: 'Anuj Sharma', url: 'AnujSharma.jpg' },
    { name: 'Kartik Yadav', url: 'KartikYadav.jpg' },
    { name: 'Avinash Bharti', url: 'AvinashBharti.jpg' },
    { name: 'Aryan Kaul', url: 'AryanKaul.jpg' },
    { name: 'Anshul Malik', url: 'AnshulMalik.jpg' },
  ];
  const architectArray1 = [
    { name: 'Sushant Adla', url: 'SushantAdla.jpg' },
    { name: 'Devayan Mishra', url: 'DevayanMishra.jpg' },
    { name: 'Prakhar Maheshwari', url: 'PrakharMaheshwari.jpg' },
    { name: 'Prashant Kumar', url: 'PrashantKumar.jpg' },
  ];

  const architectArray3 = [
    { name: 'Rajan Nagpal', url: 'RajanNagpal.jpg' },
    { name: 'Saqib Kamal', url: 'SaqibKamal.jpg' },
    { name: 'Saurabh Nandedkar', url: 'SaurabhNandedkar.jpg' },
    { name: 'Shubhankar', url: 'Shubhankar.jpg' },
  ];

  const architectArray2 = [
    { name: 'Tanvi Singla', url: 'TanviSingla.jpg' },
    { name: 'Vedant Nepal', url: 'VedantNepal.jpg' },
    { name: 'Abhinav Mishra', url: 'AbhinavMishra.jpg' },
  ];

  return (
    <div>
      <div className="row center">
        <div className="col s12">
          <h3>
	        Meet the team behind Electric Pulp
          </h3>
        </div>
        <div className="row">
          <h5 style={{ marginBottom: '50px' }}>
        Developers
          </h5>
          <DisplayImage images={developersArray} />
          <h5 style={{ marginBottom: '50px' }}>
        Architects
          </h5>
          <DisplayImage images={architectArray1} />
          <DisplayImage images={architectArray3} />
          <DisplayImage images={architectArray2} />
        </div>
      </div>

    </div>
  );
};

DisplayImage.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Team;
