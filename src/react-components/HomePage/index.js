import React from 'react'
import Typekit from 'react-typekit'
import ProductList from '../Products/ProductList'
import ProductItem from '../Products/ProductItem'

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
					upvote: 169,
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
					<img src='/img/banner.jpg' width='100%' />
				</header>
				<section>
					<section className='container'>
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
