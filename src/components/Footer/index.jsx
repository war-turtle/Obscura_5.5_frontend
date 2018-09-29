import React from 'react';

const Footer = () => (
  <footer
    className="page-footer white-text center"
    style={{
      position: 'fixed', backgroundColor: '#424242', zIndex: '2000', paddingTop: '10px',
    }}
  >
    <div className="row" style={{ margin: '0px' }}>
      <div className="col s12">
        <img src="http://obscuranitkkr.co.in/images/CNLOGO.jpg" alt="coding ninja logo" style={{ width: 'auto', height: '50px' }} />
      </div>
      <div style={{ position: 'absolute', bottom: '10px', right: '20px' }}>
        <b>
          GAWDS
        </b>
      </div>
    </div>
  </footer>
);

export default Footer;
