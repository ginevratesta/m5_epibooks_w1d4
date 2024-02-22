import "../ThemeSwitcher/ThemeSwitcher.css";
import { isDarkModeActive } from '../../redux/darkModeSlice';
import { useSelector } from "react-redux";

const Footer = (props) => {
    const isDarkMode = useSelector(isDarkModeActive);
    const phone = props.phone;
    const email = props.email;
    return(
        <footer className = {isDarkMode ? "dark-mode text-center py-5" : "text-center py-5"}>
            <p>Thanks for passing by!</p>
            <p>Contact us through our phone number: {phone} or email: {email}</p>
        </footer>
    )
};

export default Footer;