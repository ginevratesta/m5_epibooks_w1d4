import Toast from 'react-bootstrap/Toast';
import "./ErrorMessage.css"
import "../ThemeSwitcher/ThemeSwitcher.css";
import { isDarkModeActive } from '../../redux/darkModeSlice';
import { useSelector } from 'react-redux';

const ErrorMessage = ({error}) => {
  const isDarkMode = useSelector(isDarkModeActive);
    return (
        <Toast className={isDarkMode ? "dark-mode w-50 error-modal" : "w-50 error-modal"}>
      <Toast.Header className={isDarkMode ? "dark-mode" : ""}>
        <strong className="me-auto">Error</strong>
        <small>There's been an error</small>
      </Toast.Header>
      <Toast.Body className={isDarkMode ? "dark-mode d-flex justify-content-center" : "d-flex justify-content-center"}>Error: {error}</Toast.Body>
    </Toast>
  );
};

export default ErrorMessage;