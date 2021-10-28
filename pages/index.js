import Link from "next/link";

export default function Index() {
    return (
        <div>
            <Link href="/about"><a>About</a></Link>
            <h1>Hello from Index Page</h1>
        </div>
    )
}