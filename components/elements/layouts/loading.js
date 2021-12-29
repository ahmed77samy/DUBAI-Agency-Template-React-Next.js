import { Spinner } from "react-bootstrap"

/**
 * {@inheritdoc}
 * @param {object} props
 * @returns {React.Component}
 */
function Loading (props) {
    return(
        <Spinner {...props} animation="border" role="status">
            <span className="sr-only">Loading...</span>
        </Spinner>
    )
}

export default Loading
