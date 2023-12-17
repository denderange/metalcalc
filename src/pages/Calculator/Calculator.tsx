import { useState, MouseEvent } from 'react'
import { catalogue } from '../../utils/catalogue'
import product from '../../locales/ru.json'
import { useTranslation } from 'react-i18next'
// import FormCalculator from '../components/FormCalculator'
import styles from './Calculator.module.css'

const Calculator = () => {
	const { t, i18n } = useTranslation()
	const [language, setLanguage] = useState('en')
	const [currentProduct, setCurrentProduct] = useState('')
	const [currentMetal, setCurrentMetal] = useState('')
	const [imgLink, setImgLink] = useState<string>(catalogue['imgDefault'].image)
	const amountMetalKind: number = Object.keys(product.kindMetal).length

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
		setCurrentProduct(e.currentTarget.id)

		const activeProduct: (HTMLElement | null) = document.getElementById(currentProduct)
		activeProduct?.classList.remove('isActiveProduct')
		e.currentTarget.classList.add('isActiveProduct')
	}

	const handleSetCurrentMetal = (e: MouseEvent<HTMLButtonElement>): void => {
		setCurrentMetal(e.currentTarget.id)

		const activeMetal: (HTMLElement | null) = document.getElementById(currentMetal)
		activeMetal?.classList.remove('isActiveMetal')
		e.currentTarget.classList.add('isActiveMetal')
	}
	return (
		<div className={styles[""]}>

			<header className={styles[""]}>
				<button className={styles[""]}
					onClick={() => handleSwitchLanguage(language)}
				>
					{language.toUpperCase()}
				</button>
				<h1 className={styles[""]}>
					{t('Калькулятор металлопроката')}
				</h1>
			</header>

			<div className={styles[""]}>

				{/* LEFT MENU AND IMAGES : */}
				<div className={styles[""]}>
					<div className={styles[""]}>
						<img
							src={imgLink}
							alt={currentProduct ? catalogue[currentProduct].alt : 'img'}
							className={styles[""]}
						/>
					</div>

					<nav>
						<ul>
							{Object.keys(product.kindProduct).map(item => (
								<li key={item}>
									<button
										className={styles[""]}
										id={item}
										onClick={handleSetCurrentProduct}
									>
										{t(`kindProduct.${item}`)}
									</button>
								</li>
							))}
						</ul>
					</nav>
				</div>

				{/* RIGHT SIDE : */}
				<div className={styles[""]}>
					<nav>
						<ul
							className={`grid grid-flow-col grid-cols-${amountMetalKind} gap-1 text-center`}
						>
							{Object.keys(product.kindMetal).map(item => (
								<li key={item}>
									<button className={styles[""]}
										id={item}
										onClick={handleSetCurrentMetal}
									>
										{t(`kindMetal.${item}`)}
									</button>
								</li>
							))}
						</ul>
					</nav>

					<div className={styles[""]}>
						<div className={styles[""]}>
							<h4 className={styles[""]}>
								{t('Параметры расчёта')}:
							</h4>

							<div className={styles[""]}>
								<span className={styles[""]}>
									{t('изделие')}:{" "}
								</span>
								{currentProduct ? (
									<span className={styles[""]}>
										{t(`kindProduct.${currentProduct}`)}
									</span>
								) : (
									<span className={styles[""]}>
										{t('не выбрано')}
									</span>
								)}
							</div>
							<div className={styles[""]}>
								<span className={styles[""]}>
									{t('материал')}:{" "}
								</span>
								{currentMetal ? (
									<span className={styles[""]}>
										{t(`kindMetal.${currentMetal}`)}
									</span>
								) : (
									<span className={styles[""]}>
										{t('не выбрано')}
									</span>
								)}
							</div>

							<div className={styles[""]}>
								{/* <FormCalculator
									productKind={currentProduct}
									productMetal={currentMetal}
								/> */}
								---Form calculator---
							</div>

						</div>
					</div>

				</div>
			</div>

			<div className={styles[""]}>
				<h6 className={styles[""]}>
					&copy; Dennis Polukaroff, 2023
				</h6>
				<a
					href="https://github.com/denderange/calcmetall1"
					className={styles[""]}
				>
					source on Github
				</a>
			</div>
		</div>
	)
}

export default Calculator