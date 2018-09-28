import React from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);


// const MySwal = withReactContent(Swal);

// title: <p>
// Hello World
// </p>,
// type: 'success',
// footer: 'Copyright 2018',
// onOpen: () => {
// // `MySwal` is a subclass of `Swal`
// //   with all the same instance & static methods
// MySwal.clickConfirm();
// console.log(state);
// },
// }).then(() => MySwal.fire({
// title: <p>
// {content}
// </p>,
// type: state,

const SweetAlert = (content, state) => MySwal.fire({
  title: content,
  type: state,
});

export default SweetAlert;
