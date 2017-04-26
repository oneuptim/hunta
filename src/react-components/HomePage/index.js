import React from 'react'
import Typekit from 'react-typekit'
import ProductList from '../Products/ProductList'
import ProductItem from '../Products/ProductItem'
import NavBar from '../NavBar'
class HomePage extends React.Component {
	constructor () {
		super ()
		this.state = {
				productList: [
				{
					id: 1,
					name: 'Codecademy',
					link: 'https://codecademy.com',
					media: '/img/codecademy.jpg',
					upvote: 12069,
					description: 'The only thing I found in the fridge was a dead dove in a bag.',
					maker: {
						name: 'hieu',
						avatar: '/img/hieu.jpg'
					}
				},
				{
					id: 2,
					name: 'Plex',
					link: 'https://plexmedia.com',
					media: '/img/code4startup.jpg',
					upvote: 2059,
					description: 'Code for startups',
					maker: {
						name: 'hieu',
						avatar: '/img/leo.jpg'
					}
				},
				{
					id: 3,
					name: 'Pluralsight',
					link: 'https://codecademy.com',
					media: '/img/codecademy.jpg',
					upvote: 21,
					description: 'Code for anyone',
					maker: {
						name: 'hieu',
						avatar: '/img/kitty.png'
					}
				}
			]
		} // End this.state
	} // End constructor

	render () {
		return (
			<section>
				<header>
				</header>
				<section>
					<section className='container'>
					<NavBar />
						<h1>Product List</h1>
						{
							this.state.productList
							? <ProductList productList={this.state.productList} />
							: null
						}
						<Typekit kitId='rlh2gxh' />
					</section>
				</section>
			</section>
		)
	}
}

export default HomePage
