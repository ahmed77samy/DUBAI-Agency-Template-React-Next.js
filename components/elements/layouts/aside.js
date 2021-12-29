import {
    AsideContentStyled,
    AsideGroupStyled,
    AsideHeaderStyled,
    AsideStyled,
} from "./styled/aside-styled.js";
import PropTypes from "prop-types";

/**
 * {@inheritdoc}
 * @param {object} props
 * @returns {React.Component}
 */
const Aside = (props) => <AsideStyled {...props}>{props.children}</AsideStyled>;

/**
 * {@inheritdoc}
 * @param {object} props
 * @returns {React.Component}
 */
const AsideGroup = (props) => (
    <AsideGroupStyled {...props}>{props.children}</AsideGroupStyled>
);

/**
 * {@inheritdoc}
 * @param {object} props
 * @returns {React.Component}
 */
const AsideHeader = (props) => (
    <AsideHeaderStyled {...props}>{props.children}</AsideHeaderStyled>
);

/**
 * {@inheritdoc}
 * @param {object} props
 * @returns {React.Component}
 */
const AsideContent = (props) => (
    <AsideContentStyled {...props}>{props.children}</AsideContentStyled>
);

Aside.Group = AsideGroup;
Aside.Header = AsideHeader;
Aside.Content = AsideContent;

// AsideGroup PropTypes
AsideGroup.propTypes = {
    border: PropTypes.bool.isRequired,
};

// AsideGroup defaultProps
AsideGroup.defaultProps = {
    border: true,
};

export default Aside;
