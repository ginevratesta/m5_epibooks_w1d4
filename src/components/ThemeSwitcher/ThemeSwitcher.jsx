import Form from 'react-bootstrap/Form';
import { handleDarkMode, isDarkModeActive } from '../../redux/darkModeSlice';
import { useDispatch, useSelector } from 'react-redux';
import "./ThemeSwitcher.css";

const ThemeSwitcher = () => {
    const dispatch = useDispatch();
    const isDarkMode = useSelector(isDarkModeActive);


    const handleClick = () => {
        dispatch(handleDarkMode());
    };
  return (
    <Form>
      <Form.Check 
        className = {isDarkMode ? "dark-mode" : ""}
        onClick = {handleClick}
        type="switch"
        id="custom-switch"
        label={isDarkMode ? "Dark" : "Light"}
      />
    </Form>
  );
}

export default ThemeSwitcher;