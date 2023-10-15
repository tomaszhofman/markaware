//prducts/t-shirt/3

export default function SingleProductPage({
	params,
}: {
	params: { category: string; page: string };
}) {
	return (
		<h1>
			Product kategori {params.category} {params.page}
		</h1>
	);
}

export const generateStaticParams = () => {
	return [
		{
			category: "t-shirts",
			page: "1",
		},
	];
};

// export const generateStaticParams = () => {
// 	return [
// 		{
// 			page: "1",
// 		},
// 	];
// };
