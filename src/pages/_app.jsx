// pages/_app.js
import Link from "next/link";
import "../app/globals.css";

function MyApp({ Component, pageProps }) {
		return (
				<div>
						<ul style={{ display: "flex", gap: "10px", margin: "10px", listStyle: "none" }}>
								<li><Link style={{ border: "1px solid black", padding: '5px', borderRadius: "12px", backgroundColor: "yellow"}} href="/">Home</Link></li>
								<li><Link style={{ border: "1px solid black", padding: '5px', borderRadius: "12px", backgroundColor: "yellow"}} href="/login">Sign In</Link></li>
								<li><Link style={{ border: "1px solid black", padding: '5px', borderRadius: "12px", backgroundColor: "yellow"}} href="/signup">Sign Up</Link></li>
						</ul>
						<Component {...pageProps} />
				</div>
		);
}

export default MyApp;
