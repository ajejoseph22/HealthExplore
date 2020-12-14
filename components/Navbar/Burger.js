/**
 * Burger button
 */
const Burger = props => {
	
	const onClickHandler = function () {
		return props.onClick();
	}

	return (
		<button className="menu-burger" onClick={onClickHandler}>
			<i className="fa fa-bars"></i>
		</button>
	)
}

export default Burger;