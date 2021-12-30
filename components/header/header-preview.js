import { useCallback, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Logo from "./logo";
import Navbar from "./navbar-preview";
import { HeaderStyled } from "./styled/header-preview-styled";
import ToogleIcon from "./toggle-icon";

/**
 * {@inheritdoc}
 * @param {object} props
 * @returns {React.Component}
 */
function Header(props) {
    const [open, setOpen] = useState(false);
    const [scroll, setScroll] = useState(false);

    // set state mobile if click ToogleIcon
    const handleClick = () => {
        setOpen(!open);
    };

    // check if scrollTop is down update scroll state
    const myListener = useCallback(() => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop > 0) setScroll(true);
        else setScroll(false);
    }, []);

    // add event and remove when did mount component
    useEffect(() => {
        document.addEventListener("scroll", myListener);
        return () => document.removeEventListener("scroll", myListener);
    }, [myListener]);

    return (
        <HeaderStyled scroll={scroll} {...props}>
            <Container fluid>
                <Row className="h-100 align-items-center">
                    {/* logo */}
                    <Col xs={6} lg={3}>
                        <Logo />
                    </Col>
                    {/* logo */}
                    {/* Navbar */}
                    <Col xs={6} lg={9}>
                        <ToogleIcon
                            className="d-flex d-lg-none"
                            onClick={handleClick}
                            open={open}
                        />
                        <Navbar open={open} />
                    </Col>
                    {/* Navbar */}
                </Row>
            </Container>
        </HeaderStyled>
    );
}

export default Header;
