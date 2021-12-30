import { LoaderStyled } from "./styled/dubai-loader-styled";
import ThreeLines from "./three-lines";

/**
 * {@inheritdoc}
 * @param {object} props
 * @returns {React.Component}
 */
function DubaiLoadear(props) {
    return (
        <LoaderStyled {...props}>
            <div className="d-flex justify-content-center align-items-end">
                <ThreeLines width="15px" height="25px" gap="10px" />
                <h6 className="mb-0 ml-4">DUBAI...</h6>
            </div>
        </LoaderStyled>
    );
}

export default DubaiLoadear;
