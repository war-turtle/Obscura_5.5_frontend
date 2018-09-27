import React from 'react';

const DisplayImage = (props) => {
  const { images } = props;
  return (
    <div>
      {images.map(Obj => (
        <div className="col s12 m3">
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


const Team = () => {
  const imagesArray = [
    { name: 'Name', url: '1.jpg' },
    { name: 'Name', url: '1.jpg' },
    { name: 'Name', url: '1.jpg' },
    { name: 'Name', url: '1.jpg' },
    { name: 'Name', url: '1.jpg' },
    { name: 'Name', url: '1.jpg' },
  ];
  return (
    <div className="row center">
      <div className="col s12">
        <h5>
					Meet the team behind Electric Pulp
        </h5>
        <div className="row imageDisplay">
          <DisplayImage images={imagesArray} />
        </div>
      </div>
    </div>
  );
};

export default Team;
