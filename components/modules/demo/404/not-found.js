import DefaultButton from "components/elements/buttons/default-button.js";
import { HomeIcon, SendIcon } from "components/elements/icons/icons.js";
import ThreeLines from "components/elements/layouts/three-lines.js";
import Link from "next/link";
import {
    NotFoundStyled,
    ContentStyled,
    H1Styled,
    PStyled,
    WrapperButtons,
} from "./styled/not-found-styled.js";

/**
 * {@inheritdoc}
 * @param {object} props
 * @returns {React.Component}
 */
function NotFound(props) {
    return (
        <NotFoundStyled {...props} bg="/img/bg/10.png">
            <ContentStyled>
                <ThreeLines x="center" y="bottom" />
                <H1Styled as="h2" className="font-600 m-0">
                    404
                </H1Styled>
                <H1Styled>not found</H1Styled>
                <PStyled>
                    You may have mis-typed the URL. Or the page has been
                    removed. Actually, there is nothing to see here... Click on
                    the links below to do something, Thanks!
                </PStyled>
                <WrapperButtons>
                    <Link href="/" passHref>
                        <DefaultButton
                            as="a"
                            size="sm"
                            className="a-reset"
                            border>
                            <HomeIcon className="mr-2" />
                            go to home
                        </DefaultButton>
                    </Link>
                    <Link href="mailto:info@gmail.com" passHref>
                        <DefaultButton
                            as="a"
                            size="sm"
                            className="a-reset"
                            border>
                            <SendIcon className="mr-2" />
                            write us
                        </DefaultButton>
                    </Link>
                </WrapperButtons>
            </ContentStyled>
        </NotFoundStyled>
    );
}

export default NotFound;
