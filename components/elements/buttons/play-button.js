import React from "react";
import { PlayIcon } from "../icons/icons";
import DefaultButton from "./default-button";
import { PlayButtonStyled } from "./styled/play-button-styled";
import PropTypes from "prop-types"

/**
 * {@inheritdoc}
 * @param {object} props
 * @returns {React.Component}
 */
const PlayButton = React.forwardRef((props, ref) => {
    return (
        <PlayButtonStyled square borderRadius as={DefaultButton} ref={ref} {...props}>
            {props.icon ? <props.icon className="icon" /> : <PlayIcon />}
        </PlayButtonStyled>
    );
});

// PlayButton PropTypes
PlayButton.propTypes = {
    icon: PropTypes.func
}

PlayButton.displayName = 'PlayButton';

export default PlayButton;
