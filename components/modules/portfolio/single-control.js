import { ArrowLeftIcon, ArrowRightIcon } from "components/elements/icons/icons";
import Section from "components/elements/layouts/section";
import Image from "next/image";
import Link from "next/link";
import { Container } from "react-bootstrap";
import { ControlStyled, LinkStyled } from "./styled/single-control-styled";

/**
 * {@inheritdoc}
 * @param {object} props
 * @returns {React.Component}
 */
function SingleControl(props) {
    return (
        <Section {...props}>
            <Container>
                <ControlStyled>
                    {/* prev */}
                    <Link href="/portfolio/portfolio-single" passHref>
                        <LinkStyled className="a-reset">
                            <span className="text-white text-uppercase font-small">
                                <ArrowLeftIcon className="mr-3" />
                                prev
                            </span>
                            <Image
                                src="/img/portfolio/2.jpg"
                                alt="next-project"
                                width={90}
                                height={100}
                                objectFit="cover"
                                placeholder="blur"
                                blurDataURL="/img/bg/loading.png"
                            />
                        </LinkStyled>
                    </Link>
                    {/* prev */}
                    {/* next */}
                    <Link href="/portfolio/portfolio-single" passHref>
                        <LinkStyled className="a-reset">
                            <Image
                                src="/img/portfolio/3.jpg"
                                alt="next-project"
                                width={90}
                                height={100}
                                objectFit="cover"
                                placeholder="blur"
                                blurDataURL="/img/bg/loading.png"
                            />
                            <span className="text-white text-uppercase font-small">
                                next
                                <ArrowRightIcon className="ml-3" />
                            </span>
                        </LinkStyled>
                    </Link>
                    {/* next */}
                </ControlStyled>
            </Container>
        </Section>
    );
}

export default SingleControl;
