import Logo from "../header/logo";
import { FooterStyled } from "./styled/footer-preview-styled";

/**
 * {@inheritdoc}
 * @returns {React.Component}
 */
function Footer(props) {
    return (
        <FooterStyled {...props}>
            <Logo />
            <p className="m-0">&copy; Copyright 2021 DUBAI. All rights reserved</p>
        </FooterStyled>
    );
}

export default Footer;
