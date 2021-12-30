import SecHeader from "components/layouts/sec-header";
import Section from "components/layouts/section";
import CommentItem from "./comment-item";
import CommentReplayItem from "./comment-replay-item";
import { comments_items } from "./items";
import { CommentsStyled } from "./styled/single-comments-styled";

/**
 * {@inheritdoc}
 * @param {object} props
 * @returns {React.Component}
 */
function SingleComments(props) {
    const commentsItems = comments_items.map((item, index) => {
        const { replies } = item;
        return replies ? (
            <CommentReplayItem key={index} item={item} />
        ) : (
            <CommentItem key={index} item={item} />
        );
    });

    return (
        <Section {...props}>
            {/* header */}
            <SecHeader header="5 comments" />
            {/* header */}
            <CommentsStyled>{commentsItems}</CommentsStyled>
        </Section>
    );
}

export default SingleComments;
