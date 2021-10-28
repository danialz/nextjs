import Link from "next/link";

const headerStyle = {
    marginRight: 5
};

const Header = () => {
    return (<div>
        <Link href="/" style={headerStyle}><a>Home</a></Link>
        <Link href="/about"><a style={headerStyle}>About</a></Link>
    </div>)
}

export default Header;