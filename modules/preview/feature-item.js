import Image from "next/image";
import PropTypes from "prop-types";
import { FeatureItemStyled, FigureStyled } from "./styled/feature-item-styled";

/**
 * {@inheritdoc}
 * @param {object} props
 * @returns {React.Component}
 */
function FeatureItem(props) {
    const { name, img, description } = props.item;
    /**
     * {@inheritdoc}
     */
    return (
        <FeatureItemStyled {...props}>
            <FigureStyled>
                <Image src={img} alt="feat" width={40} height={40} placeholder="blur" blurDataURL="/img/bg/loading.WebP" />
            </FigureStyled>
            <div>
                <h6 className="text-uppercase font-600">{name}</h6>
                <p className="m-0">{description}</p>
            </div>
        </FeatureItemStyled>
    );
}

// FeatureItem PropTypes
FeatureItem.propTypes = {
    item: PropTypes.shape({
        name: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    })
};

export default FeatureItem;
