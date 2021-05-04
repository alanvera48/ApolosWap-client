const d = document;

function toggle () {
	let $toggle = d.querySelector('.toggle');
	let $nav = d.querySelector('.nav-ul');

	$toggle.addEventListener('click', e =>{
		$nav.classList.toggle('active')		
	})

}



let limitDate1 = 'May 10, 2021 16:00:00';

function CountDownClock1() {
	let $countdown = d.getElementById('cuenta');
	let $containerCountdow = d.querySelector('.box1');
	let countdownDate = new Date(limitDate1).getTime();

	let countdownTempo  = setInterval(()=>{
		let now = new Date().getTime(),
		limitDate1 = countdownDate - now,
		days = Math.floor(limitDate1/(1000*60*60*24)) < 10 ? "0" + Math.floor(limitDate1/(1000*60*60*24)): Math.floor(limitDate1/(1000*60*60*24)) ,
		hours = ("0" + Math.floor((limitDate1 % (1000*60*60*24))/(1000*60*60))).slice(-2),
		minutes= ("0" + Math.floor((limitDate1 % (1000*60*60))/(1000*60))).slice(-2) ,
		seconds = ("0" + Math.floor((limitDate1 % (1000*60))/(1000))).slice(-2) ;

		$countdown.innerHTML = `<div class="simply-section simply-days-section">
				<div>
					<span class="simply-amount">${days}</span>
					<span class="simply-word">DAYS</span>
				</div>
			</div>
			<div class="simply-section simply-hours-section">
				<div>
					<span class="simply-amount">${hours}</span>
					<span class="simply-word">HOURS</span>
				</div>
			</div>
			<div class="simply-section simply-minutes-section">
				<div>
					<span class="simply-amount">${minutes}</span>
					<span class="simply-word">MINUTES</span>
				</div>
			</div>
			<div class="simply-section simply-seconds-section">
				<div>
					<span class="simply-amount">${seconds}</span>
					<span class="simply-word">SECONDS</span>
				</div>
			</div>`;


		if(limitDate1 <= 0){
			clearInterval(countdownTempo);

			$containerCountdow.innerHTML = `<div class="message mensaje1">
						<h3>BUY LIRA TOKEN IN</h3>
						<a href="https://bounce.finance/">BOUNCE.FINANCE</a>
					</div> `;

		}

	},1000);
}



let limitDate2 = 'May 16, 2021 16:00:00';

function CountDownClock2() {
	let $countdown = d.getElementById('launch');
	let $spanCount= d.querySelector('.start');
	let countdownDate = new Date(limitDate2).getTime();

	let countdownTempo  = setInterval(()=>{
		let now = new Date().getTime(),
		limitDate2 = countdownDate - now,
		days = Math.floor(limitDate2/(1000*60*60*24)) < 10 ? "0" + Math.floor(limitDate2/(1000*60*60*24)): Math.floor(limitDate2/(1000*60*60*24)) ,
		hours = ("0" + Math.floor((limitDate2 % (1000*60*60*24))/(1000*60*60))).slice(-2),
		minutes= ("0" + Math.floor((limitDate2 % (1000*60*60))/(1000*60))).slice(-2) ,
		seconds = ("0" + Math.floor((limitDate2 % (1000*60))/(1000))).slice(-2) ;

		$countdown.innerHTML = `<div class="simply-section simply-days-section">
				<div>
					<span class="simply-amount">${days}</span>
					<span class="simply-word">DAYS</span>
				</div>
			</div>
			<div class="simply-section simply-hours-section">
				<div>
					<span class="simply-amount">${hours}</span>
					<span class="simply-word">HOURS</span>
				</div>
			</div>
			<div class="simply-section simply-minutes-section">
				<div>
					<span class="simply-amount">${minutes}</span>
					<span class="simply-word">MINUTES</span>
				</div>
			</div>
			<div class="simply-section simply-seconds-section">
				<div>
					<span class="simply-amount">${seconds}</span>
					<span class="simply-word">SECONDS</span>
				</div>
			</div>`;


		if(limitDate2 <= 0){
			clearInterval(countdownTempo);
			$spanCount.innerHTML = '';
			$countdown.innerHTML = `<div class="message mensaje1">
						<h3>Launch apoloswap platform stake LIRA tokens and earn dinarchain DAR</h3>
					</div> `;

		}

	},1000);
}




d.addEventListener('scroll', ()=>{
	if(d.documentElement.scrollTop > 200){
		d.querySelector('.go-top-container').classList.add('show');
	}else{
		d.querySelector('.go-top-container').classList.remove('show');
	}
})

d.querySelector('.go-top-container').addEventListener('click', ()=>{
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	})
})

d.querySelector('.launch-button').addEventListener('click', ()=>{
	d.querySelector('.box2').classList.remove('box-2-none')
})



d.querySelector('.fa-times').addEventListener('click', ()=>{
	d.querySelector('.box2').classList.add('box-2-none')


})



	
function buscarImagen (image) {
	if(image == "Bitcoin"){
		return  image = "./assets/img/criptomonedas/bitcoin-logo.svg"
	}else if(image == "Ethereum"){
		 return image = "./assets/img/criptomonedas/ethereum.svg"
	}else if(image == "Tether"){
		return image = "./assets/img/criptomonedas/tether.svg"
	}else if(image == "Ripper"){
		return image = "./assets/img/criptomonedas/ripple.svg"
	}else if(image == "Cardano"){
		return image = "./assets/img/criptomonedas/cardano.svg"
	}else if(image == "Dogecoin"){
		return image = "./assets/img/criptomonedas/DogeCoin.svg"
	}else if(image == "Polkadot"){
		return image = "./assets/img/criptomonedas/polkadot.svg"
	}else if(image == "Uniswap"){
		return image = "./assets/img/criptomonedas/uniswap.svg"
	}else if(image == "Litecoin"){
		return image = "./assets/img/criptomonedas/litecoin.svg"
	}else if(image == "Chainlink"){
		return image = "./assets/img/criptomonedas/chainlink.svg"
	}else if(image == "VeChain"){
		return image = "./assets/img/criptomonedas/Ven.svg"
	}else if(image == "Solana"){
		return image = "./assets/img/criptomonedas/solana.svg"
	}else if(image == "Stellar"){
		return image = "./assets/img/criptomonedas/stellar.svg"
	}else if(image == "TRON"){
		return image = "./assets/img/criptomonedas/tron.svg"
	}else if(image == "Monero"){
		return image = "./assets/img/criptomonedas/Monero.svg"
	}else if(image == "Neo"){
		return image = "./assets/img/criptomonedas/Neo.svg"
	}else if(image == "EOS"){
		return image = "./assets/img/criptomonedas/EOS.svg"
	}else if(image == "IOTA"){
		return image = "./assets/img/criptomonedas/iotoLogo.svg"
	}else if(image == "Aave"){
		return image = "./assets/img/criptomonedas/aave.svg"
	}else if(image == "Cosmos"){
		return image = "./assets/img/criptomonedas/cosmos.svg"
	}else if(image == "Maker"){
		return image = "./assets/img/criptomonedas/maker.svg"
	}else if(image == "Dai"){
		return image = "./assets/img/criptomonedas/dai.svg"
	}else if(image == "Filecoin"){
		return image = "./assets/img/criptomonedas/filecoin.svg"
	}else if(image == "binancecoin"){
		return image = "./assets/img/criptomonedas/binance.svg"
	}else if(image == "pancakeswap-token"){
		return image = "./assets/img/criptomonedas/pancakeswap.svg"
	}
}





	
function buscarSimbolo (symbol) {
	if(symbol == "Bitcoin"){
		return  symbol = "BTC"
	}else if(symbol == "Ethereum"){
		 return symbol = "ETH"
	}else if(symbol == "Tether"){
		return symbol = "USDT"
	}else if(symbol == "Ripper"){
		return symbol = "XRP"
	}else if(symbol == "Cardano"){
		return symbol = "ADA"
	}else if(symbol == "Dogecoin"){
		return symbol = "DOGE"
	}else if(symbol == "Polkadot"){
		return symbol = "DOT"
	}else if(symbol == "Uniswap"){
		return symbol = "UNI"
	}else if(symbol == "Litecoin"){
		return symbol = "LTC"
	}else if(symbol == "Chainlink"){
		return symbol = "LINK"
	}else if(symbol == "VeChain"){
		return symbol = "VET"
	}else if(symbol == "Solana"){
		return symbol = "SOL"
	}else if(symbol == "Stellar"){
		return symbol = "XLM"
	}else if(symbol == "TRON"){
		return symbol = "TRX"
	}else if(symbol == "Monero"){
		return symbol = "XMR"
	}else if(symbol == "Neo"){
		return symbol = "NEO"
	}else if(symbol == "EOS"){
		return symbol = "EOS"
	}else if(symbol == "IOTA"){
		return symbol = "MIOTA"
	}else if(symbol == "Aave"){
		return symbol = "AAVE"
	}else if(symbol == "Cosmos"){
		return symbol = "ATOM"
	}else if(symbol == "Maker"){
		return symbol = "MKR"
	}else if(symbol == "Dai"){
		return symbol = "DAI"
	}else if(symbol == "Filecoin"){
		return symbol = "FIL"
	}else if(symbol == "binancecoin"){
		return symbol = "BNB"
	}else if(symbol == "pancakeswap-token"){
		return symbol = "CAKE"
	}
}


function callApiCryto () {

 	$carrousel = d.querySelector('.carrousel');

 	let $monedas = ["Bitcoin",
 	            "binancecoin",
 	            "dollar",
				"Ethereum",
				"Tether",
				"Ripper",
				"Cardano",
				"Dogecoin",
				"Polkadot",
				"Uniswap",
				"Litecoin",
				"Chainlink",
				"VeChain",
				"Solana",
				"Stellar",
				"Filecoin",
				"TRON",
				"Monero",
				"Neo",,
				"EOS",
				"IOTA",
				"Aave",
				"Cosmos",
				"Maker",
				"Dai",
				"pancakeswap-token"
				];	

	$monedas.forEach((element)=> {
			
			cotizacionMoneda =" ";	

			fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${element}&vs_currencies=kwd`)
			.then(res => res.json())
			.then((coin) => {
				coinPrecio = Object.values(coin);

				if(element=="dollar"){
					cotizacionMoneda+=`<li class="cotizacion-box">KWD = 3.32 USD<span class="separador">|</span></li>`
				}else{

				cotizacionMoneda += `<li class="cotizacion-box"><img src="${buscarImagen(element)}" alt="">${buscarSimbolo(element)}  =  ${coinPrecio[0].kwd} KWD<span class="separador">|</span></li>`;
				$carrousel.innerHTML = cotizacionMoneda;

				}
			})


			
		})


		
		
}








d.addEventListener('DOMContentLoaded',  e=>{
	toggle();
	CountDownClock1();
	CountDownClock2();
	callApiCryto () 




})


