import { useState, useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form';
import { formFieldGenerator } from '../formFieldsGenerator/formFieldsGenerator';
import { useTranslation } from 'react-i18next'
import { applyFormulas } from '../../utils/formulas';
import styles from './FormCalculator.module.css'
import Button from '../Button/Button';

type Props = {
	productKind: string, // Вид изделия (наименование): труба, арматура и т.д
	productMetal: string // Из какого металла: нержавейка, медь и т.д.
}

type formValues = {
	diameter?: number, // Диаметр трубы/прутка
	itemLength?: number, // Длина
	width?: number, // Ширина
	height?: number // Высота
	thickness?: number, // Толщина
	lintelThickness?: number, // Толщина перемычки (балки)
	shelfThickness?: number, // Толщина полок (балки)
	wallThickness?: number, // Толщина стенки трубы/уголка
	quantity?: number, // Количество
	numberDiameter?: number// Размер шестигранника
}

const FormCalculator = ({ productKind, productMetal }: Props) => {
	const { t } = useTranslation()
	const [theResult, setTheResult] = useState<number | string>(0.000)
	const [buttonEnabled, setButtonEnabled] = useState<boolean>(false)
	const productRef = useRef<string>('')
	const prevProduct = productRef.current

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<formValues>()

	const onSubmit = handleSubmit((data) => {
		console.log(productKind);
		console.log(data);
		const calculations: any = applyFormulas(productKind, productMetal, data)
		console.log(calculations);


		if (calculations) {
			setTheResult(calculations)
		} else (console.log('ERROR !!!')
			// alert('You are watching this message because the developer made a mistake and will be severely punished.')
		)
	})

	useEffect(() => {
		productRef.current = productKind

		if (productKind && productMetal) {
			setButtonEnabled(true)
		}
		if (productKind !== prevProduct) {
			reset()
			setTheResult(0.000)
		}
	}, [productKind, productMetal])

	return (
		<form
			onSubmit={onSubmit}
			className={styles["form-calc"]}
		>

			<div className={styles["form-calc__inputs"]}>
				{formFieldGenerator(productKind, errors, register)}
			</div>

			<div className={styles["form-calc__result"]}>
				<h4 className={styles["form-calc__result-title"]}>
					{t('formCalculation.Результат')}:
				</h4>

				<div className={styles["show-result"]}>
					<div className={styles["show-result__weight"]}>
						{t('formCalculation.Вес')} :
					</div>
					<div>{theResult}
						<span className={styles["show-result__span"]}>{' '}
							{t('formCalculation.кг')}.
						</span>
					</div>
				</div>

				<Button
					// styleClasses={"btn-calculate"}
					styleClasses={buttonEnabled ? "btn-calculate" : "btn-disabled"}
					text={t('formCalculation.Рассчитать')}
					type="submit"
					disabled={!buttonEnabled}
				/>
			</div>
		</form>
	)
}

export default FormCalculator

