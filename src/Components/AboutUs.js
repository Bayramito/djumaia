import { Component } from "react";

export default class AboutUs extends Component {
	render() {
		return (
			<div className="aboutbg   mx-auto ">
				<div className="flex mx-auto w-3/4">
					<div className="md:w-1/2 w-full text-center md:text-left ">
						<h1 className="py-8 fontMonteCarlo text-center md:text-left text-5xl">
							Hakkımızda
						</h1>
						<br />
						<p>Sizleri Ağırlamaktan Mutluyuz</p>
						<br />
						<p className="py-4">
							Turk mutfaginin vazgecilmez lezzetlerini yillardir Plovdivdeki
							karsilikli 2 subemizde uretip sizlere sunuyoruz.Pastanemiz adini
							1300'lu yillarda kurulan Cuma camisinden alir.Pastanemizin
							menusune ve fiyatlarina yukardaki kisimlardan ulasabilirsiniz
							.Urunlerimiz Turk tatlilari ve yemekleri oldugu icin urunler
							Turkiyeden gelir bunun sebebi Bu yiyeceklerin anavatani
							Turkiyedir.Pastanelerimizde Turk kulturunun icersinde bulunan ebru
							sanati gibi bircok detay bulunur
						</p>
					</div>
					<div className="w-1/2 md:inline hidden">
						<img
							src="https://www.pngplay.com/wp-content/uploads/1/Chef-PNG.png"
							alt="Baklava"
							className=""
						/>
					</div>
				</div>
			</div>
		);
	}
}
