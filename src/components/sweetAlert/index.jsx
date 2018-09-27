import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const SweetAlert = (title, type) => MySwal.fire({
  title,
  type,
});

export default SweetAlert;
