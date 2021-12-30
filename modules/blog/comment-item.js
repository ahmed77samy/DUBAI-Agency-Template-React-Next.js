import { ReplaytIcon } from "components/core/icons";
import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";
import { CommentItemStyled, LinkStyled } from "./styled/comment-item-styled";

/**
 * {@inheritdoc}
 * @param {object} props
 * @returns {React.Component}
 */
function CommentItem({item , ...props}) {
    const { name, img, date, comment } = item;
    return (
        <CommentItemStyled {...props}>
            {/* image */}
            <Image
                src={img}
                alt="comment"
                width={70}
                height={70}
                objectFit="cover"
                placeholder="blur"
                blurDataURL="/img/bg/loading.WebP"
            />
            {/* image */}
            {/* content */}
            <div>
                <Link href="/blog/blog-single" passHref>
                    <LinkStyled className="h6 a-reset">{name}</LinkStyled>
                </Link>
                <span className="font-small text-uppercase d-block mb-2">
                    {date}
                </span>
                <p>{comment}</p>
                <Link href="/blog/blog-single" passHref>
                    <LinkStyled className="font-small a-reset"><ReplaytIcon className="mr-2" /> replay</LinkStyled>
                </Link>
            </div>
            {/* content */}
        </CommentItemStyled>
    );
}

// CommentItem PropTypes
CommentItem.propTypes = {
    item: PropTypes.shape({
        name: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        comment: PropTypes.string.isRequired,
    }),
};

export default CommentItem;
