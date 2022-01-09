import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import DefaultButton from "../default-button";
import Logo from "./logo";
import Navbar from "./navbar-demo";
import { HeaderStyled } from "./styled/header-demo-styled";
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
                <Row className="h-100 align-items-stretch justify-content-between">
                    {/* logo */}
                    <Col xs={7} lg={2} className="d-flex align-items-center">
                        <Logo />
                    </Col>
                    {/* logo */}
                    {/* Navbar */}
                    <Col xs="auto" lg={8} className="d-flex align-items-center">
                        <Navbar open={open} />
                    </Col>
                    {/* Navbar */}
                    {/* tools */}
                    <Col xs="auto" lg={2} className="d-flex align-items-center justify-content-end">
                        <Link href="https://themeforest.net/user/themezas" passHref>
                            <DefaultButton as="a" variant="light" border target="_blank" size="sm" borderRadius className="a-reset d-none d-md-flex">
                                buy now
                            </DefaultButton>
                        </Link>
                        <ToogleIcon className="d-flex d-lg-none ml-md-4" onClick={handleClick} open={open} />
                    </Col>
                    {/* tools */}
                </Row>
            </Container>
        </HeaderStyled>
    );
}

export default Header;
