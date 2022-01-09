import PropTypes from "prop-types";
import CommentItem from "./comment-item";
import { CommentsStyled } from "./styled/single-comments-styled";

/**
 * {@inheritdoc}
 * @param {object} props
 * @returns {React.Component}
 */
function CommentReplayItem(props) {
    // loop for replies to create CommentItem replay
    const repliesList = props.item.replies.map((replay, index) => {
        return <CommentItem item={replay} key={index} className="py-4 px-3 ml-md-5 bg-tertiary" />;
    });

    return (
        <CommentsStyled>
            <CommentItem item={props.item} />
            {repliesList}
        </CommentsStyled>
    );
}

// CommentReplayItem PropTypes
CommentReplayItem.propTypes = {
    item: PropTypes.shape({
        name: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        comment: PropTypes.string.isRequired,
        replies: PropTypes.array.isRequired
    })
};

export default CommentReplayItem;
