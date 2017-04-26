import React from 'react'

class ProductItem extends React.Component {
	renderUpvoteButton () {
		return (
			<a className='upvote-button' href='#'>
				<span>
					<i className='fa fa-sort-asc'></i>
				</span>
				<br />
				{this.props.upvote}
			</a>
		)
	} // End upvote button

	renderNewWindowIcon () {
			return (
				<a className='product-item-link' href={this.props.link}>
					<span>
						<i className='fa fa-external-link'></i>
					</span>
				</a>
			)
	} // End new window link button


	renderMediaImage () {
		return (
			<img className='product-item-media' src={this.props.media} />
		)
	} // End media image Component

	renderInfoSession () {
		return (
			<section className='product-item-info'>
				<a href='#'>
					<h2>{this.props.name}</h2>
				</a>
				<p>{this.props.description}</p>
				<a href='#'>
					<span>{this.props.maker.name}</span>
					<img className='small-avatar' src={this.props.maker.avatar} />
				</a>
			</section>
		)
	} // Info session render

	render () {
		return (
			<li className='product-item'>
				{this.renderUpvoteButton()}
				{this.renderMediaImage()}
				{this.renderInfoSession()}
				{this.renderNewWindowIcon()}
			</li>
		)
	}
}

export default ProductItem
