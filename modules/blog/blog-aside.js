import Social from "components/social.js";
import Aside from "components/aside.js";
import Image from "next/image";
import Link from "next/link";
import { Col, Row } from "react-bootstrap";
import { latest_portfolio_two_items } from "../portfolio/items.js";
import AsideWorkItem from "./aside-work-item.js";
import { AsideWorksStyled, LinkStyled } from "./styled/blog-aside-styled.js";

const instagram_items = [
    "/img/about/instagram-1.jpg",
    "/img/about/instagram-2.jpg",
    "/img/about/instagram-3.jpg",
    "/img/about/instagram-4.jpg",
    "/img/about/instagram-5.jpg",
    "/img/about/instagram-6.jpg",
    "/img/about/instagram-8.jpg",
    "/img/about/instagram-7.jpg",
    "/img/about/instagram-9.jpg",
];

/**
 * {@inheritdoc}
 * @param {object} props
 * @returns {React.Component}
 */
function BlogAside(props) {
    // loop for latest_portfolio_two_items to create AsideWorkItem
    const asideWorksItems = latest_portfolio_two_items.map((item, index) => {
        return <AsideWorkItem item={item} key={index} />;
    });

    // loop for instagram_items to create instagramItem
    const instagramFeedsItems = instagram_items.map((item, index) => {
        return (
            <Col xs={12} md={4} className="p-1" key={index}>
                <Image
                    src={item}
                    alt="instagram-feeds"
                    width={100}
                    height={100}
                    objectFit="cover"
                    layout="responsive"
                    placeholder="blur"
                    blurDataURL="/img/bg/loading.WebP"
                    role="button"
                />
            </Col>
        );
    });

    return (
        <Aside {...props}>
            {/* follow group */}
            <Aside.Group>
                <Aside.Header>share</Aside.Header>
                <Aside.Content>
                    <Social />
                </Aside.Content>
            </Aside.Group>
            {/* follow group */}
            {/* works group */}
            <Aside.Group>
                <Aside.Header>popular works</Aside.Header>
                <Aside.Content>
                    <AsideWorksStyled>{asideWorksItems}</AsideWorksStyled>
                </Aside.Content>
            </Aside.Group>
            {/* works group */}
            {/* tags group */}
            <Aside.Group>
                <Aside.Header>tags</Aside.Header>
                <Aside.Content>
                    <Link href="/portfolio/portfolio-grid" passHref><LinkStyled className="a-reset">Business</LinkStyled></Link> <span> , </span>
                    <Link href="/portfolio/portfolio-grid" passHref><LinkStyled className="a-reset">Agency</LinkStyled></Link> <span> , </span>
                    <Link href="/portfolio/portfolio-grid" passHref><LinkStyled className="a-reset">Digital</LinkStyled></Link> <span> , </span>
                    <Link href="/portfolio/portfolio-grid" passHref><LinkStyled className="a-reset">Technology</LinkStyled></Link> <span> , </span>
                    <Link href="/portfolio/portfolio-grid" passHref><LinkStyled className="a-reset">Parallax</LinkStyled></Link> <span> , </span>
                    <Link href="/portfolio/portfolio-grid" passHref><LinkStyled className="a-reset">Innovative</LinkStyled></Link> <span> , </span>
                    <Link href="/portfolio/portfolio-grid" passHref><LinkStyled className="a-reset">Professional</LinkStyled></Link> <span> , </span>
                    <Link href="/portfolio/portfolio-grid" passHref><LinkStyled className="a-reset">Experience</LinkStyled></Link>
                </Aside.Content>
            </Aside.Group>
            {/* tags group */}
            {/* instagram group */}
            <Aside.Group>
                <Aside.Header>instagram feeds</Aside.Header>
                <Aside.Content>
                    <Row noGutters>{instagramFeedsItems}</Row>
                </Aside.Content>
            </Aside.Group>
            {/* instagram group */}
        </Aside>
    );
}

export default BlogAside;
