import PropTypes from "prop-types"
import React from "react"
import { SectionStyled } from "./styled/section-styled"

/**
 * {@inheritdoc}
 * @param {object} props 
 * @returns {React.Component}
 */
const Section = React.forwardRef((props, ref) => {
    return (
        <SectionStyled ref={ref} {...props}>
            {props.children}
        </SectionStyled>
    )
})

// Section PropTypes
Section.propTypes = {
    padding: PropTypes.bool,
    reverseColor: PropTypes.bool,
}

// Section defaultProps
Section.defaultProps = {
    padding: false,
    reverseColor: false
}

Section.displayName = 'Section';

export default Section