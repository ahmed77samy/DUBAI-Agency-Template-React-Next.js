import ThreeLines from "components/elements/layouts/three-lines.js";
import {
    SliderInnerPageStyled,
    ContentStyled,
    H1Styled,
    PStyled,
} from "./styled/slider-inner-page-styled.js";
import PropTypes from "prop-types";

/**
 * {@inheritdoc}
 * @param {object} props
 * @returns {React.Component}
 */
function SliderInnerPage(props) {
    const { title, description, bg, children } = props;
    return (
        <SliderInnerPageStyled {...props} bg={bg}>
            <ContentStyled>
                <ThreeLines y="bottom" x="center" />
                <H1Styled>{title}</H1Styled>
                {description && <PStyled>{description}</PStyled>}
                {children}
            </ContentStyled>
        </SliderInnerPageStyled>
    );
}

// SliderInnerPage propTypes
SliderInnerPage.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    bg: PropTypes.string.isRequired,
};

// SliderInnerPage defaultProps
SliderInnerPage.defaultProps = {
    title: "welcome dubai",
    bg: "/img/bg/10.png",
};

export default SliderInnerPage;
