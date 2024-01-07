import { useState, MouseEvent } from 'react'
import Footer from '../../components/Footer/Footer'
import Button from '../../components/Button/Button'
import FormCalculator from '../../components/FormCalculator/FormCalculator'
import SwitchDemensions from '../../components/SwitchDemensions/SwitchDemensions'
import { catalogue } from '../../utils/catalogue'
import { useTranslation } from 'react-i18next'
import product from '../../locales/ru.json'
import styles from './Calculator.module.css'
import type { RootState } from '../../store/store'
import { useSelector, useDispatch } from 'react-redux'
import { switchProduct, switchMetal } from '../../store/appStateSlice'

const Calculator = () => {
	const { t, i18n } = useTranslation()
	const [language, setLanguage] = useState('en')

	const currentProduct = useSelector((state: RootState) => state.appState.product)
	const currentMetal = useSelector((state: RootState) => state.appState.metal)
	const dispatch = useDispatch()

	const [imgLink, setImgLink] = useState<string>(catalogue['imgDefault'].image)

	const handleSwitchLanguage = (lang: string): void => {
		switch (lang) {
			case 'ru':
				i18n.changeLanguage('ru')
				setLanguage('en')
				break
			case 'en':
				i18n.changeLanguage('en')
				setLanguage('ru')
				break
		}
	}

	const handleSetCurrentProduct = (e: MouseEvent<HTMLButtonElement>): void => {
		setImgLink(catalogue[e.currentTarget.id].image)
		dispatch(switchProduct(e.currentTarget.id))

		const activeProduct: (HTMLElement | null) = document.getElementById(currentProduct)
		activeProduct?.classList.remove('btn-product-active')
		e.currentTarget.classList.add('btn-product-active')
	}

	const handleSetCurrentMetal = (e: MouseEvent<HTMLButtonElement>): void => {
		dispatch(switchMetal(e.currentTarget.id))

		const activeMetal: (HTMLElement | null) = document.getElementById(currentMetal)
		activeMetal?.classList.remove('btn-metal-active')
		e.currentTarget.classList.add('btn-metal-active')
	}

	return (
		<div className={"wrapper"}>
			<header className={styles["header"]}>
				<div className={styles["header_buttons"]}>
					<Button
						styleClasses="btn-header"
						text={language.toUpperCase()}
						handleClick={() => handleSwitchLanguage(language)}
					/>
					<SwitchDemensions />
				</div>
				<h1 className={styles["header__title"]}>
					{t('Калькулятор металлопроката')}
				</h1>
			</header>

			<main className={`${styles["container"]} ${styles["calc-container"]}`}>

				{/* LEFT MENU AND IMAGES : */}
				<section className={styles["section-nav"]}>
					<div className={styles["section-nav__image-container"]}>
						<img
							src={imgLink}
							alt={currentProduct ? catalogue[currentProduct].alt : 'img'}
							className={styles["section-nav__image"]}
						/>
					</div>

					<nav>
						<ul>
							{Object.keys(product.kindProduct).map(item => (
								<li key={item}>
									<Button
										styleClasses="btn-product"
										id={item}
										text={t(`kindProduct.${item}`)}
										handleClick={handleSetCurrentProduct}
									/>
								</li>
							))}
						</ul>
					</nav>
				</section>

				{/* RIGHT SIDE : */}
				<section className={styles["content"]}>
					<nav className={styles["content__nav"]}>
						<ul className={styles["content__nav__list"]}>
							{Object.keys(product.kindMetal).map(item => (
								<li key={item}>
									<Button
										styleClasses="btn-metal"
										id={item}
										text={t(`kindMetal.${item}`)}
										handleClick={handleSetCurrentMetal}
									/>
								</li>
							))}
						</ul>
					</nav>

					<div className={styles["container-result"]}>
						<h2 className={styles["result__title"]}>
							{t('Параметры расчёта')}:
						</h2>

						<div className={styles["params"]}>
							<p>
								<span className={styles["params-item"]}>
									{t('изделие')}:{" "}
								</span>
								{currentProduct ? (
									<span className={styles["params-chosen"]}>
										{t(`kindProduct.${currentProduct}`)}
									</span>
								) : (
									<span className={styles["params-blank"]}>
										{t('не выбрано')}
									</span>
								)}
							</p>
							<p>
								<span className={styles["params-item"]}>
									{t('материал')}:{" "}
								</span>
								{currentMetal ? (
									<span className={styles["params-chosen"]}>
										{t(`kindMetal.${currentMetal}`)}
									</span>
								) : (
									<span className={styles["params-blank"]}>
										{t('не выбрано')}
									</span>
								)}
							</p>
						</div>

						<FormCalculator
							productKind={currentProduct}
							productMetal={currentMetal}
						/>
					</div>
				</section>
			</main>

			<Footer />
		</div>
	)
}

export default Calculator