import './Button.css'

type ButtonProps = {
	text: string,
	styleClasses: string,
	handleClick?: any,
	id?: string,
	type?: "reset" | "submit" | "button",
	disabled?: boolean
}

const Button = ({ text, handleClick, styleClasses, id, type, disabled }: ButtonProps) => {
	return (
		<button
			className={styleClasses}
			id={id}
			onClick={handleClick}
			disabled={disabled}
			type={type}
		>
			{text}
		</button>
	)
}

export default Button