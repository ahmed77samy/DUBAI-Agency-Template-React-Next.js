import { useEffect } from "react";
import { useState } from "react";
import PropTypes from "prop-types";

function DubaiComponent({ Component, pageTransitionReadyToEnter, pageProps }) {
    const [loaded, setLoaded] = useState(false);

    // handle page transition
    // useEffect(() => {
    //     const timeoutId = setTimeout(() => {
    //         if (!loaded) {
    //             pageTransitionReadyToEnter();
    //             setLoaded(true);
    //         }
    //     }, 500);
    //     return () => {
    //         clearTimeout(timeoutId);
    //     };
    // }, [pageTransitionReadyToEnter, loaded]);

    // if (!loaded) return null;

    return <Component {...pageProps} />;
}

// DubaiComponent propTypes
DubaiComponent.propTypes = {
    pageTransitionReadyToEnter: PropTypes.func,
};

// DubaiComponent defaultProps
DubaiComponent.defaultProps = {
    pageTransitionReadyToEnter: () => {},
};

DubaiComponent.pageTransitionDelayEnter = true;

export default DubaiComponent;
