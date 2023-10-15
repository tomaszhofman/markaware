import { ClientTest } from "@/components/ClientText";
import { ServerTest } from "@/components/TestServer";

export default function Home() {
	return (
		<>
			<div className="flex min-h-screen flex-col items-center justify-between p-24">
				W swoich dłoniach trzymałem kieliszek czerwonego wina, patrząc na zachód słońca za
				horyzontem. Niebo malowane było różnymi odcieniami różu i złota, tworząc malowniczą scenę,
				która wydawała się nierealna. Przemyślenia o dniu, który minął, i o tym, co przyszłość może
				przynieść, zapełniły moją głowę, dając mi chwilę zadumy.
			</div>

			<ClientTest>
				<ServerTest />
			</ClientTest>
		</>
	);
}
