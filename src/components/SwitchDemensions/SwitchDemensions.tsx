import { useTranslation } from 'react-i18next'
import type { RootState } from '../../store/store'
import { useSelector, useDispatch } from 'react-redux'
import { switchDemension } from '../../store/appStateSlice'
import styles from './SwitchDemensions.module.css'

const SwitchDemensions = () => {
	const metric = useSelector((state: RootState) => state.appState.demensions)
	const dispatch = useDispatch()
	const { t, i18n } = useTranslation()

	const switchDemensions = () => {
		metric === 'millimeters' ? dispatch(switchDemension(false)) : dispatch(switchDemension(true))
	}

	return (
		<>
			<label className={styles["switch-label"]}>
				<input
					type="checkbox"
					onChange={switchDemensions}
					className={styles["switch-input"]}
				/>
				<span className={`${styles["switch-span"]} ${metric === "millimeters" && styles["switch-span--active"]}`}>
					{t('миллиметры')}
				</span>
				<span className={`${styles["switch-span"]} ${metric === "inches" && styles["switch-span--active"]}`}>
					{t('дюймы')}
				</span>
			</label>
		</>
	)
}

export default SwitchDemensions