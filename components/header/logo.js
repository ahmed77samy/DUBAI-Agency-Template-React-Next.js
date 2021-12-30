import Image from "next/image";
import Link from "next/link";

/**
 * {@inheritdoc}
 * @returns {React.Component}
 */
function Logo() {
    return (
        <Link href="/">
            <a title="DUBAI">
                <Image
                    src="/img/logo/logo.png"
                    alt="logo"
                    width={154}
                    height={43}
                    priority
                />
            </a>
        </Link>
    );
}

export default Logo;
