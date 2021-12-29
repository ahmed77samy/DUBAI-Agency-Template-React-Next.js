import Aside from "components/elements/layouts/aside.js";
import Social from "components/elements/layouts/social.js";
import Image from "next/image";
import Link from "next/link";
import { Col, Row } from "react-bootstrap";
import { latest_blog_items } from "../blog/items";
import AsidePostItem from "./aside-post-item.js";
import { AsidePostsStyled, LinkStyled } from "./styled/portfolio-aside-styled";

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
function PortfolioAside(props) {
    // loop for latest_blog_items to create AsidePostItem
    const asidePostsItems = latest_blog_items.map((item, index) => {
        return <AsidePostItem item={item} key={index} />;
    });

    // loop for instagram_items to create instagramItem
    const instagramFeedsItems = instagram_items.map((item, index) => {
        return (
            <Col xs={4} className="p-1" key={index}>
                <Image
                    src={item}
                    alt="instagram-feeds"
                    width={100}
                    height={100}
                    objectFit="cover"
                    layout="responsive"
                    placeholder="blur"
                    blurDataURL="/img/bg/loading.png"
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
            {/* posts group */}
            <Aside.Group>
                <Aside.Header>popular posts</Aside.Header>
                <Aside.Content>
                    <AsidePostsStyled>{asidePostsItems}</AsidePostsStyled>
                </Aside.Content>
            </Aside.Group>
            {/* posts group */}
            {/* tags group */}
            <Aside.Group>
                <Aside.Header>tags</Aside.Header>
                <Aside.Content>
                    <Link href="/portfolio/portfolio-list" passHref><LinkStyled className="a-reset">Business</LinkStyled></Link> <span> , </span>
                    <Link href="/portfolio/portfolio-list" passHref><LinkStyled className="a-reset">Agency</LinkStyled></Link> <span> , </span>
                    <Link href="/portfolio/portfolio-list" passHref><LinkStyled className="a-reset">Digital</LinkStyled></Link> <span> , </span>
                    <Link href="/portfolio/portfolio-list" passHref><LinkStyled className="a-reset">Technology</LinkStyled></Link> <span> , </span>
                    <Link href="/portfolio/portfolio-list" passHref><LinkStyled className="a-reset">Parallax</LinkStyled></Link> <span> , </span>
                    <Link href="/portfolio/portfolio-list" passHref><LinkStyled className="a-reset">Innovative</LinkStyled></Link> <span> , </span>
                    <Link href="/portfolio/portfolio-list" passHref><LinkStyled className="a-reset">Professional</LinkStyled></Link> <span> , </span>
                    <Link href="/portfolio/portfolio-list" passHref><LinkStyled className="a-reset">Experience</LinkStyled></Link>
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

export default PortfolioAside;
