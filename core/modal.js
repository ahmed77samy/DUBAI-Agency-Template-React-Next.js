import React from "react";
import { TimesIcon } from "../components/elements/icons/icons";
import {
    ModalStyled,
    ModalBodyStyled,
    ModalHeaderStyled,
    ModalFooterStyled
} from "./styled/modal-styled";
import ThreeLines from "../components/elements/layouts/three-lines";

/**
 * {@inheritdoc}
 * @param {object} props
 * @returns {React.Component}
 */
function DefaultModal({ children, ...props }) {
    // send modalprops with children
    const childrenWithProps = React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, { modalprops: props });
        }
        return child;
    });
    return <ModalStyled {...props} contentClassName="scrollable">{childrenWithProps}</ModalStyled>;
}

/**
 * {@inheritdoc}
 * @param {object} props
 * @returns {React.Component}
 */
function ModalHeader({ children, ...props }) {
    const { onHide } = props.modalprops;
    return (
        <ModalHeaderStyled {...props} data-title="dubai modal">
            <ThreeLines
                x="left"
                y="center"
                width="8px"
                height="15px"
                gap="5px"
            />
            <TimesIcon className="icon" role="button" onClick={onHide} />
            {children}
        </ModalHeaderStyled>
    );
}
/**
 * {@inheritdoc}
 * @param {object} props
 * @returns {React.Component}
 */
function ModalBody({ children, ...props }) {
    return <ModalBodyStyled {...props}>{children}</ModalBodyStyled>;
}
/**
 * {@inheritdoc}
 * @param {object} props
 * @returns {React.Component}
 */
function ModalFooter({ children, ...props }) {
    return <ModalFooterStyled {...props}>{children}</ModalFooterStyled>;
}

DefaultModal.Header = ModalHeader;
DefaultModal.Body = ModalBody;
DefaultModal.Footer = ModalFooter;

export default DefaultModal;
