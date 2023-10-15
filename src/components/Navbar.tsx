import Link from "next/link";
import { Logo } from "./Logo";

export const Navbar = () => {
	return (
		<header className="h-16 border-b ">
			<nav className="flex h-full items-center justify-between px-8">
				<ul className="flex">
					<li className="px-4 text-xs">
						<Link href={{ pathname: "/shop" }}>Shop</Link>
					</li>
					<li className="px-4 text-xs">
						<Link href={{ pathname: "/about" }}>About</Link>
					</li>
				</ul>
				<Logo />
				<ul className="flex">
					<li className="px-4 text-xs">EN</li>
					<li className="px-4 text-xs">Log in</li>
				</ul>
			</nav>
		</header>
	);
};
