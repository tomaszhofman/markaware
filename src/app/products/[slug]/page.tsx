import { type Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ProductGetListItemDocument, ProductsSlugDocument } from "@/gql/graphql";
import { executeGraphQL } from "@/lib/graphql";
import { ColorSelector } from "@/components/ColorSelector";

export const generateMetadata = async ({
	params,
}: {
	params: { slug: string };
}): Promise<Metadata> => {
	const { product } = await executeGraphQL({
		query: ProductGetListItemDocument,
		variables: { slug: params.slug },
	});

	return {
		title: product?.name,
		openGraph: {
			title: product?.name,
		},
	};
};

export async function generateStaticParams() {
	const { products } = await executeGraphQL({ query: ProductsSlugDocument, variables: {} });
	return products.map(({ slug }) => ({ slug }));
}

export default async function ProductPage({
	params,
	searchParams,
}: {
	params: { slug: string };
	searchParams: { [key: string]: string };
}) {
	const { product } = await executeGraphQL({
		query: ProductGetListItemDocument,
		variables: { slug: params.slug },
	});

	if (!product) {
		notFound();
	}

	const addToCartAction = async (formData: FormData) => {
		"use server";
		console.log(searchParams.variant);
		console.log(formData);

		// const cart = getOrCreateCart();
		// await cartItem(cart.id, params.productId);
	};

	// const isAvailable = product.variants.some((variant) => variant.quantityAvailable);
	const selectedVariantId = searchParams.variant;

	const variant = product.variants.find(({ id }) => id === selectedVariantId);

	return (
		<div className="flex ">
			<div className="max-w-1/2 relative basis-6/12">
				<Image
					className="h-full w-full"
					src="https://media.graphassets.com/kz13SCRoQIHkcJDZRrrL"
					alt=""
					fill
					style={{
						objectFit: "cover",
					}}
				/>
			</div>
			<div className="basis-6/12 p-6">
				<div className="h-[calc(75vh-40px)] overflow-hidden p-12">
					<span className="mb-7 block text-sm">marka</span>
					<p className="mb-5 text-base">{product.name}</p>
					<div className="mb-8">
						<p className="text-xs">¥{product.price}(Tax included)</p>
					</div>
					<ColorSelector slug={params.slug} relatedProducts={product.relatedProducts} />
					<form action={addToCartAction}>
						{product.variants.map(({ size, id }) => {
							const isSelected = variant?.size?.name === size?.name;
							return (
								<Link
									className={isSelected ? "bg-red-600" : "bg-green-600"}
									key={size?.name}
									href={`?variant=${id}`}
								>
									{size?.name}
								</Link>
							);
						})}

						<div className="mt-7">
							<span className="mb-3 block text-xs">
								{variant ? `Only ${variant?.quantityAvailable} Remaining` : null}
							</span>
							<button
								type="submit"
								className="w-full rounded-3xl border border-black px-9 py-[7px] text-sm transition-all hover:opacity-70"
							>
								Add to Bag
							</button>
						</div>
					</form>
					<div className="text-xs">{product.description}</div>
					<div className="text-xs">{product.fabric}</div>
				</div>
			</div>
		</div>
	);
}

// function getOrCreateCart() {
// 	const cartId = cookies().get("cartId")?.value;
// 	if (!cartId) {
// 		//create a new cart s
// 		return;
// 	}

// 	// return existing cart id
// 	return {};
// }
