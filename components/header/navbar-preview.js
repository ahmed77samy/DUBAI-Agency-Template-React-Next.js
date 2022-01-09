import menuspy from "menuspy";
import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import { LinkStyled, NavbarStyled, UlStyled, LiStyled } from "./styled/navbar-preview-styled";

/**
 * {@inheritdoc}
 * @param {object} props
 * @returns {React.Component}
 */
function Navbar(props) {
    const navRef = useRef(0);
    // enable active class on scroll
    useEffect(() => {
        let isMounted = true;
        if (isMounted) {
            let ms = new menuspy(navRef.current , {enableLocationHash: false});
        }
        return () => (isMounted = false);
    }, []);

    return (
        <NavbarStyled {...props} ref={navRef}>
            <UlStyled className="list-unstyled m-0">
                <LiStyled className="active">
                    <LinkStyled href="#introduction" className="a-reset">
                        intro
                    </LinkStyled>
                </LiStyled>
                <LiStyled>
                    <LinkStyled href="#features" className="a-reset">
                        features
                    </LinkStyled>
                </LiStyled>
                <LiStyled>
                    <LinkStyled href="#demos" className="a-reset">
                        view demo
                    </LinkStyled>
                </LiStyled>
                <LiStyled>
                    <LinkStyled href="#faq" className="a-reset">
                        faq
                    </LinkStyled>
                </LiStyled>
                <LiStyled>
                    <LinkStyled href="#purchase" className="a-reset">
                        Purchase
                    </LinkStyled>
                </LiStyled>
            </UlStyled>
        </NavbarStyled>
    );
}

// Navbar PropTypes
Navbar.propTypes = {
    open: PropTypes.bool.isRequired
};

// Navbar defaultProps
Navbar.defaultProps = {
    open: false
};

export default Navbar;
