import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './SwitchDemensions.module.css'

const SwitchDemensions = () => {
	const [metric, setMetric] = useState(true)
	const { t, i18n } = useTranslation()

	const switchDemensions = () => {
		setMetric(!metric)
	}

	return (
		<>
			<label className={styles["switch-label"]}>
				<input
					type="checkbox"
					onChange={switchDemensions}
					className={styles["switch-input"]}
				/>
				<span className={`${styles["switch-span"]} ${metric && styles["switch-span--active"]}`}>
					{t('миллиметры')}
				</span>
				<span className={`${styles["switch-span"]} ${!metric && styles["switch-span--active"]}`}>
					{t('дюймы')}
				</span>
			</label>
		</>
	)
}

export default SwitchDemensions