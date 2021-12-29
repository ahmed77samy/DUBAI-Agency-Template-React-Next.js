import { TeamItemStyled, H6Styled, WrapperImage } from "./styled/team-item-styled";
import PropTypes from "prop-types";
import Image from "next/image";
import Overlay from "core/overlay";
import Social from "components/elements/layouts/social";

/**
 * {@inheritdoc}
 * @param {object} props
 * @returns {React.Component}
 */
function TeamItem(props) {
    const { img, name, job } = props.item;
    return (
        <TeamItemStyled {...props}>
            {/* <Image> */}
            <WrapperImage>
                <Image
                    src={img}
                    alt="dubai-team"
                    width={600}
                    height={850}
                    layout="responsive"
                    objectFit="cover"
                    placeholder="blur"
                    blurDataURL="/img/bg/loading.png"
                />
                <Overlay>
                    <Social />
                </Overlay>
            </WrapperImage>
            {/* </Image> */}
            {/* content */}
            <div className="pt-4">
                <H6Styled className="text-uppercase font-600">
                    {name}
                </H6Styled>
                <span className="text-capitalize">{job}</span>
            </div>
            {/* content */}
        </TeamItemStyled>
    );
}

// TeamItem PropTypes
TeamItem.propTypes = {
    item: PropTypes.shape({
        img: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        job: PropTypes.string.isRequired,
    }),
};

export default TeamItem;
