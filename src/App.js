import AboutUs from "./Components/AboutUs";
import Comments from "./Components/Comments";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Menu from "./Components/Menu";

function App() {
	return (
		<div>
			<Header />
			<Menu />

			<Comments
				client="Kambi Kambi"
				clientProfile="https://lh3.googleusercontent.com/a-/AOh14GjfFJAGdTlzELSNwXMMUCK9LxhkcBdfpDjQvfBs=w36-h36-p-c0x00000000-rp-mo-ba6-br100"
				clientCom="Genuine, authentic Turkish sweet shop.
Sheker pare is reaaaly genuine. I can say it’s better than in Istanbul.
Turkish coffee is also one of a kind.
But the best is Ashure and also kazan gibi!
It’s a 100% must!
Definitely come every time when I’m around."
			/>

			<Comments
				client="Artur Omay	"
				clientProfile="https://lh3.googleusercontent.com/a/AATXAJwnqJ50oAe5GpZpyQ7lRPcpdhJ5uT9YXbgtEF-k=w36-h36-p-c0x00000000-rp-mo-ba3-br100"
				clientCom="Plovdivde caminin hemen altında bir Cafe Turkce konuşan ve özellikle trakya şivesi duymak istiyorsanız kısa molalar da mükemmel"
			/>

			<AboutUs />

			<Footer />
		</div>
	);
}

export default App;
