import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const SweetAlert = (content, state) => MySwal.fire({
  title: content,
  type: state,
});

export default SweetAlert;
