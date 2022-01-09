import PropTypes from "prop-types";
import { header_demo_items } from "./items";
import ListItemsDemo from "./list-items-demo";
import ListItemsDropDemo from "./list-items-drop-demo";
import { NavbarStyled, UlStyled } from "./styled/navbar-demo-styled";

/**
 * {@inheritdoc}
 * @param {object} props
 * @returns {React.Component}
 */
function Navbar(props) {
    // map on header_demo_items to create ListItemsDemo or ListItemsDropDemo
    const ulItems = header_demo_items.map((item, index) => {
        return item.items ? <ListItemsDropDemo item={item} key={index} /> : <ListItemsDemo item={item} key={index} />;
    });

    return (
        <NavbarStyled {...props} className="scrollable">
            <UlStyled className="list-unstyled m-0">{ulItems}</UlStyled>
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
