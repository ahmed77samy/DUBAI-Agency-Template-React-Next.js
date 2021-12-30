import { useState } from "react";
import { AngleDownIcon } from "../core/icons";
import NavLink from "../core/nav-link";
import ListItemsDemo from "./list-items-demo";
import {
    DropDownStyled,
    LiDropStyled,
    LinkStyled,
} from "./styled/navbar-demo-styled";
import PropTypes from "prop-types";

/**
 * {@inheritdoc}
 * @param {object} props
 * @returns {React.Component}
 */
function ListItemsDropDemo(props) {
    const { name, items, route } = props.item;
    const [open, setOpen] = useState(false);

    // map on items to create ListItemsDemo
    const dropItems = items.map((item, index) => {
        return <ListItemsDemo item={item} key={index} />;
    });

    // set state open onClick
    const handleClick = (e) => {
        e.preventDefault();
        setOpen(!open);
    };

    return (
        <LiDropStyled {...props} open={open}>
            <NavLink href={route}>
                <LinkStyled onClick={handleClick} className="a-reset">
                    {name} <AngleDownIcon className="ml-2" />
                </LinkStyled>
            </NavLink>
            <DropDownStyled className="list-unstyled m-0">
                {dropItems}
            </DropDownStyled>
        </LiDropStyled>
    );
}

// ListItemsDropDemo proptypes
ListItemsDropDemo.propTypes = {
    item: PropTypes.shape({
        name: PropTypes.string.isRequired,
        route: PropTypes.string.isRequired,
        items: PropTypes.array.isRequired,
    }),
};

export default ListItemsDropDemo;
