import Header from "../header/header-preview";
import Footer from "../footer/footer-preview";
import { LayoutStyled } from "./styled/layout-styled";

/**
 * {@inheritdoc}
 * @param {object} props
 * @returns {React.Component}
 */
function Layout(props) {
    return (
        <LayoutStyled {...props}>
            <Header />
            <div id="wrapper">{props.children}</div>
            <Footer />
        </LayoutStyled>
    );
}

export default Layout;
