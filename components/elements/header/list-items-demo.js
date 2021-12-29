import NavLink from "../layouts/nav-link";
import { LinkStyled } from "./styled/navbar-demo-styled";
import PropTypes from "prop-types";

/**
 * {@inheritdoc}
 * @param {object} props
 * @returns {React.Component}
 */
function ListItemsDemo(props) {
    const { name, route } = props.item;
    return (
        <li className="d-flex">
            <NavLink href={route} passHref>
                <LinkStyled className="a-reset">{name}</LinkStyled>
            </NavLink>
        </li>
    );
}

// ListItemsDemo proptypes
ListItemsDemo.propTypes = {
    item: PropTypes.shape({
        name: PropTypes.string.isRequired,
        route: PropTypes.string.isRequired,
    }),
};

export default ListItemsDemo;
