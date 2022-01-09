import { QuoteIcon } from "components/core/icons";
import Image from "next/image";
import { TestimonialItemStyled, HeaderStyled, ImageStyled, IconStyled } from "./styled/testimonial-item-styled";
import PropTypes from "prop-types";
import Social from "components/social";

/**
 * {@inheritdoc}
 * @param {object} props
 * @returns {React.Component}
 */
function TestimonialItem(props) {
    const { img, name, job, comment } = props.item;
    return (
        <TestimonialItemStyled>
            <IconStyled as={QuoteIcon} />
            {/* header */}
            <HeaderStyled>
                <ImageStyled>
                    <Image src={img} alt="dubai-clients" width={70} height={70} objectFit="cover" placeholder="blur" blurDataURL="/img/bg/loading.WebP" />
                </ImageStyled>
                <div className="ml-4">
                    <h5 className="text-uppercase mb-1">{name}</h5>
                    <span className="text-capitalize font-small">{job}</span>
                </div>
            </HeaderStyled>
            {/* header */}
            {/* content */}
            <p>{comment}</p>
            <h6 className="text-uppercase mb-3">share this :</h6>
            <Social type="primary" />
            {/* content */}
        </TestimonialItemStyled>
    );
}

// TestimonialItem PropTypes
TestimonialItem.propTypes = {
    item: PropTypes.shape({
        name: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        job: PropTypes.string.isRequired,
        comment: PropTypes.string.isRequired
    })
};

export default TestimonialItem;
