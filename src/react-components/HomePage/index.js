import React from 'react'
import Typekit from 'react-typekit'

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
					description: 'The only thing I found in the fridge was a dead dove in a bag. So maybe you could start jete-ing, and stop je-terrorizing me! A million ****ing diamonds!',
					maker: {
						name: 'hieu',
						avatar: '/img/hieu.jpg'
					}
				},
				{
					id: 2,
					name: 'Plex',
					link: 'https://plexmedia.com',
					media: '/img/codecademy.jpg',
					upvote: 169,
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
					upvote: 169,
					description: 'Code for anyone',
					maker: {
						name: 'hieu',
						avatar: '/img/hieu.jpg'
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
						<ul className='product-list'>
							<li className='product-item'>
								<a className='upvote-button' href='#'>
									<span>
										<i className='fa fa-sort-asc'></i>
									</span>
									<br />
									{this.state.productList[0].upvote}
								</a>
								<img className='product-item-media' src={this.state.productList[0].media} />
								<section className='product-item-info'>
									<a href='#'>
										<h2>{this.state.productList[0].name}</h2>
									</a>
									<p>{this.state.productList[0].description}</p>
									<a href='#'>
										<img className='small-avatar' scr={this.state.productList[0].maker.avatar} />
									</a>
								</section>
								<a className='product-item-link' href={this.state.productList[0].link}>
									<span>
										<i className='fa fa-external-link'></i>
									</span>
								</a>
							</li>
						</ul>
						<Typekit kitId='rlh2gxh' />
					</section>
				</section>
			</section>
		)
	}
}

export default HomePage
