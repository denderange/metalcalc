import { useTranslation } from 'react-i18next'
import type { RootState } from '../../store/store'
import { useSelector } from 'react-redux'
import styles from './InputField.module.css'

type Props = {
	name: string,
	label: string,
	register: any,
	errors: any,
	type: string,
}

const InputField = ({ name, label, register, errors, type }: Props) => {
	const { t } = useTranslation()
	const metric = useSelector((state: RootState) => state.appState.demensions)

	return (
		<div className={styles["param-input-container"]}>
			<label
				htmlFor={name}
				className={styles["param-input-label"]}
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
				className={`${errors[name] ? styles["input-error"] : null} ${styles["param-input"]}`}
			/>
			<span className={styles["param-input-span"]}>
				{name !== 'quantity' ?
					(metric === "millimeters" ? `${t('мм')}` : "in") :
					`${t('шт')}`
				}
			</span>
		</div>
	)
};
export default InputField