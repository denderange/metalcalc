import styles from './InputField.module.css'
import { useTranslation } from 'react-i18next'

type Props = {
	name: string,
	label: string,
	register: any,
	errors: any,
	type: string,
}

const InputField = ({ name, label, register, errors, type }: Props) => {
	const { t } = useTranslation()

	return (
		<div className={styles[""]}>
			<label
				htmlFor={name}
				className={styles[""]}
			>
				{label}
			</label>

			<input
				id={name}
				name={name}
				type={type}
				step={0.0001}
				{...register(name, {
					min: 0.0001,
					minLength: 1,
					required: true,
				})}
				className={`${errors[name] ? styles[""] : null} ${styles[""]}`}
			/>
			<span className={styles[""]}>
				{name !== 'quantity' ? `${t('мм')}` : `${t('шт')}`}
			</span>
		</div>
	)
};
export default InputField