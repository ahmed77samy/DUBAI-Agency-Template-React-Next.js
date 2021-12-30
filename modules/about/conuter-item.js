import { useCallback, useEffect, useRef, useState } from "react";
import {
    ConuterItemStyled,
    H2Styled,
    H6Styled,
} from "./styled/counter-item-styled.js";
import PropTypes from "prop-types";
import KUTE from "kute.js";

/**
 * {@inheritdoc}
 * @param {object} props
 * @returns {React.Component}
 */
function ConuterItem(props) {
    const { title, number } = props.item;
    const countRef = useRef(0);
    const numberRef = useRef(0);
    const [isshow, setIsShow] = useState(false);

    // check if targetPosition is show
    // if show start animation and update isshow
    const myListener = useCallback(() => {
        let targetPosition = countRef.current?.getBoundingClientRect().top;
        let offset = document.documentElement.clientHeight - 200;
        if (targetPosition - offset <= 0) {
            KUTE.to(numberRef.current, { number }).start();
            setIsShow(true);
        }
    }, [number]);

    // add event and remove when did mount component or is show
    useEffect(() => {
        if (isshow) document.removeEventListener("scroll", myListener);
        else document.addEventListener("scroll", myListener);
        return () => document.removeEventListener("scroll", myListener);
    }, [isshow, myListener]);

    return (
        <ConuterItemStyled {...props} ref={countRef}>
            <H2Styled ref={numberRef}>0</H2Styled>
            <H6Styled className="text-uppercase font-600">{title}</H6Styled>
        </ConuterItemStyled>
    );
}

// ConuterItem PropTypes
ConuterItem.propTypes = {
    item: PropTypes.shape({
        title: PropTypes.string.isRequired,
        number: PropTypes.number.isRequired,
    })
};

export default ConuterItem;
