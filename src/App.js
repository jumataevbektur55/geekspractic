import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import Image from './conponents/Image'

function App() {
	const [datas, setDatas] = useState([])
	function getProduct() {
		axios(`https://pokeapi.co/api/v2/pokemon/`).then(res => {
			setDatas(res.data.results)
			console.log(res.data.results);
		})
	}

	useEffect(() => {
		getProduct()
	}, [])
	return (
		<div className='App'>
			<div className='header container'>
				<div className='neader_nav'>
					<div className='top'>
						<div className='top_nav'>
						<div className='topH1'>
							<h1>GEEKS</h1>
						</div>
						<div className='fff'>
							{datas.slice(0, 6).map(el => (
								<div className='block'>
									<Image url={el.url} key={el.url} />
									<h3>{el.name}</h3>
								</div>
								
							))}
						</div>
					</div>
					<div  className='text'>
						<div className='title'>
						<h1>Сделать Pokemon лист с помощью  <br/> CRA(create-react-app) или на Vite <br/> React:</h1>
						</div>
						<div className='text2'> 
						<h2>1. сверстать карточку покеианов</h2>
						<h2>1. сверстать карточку покеианов</h2>
						<h2>1. сверстать карточку покеианов</h2>
						</div>
					</div>

					</div>
				</div>
			</div>
		</div>
	)
}

export default App
