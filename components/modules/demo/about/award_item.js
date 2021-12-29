import ThreeLines from "components/elements/layouts/three-lines";
import PropTypes from "prop-types";
import { Col, Row } from "react-bootstrap";
import {
    AwardItemStyled,
    HeaderStyled,
    H5styled,
    SpanStyled,
} from "./styled/award-item-styled";

/**
 * {@inheritdoc}
 * @param {object} props
 * @returns {React.Component}
 */
function AwardItem(props) {
    const { description, title, date } = props.item;
    return (
        <AwardItemStyled>
            <Row className="layout-space align-items-center">
                <Col xs={12} lg={6}>
                    <HeaderStyled data-title="dubai awards">
                        <ThreeLines
                            x="left"
                            y="center"
                            width="13px"
                            height="25px"
                            gap="8px"
                        />
                        <H5styled className="m-0 text-uppercase font-600">
                            {title}
                        </H5styled>
                    </HeaderStyled>
                </Col>
                <Col xs={12} lg={6}>
                    <SpanStyled>{date}</SpanStyled>
                    <p className="m-0">{description}</p>
                </Col>
            </Row>
        </AwardItemStyled>
    );
}

// AwardItem PropTypes
AwardItem.propTypes = {
    item: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
    }),
};

export default AwardItem;
