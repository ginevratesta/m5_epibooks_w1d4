const Footer = (props) => {
    const phone = props.phone;
    const email = props.email;
    return(
        <footer className="text-center py-5 bg-light">
            <p>Thanks for passing by!</p>
            <p>Contact us through our phone number: {phone} or email: {email}</p>
        </footer>
    )
};

export default Footer;