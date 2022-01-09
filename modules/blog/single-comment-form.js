import DefaultButton from "components/default-button";
import { SendIcon } from "components/core/icons";
import DefaultInput from "components/default-input";
import SecHeader from "components/layouts/sec-header";
import { FormStyled } from "./styled/single-comment-form-styled";

/**
 * {@inheritdoc}
 * @param {object} props
 * @returns {React.Component}
 */
function SingleCommentForm() {
    return (
        <FormStyled>
            {/* header */}
            <SecHeader header="leave comment" message="type message" />
            {/* header */}
            {/* content */}
            <DefaultInput required type="text" size="sm" placeholder="Your Name *" />
            <DefaultInput required type="email" size="sm" placeholder="Your Email Address *" />
            <DefaultInput required as="textarea" size="sm" placeholder="Type Your Comment Here *" />
            <DefaultButton border size="sm">
                <SendIcon className="mr-3" />
                send message
            </DefaultButton>
            {/* content */}
        </FormStyled>
    );
}

export default SingleCommentForm;
