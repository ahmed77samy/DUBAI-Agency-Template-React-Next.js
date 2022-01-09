import Section from "components/layouts/section";
import Image from "next/image";
import Link from "next/link";
import { BlockquoteStyled, HrStyled, LinkStyled, TagsStyled } from "./styled/single-details-styled";

/**
 * {@inheritdoc}
 * @param {object} props
 * @returns {React.Component}
 */
function SingleDetails(props) {
    return (
        <Section {...props}>
            {/* details */}
            <div className="mb-1 font-small">
                <span>By </span>
                <Link href="/blog/blog-single" passHref>
                    <LinkStyled className="a-reset">Themezas</LinkStyled>
                </Link>
                <span> - </span>
                <Link href="/blog/blog-single" passHref>
                    <LinkStyled className="a-reset">30 Likes</LinkStyled>
                </Link>
                <span> - </span>
                <Link href="/blog/blog-single" passHref>
                    <LinkStyled className="a-reset">5 Comments</LinkStyled>
                </Link>
            </div>
            {/* details */}
            {/* paragraph lorem */}
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
            {/* paragraph lorem */}
            {/* Blockquote */}
            <BlockquoteStyled>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Curabitulandit Sed posuere consectetur est at lobortis. Donec id elit non mi porta gravida at eget metus.</BlockquoteStyled>
            {/* Blockquote */}
            {/* Image */}
            <Image src="/img/blog/5.jpg" alt="blog-single" width={750} height={500} layout="responsive" objectFit="cover" placeholder="blur" blurDataURL="/img/bg/loading.WebP" />
            {/* Image */}
            {/* paragraph lorem */}
            <p className="mt-3">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.</p>
            {/* paragraph lorem */}
            <HrStyled />
            {/* tags */}
            <div className="d-flex flex-wrap align-items-center mt-4">
                <span>TAGS: </span>
                <Link href="/blog/blog-grid" passHref>
                    <TagsStyled className="a-reset">Business</TagsStyled>
                </Link>
                <Link href="/blog/blog-grid" passHref>
                    <TagsStyled className="a-reset">Agency</TagsStyled>
                </Link>
                <Link href="/blog/blog-grid" passHref>
                    <TagsStyled className="a-reset">Digital</TagsStyled>
                </Link>
                <Link href="/blog/blog-grid" passHref>
                    <TagsStyled className="a-reset">Technology</TagsStyled>
                </Link>
            </div>
            {/* tags */}
        </Section>
    );
}

export default SingleDetails;
