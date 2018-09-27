import React from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);


// const MySwal = withReactContent(Swal);

const SweetAlert = content => MySwal.fire({
  title: <p>
Hello World
  </p>,
  type: 'success',
  footer: 'Copyright 2018',
  onOpen: () => {
    // `MySwal` is a subclass of `Swal`
    //   with all the same instance & static methods
    MySwal.clickConfirm();
  },
}).then(() => MySwal.fire(<p>
  {content}
</p>));
export default SweetAlert;
