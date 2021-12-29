import { Container } from "react-bootstrap";
import Logo from "../header/logo";
import Social from "../layouts/social";
import { FooterStyled, WrapperStyled } from "./styled/footer-demo-styled";

/**
 * {@inheritdoc}
 * @returns {React.Component}
 */
function Footer(props) {
    return (
        <FooterStyled {...props}>
            <Container>
                <WrapperStyled>
                    <Logo />
                    <Social />
                </WrapperStyled>
                <hr />
                <p className="m-0">&copy; Copyright 2021 DUBAI. All rights reserved</p>
            </Container>
        </FooterStyled>
    );
}

export default Footer;
