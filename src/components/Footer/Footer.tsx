import './Footer.css'

const Footer = () => {
	return (
		<footer className={"footer"}>
			<h6 className={"footer__title"}>
				&copy; Dennis Polukaroff, {new Date().getFullYear()}
			</h6>
			<a
				href="https://github.com/denderange/metalcalc"
				className={"footer__link"}
				target="_blank"
			>
				&rarr; source on Github
			</a>
		</footer>
	)
}

export default Footer