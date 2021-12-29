import Image from "next/image"
import {SponserItemStyled} from "./styled/sponser-item-styled"
import PropTypes from "prop-types"

/**
 * {@inheritdoc}
 * @param {object} props
 * @returns {React.Component}
 */
function SponserItem (props) {
    const {img} = props.item
    return (
        <SponserItemStyled>
            <Image 
                src={img}
                alt="sponser"
                width={100}
                height={30}
                objectFit="cover"
                placeholder="blur"
                blurDataURL="/img/bg/loading.png"
            />
        </SponserItemStyled>
    )
}

// SponserItem PropTypes
SponserItem.propTypes = {
    item: PropTypes.shape({
        img: PropTypes.string.isRequired,
    }),
};

export default SponserItem