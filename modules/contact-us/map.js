import { Wrapper, Status } from "@googlemaps/react-wrapper";
import Loading from "components/loading";
import Section from "components/layouts/section";
import { Container } from "react-bootstrap";
import MapComponent from "./map-component";

/**
 * {@inheritdoc}
 * @param {object} props
 * @returns {React.Component}
 */
function Map(props) {
    const center = {lat: 31.20796676530849, lng: 29.908925506479424};
    const zoom = 16;

    /**
     * check if status is loading or FAILURE failure or seccess and render the suitable function
     * @param {*} status 
     * @returns {React.Component}
     */
    const render = (status) => {
        switch (status) {
            case Status.LOADING:
                return <Loading className="d-block mx-auto" />;
            case Status.FAILURE:
                return <h5 className="text-uppercase text-center text-danger m-0">Something went wrong</h5>;
            case Status.SUCCESS:
                return <MapComponent center={center} zoom={zoom} />
        }
    };

    return (
        <Section {...props} padding={true}>
            <Container>
                <Wrapper apiKey={"AIzaSyCiu50VN0cPLMVBZFm3cqRuQhIgqNBrCBI"} render={render} />
            </Container>
        </Section>
    )
}

export default Map;
