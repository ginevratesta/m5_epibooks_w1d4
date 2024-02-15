import Toast from 'react-bootstrap/Toast';

const ErrorMessage = ({error}) => {
    return (
        <Toast>
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        <strong className="me-auto">Error</strong>
        <small>There's been an error</small>
      </Toast.Header>
      <Toast.Body>Error: {error}</Toast.Body>
    </Toast>
  );
};

export default ErrorMessage;