import clsx from "clsx";
import Link from "next/link";
import { type RelatedProductsFragment } from "@/gql/graphql";

type Props = RelatedProductsFragment & { slug: string };

export const ColorSelector = ({ relatedProducts, slug }: Props) => {
	const currentProductColor = relatedProducts.find((product) => product.slug === slug)?.color?.name;

	return (
		<div>
			<p className="mb-1">Color: {currentProductColor}</p>
			<ul className="flex gap-2">
				{relatedProducts.map((product) => (
					<Link key={product.slug} href={`/products/${product.slug}`}>
						<li
							style={{ backgroundColor: product.color?.hex }}
							className={clsx(`h-5 w-5 cursor-pointer rounded-full`)}
						></li>
					</Link>
				))}
			</ul>
		</div>
	);
};
