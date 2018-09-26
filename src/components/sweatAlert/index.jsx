import React from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

// MySwal.fire({
//     title: <p>Hello World</p>,
//     footer: "Copyright 2018",
//     onOpen: () => {
//         // `MySwal` is a subclass of `Swal`
//         //   with all the same instance & static methods
//         MySwal.clickConfirm();
//     }
// }).then(() => {
//     return MySwal.fire(<p>Shorthand works too</p>);
// });

function SweatAlert(title, type) {
    return MySwal.fire({
        title: title,
        type: type
    });
}

export default SweatAlert;

// class SweatAlert extends React.Component {
//     constructor(props){
//         super(props);
//     }

//     render(){
//         return (

//         );
//     }
// }
