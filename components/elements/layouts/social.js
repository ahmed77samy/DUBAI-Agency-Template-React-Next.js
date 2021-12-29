import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import {
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
} from "react-share";
import { LinkStyled, SocialStyled, ShareStyled } from "./styled/social-styled";

const itemSocial = [
    {
        content: "fb",
        title: "FaceBook",
    },
    {
        content: "tw",
        title: "Twitter",
    },
    {
        content: "li",
        title: "Linkedin",
    },
];

/**
 * {@inheritdoc}
 * @param {object} props
 * @returns {React.Component}
 */
function Social(props) {
    // return FaceBook share
    const FaceBook = (propschild) => {
        const [origin, setOrigin] = useState(null);
        useEffect(() => setOrigin(window.location.origin), []);
        return (
            <FacebookShareButton url={`${origin}${props.url}`}>
                <ShareStyled>{propschild.item.content}</ShareStyled>
            </FacebookShareButton>
        );
    };
    // return Twitter share
    const Twitter = (propschild) => {
        const [origin, setOrigin] = useState(null);
        useEffect(() => setOrigin(window.location.origin), []);
        return (
            <TwitterShareButton url={`${origin}${props.url}`}>
                <ShareStyled>{propschild.item.content}</ShareStyled>
            </TwitterShareButton>
        );
    };
    // return Linkedin share
    const Linkedin = (propschild) => {
        const [origin, setOrigin] = useState(null);
        useEffect(() => setOrigin(window.location.origin), []);
        return (
            <LinkedinShareButton url={`${origin}${props.url}`}>
                <ShareStyled>{propschild.item.content}</ShareStyled>
            </LinkedinShareButton>
        );
    };

    return (
        <SocialStyled {...props}>
            {itemSocial.map((e, i) => {
                return (
                    <LinkStyled key={i} title={e.title} className="a-reset">
                        {e.title === "FaceBook" ? (
                            <FaceBook item={e} />
                        ) : e.title === "Twitter" ? (
                            <Twitter item={e} />
                        ) : (
                            e.title === "Linkedin" && <Linkedin item={e} />
                        )}
                    </LinkStyled>
                );
            })}
        </SocialStyled>
    );
}

// Social PropTypes
Social.propTypes = {
    type: PropTypes.oneOf(["light", "dark", "primary", "neutral"]).isRequired,
    direction: PropTypes.oneOf(["column", "row"]).isRequired,
    url: PropTypes.string.isRequired,
};

// Social defaultProps
Social.defaultProps = {
    type: "light",
    direction: "row",
    url: "/",
};

export default Social;
