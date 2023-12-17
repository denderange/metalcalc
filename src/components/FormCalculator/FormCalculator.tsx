import { useState, useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form';
import { formFieldGenerator } from '../formFieldsGenerator/formFieldsGenerator';
import { useTranslation } from 'react-i18next'
import { applyFormulas } from '../../utils/formulas';
import styles from './FormCalculator.module.css'

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
		<div className='flex grow'>
			<form
				onSubmit={onSubmit}
				className={`mt-5 flex flex-col flex-grow justify-between`}
			>

				{/* function to create corresponding form fields : */}
				{formFieldGenerator(productKind, errors, register)}

				<div className='flex flex-col'>
					<h4 className='border-t mt-5 pt-2 text-center font-semibold text-l text-gray-600 leading-5'>
						{t('formCalculation.Результат')}:
					</h4>
					<div className='w-full py-1 px-4 mt-3 border border-gray-300 flex items-center flex-row justify-between bg-white shadow-md'>
						<div className='font-semibold text-slate-800'>
							{t('formCalculation.Вес')} :
						</div>
						<div className='font-semibold text-slate-800 text-lg'>{theResult}
							<span className='text-sm'>{' '}
								{t('formCalculation.кг')}.
							</span>
						</div>
					</div>

					<div className='text-center'>
						<button
							type="submit"
							disabled={!buttonEnabled}
							className={`${buttonEnabled ?
								'bg-amber-400 border-orange-400 hover:bg-amber-300 hover:border-orange-300 transition duration-300 text-orange-900 hover:text-orange-600'
								:
								'bg-slate-200 rounded-md border border-slate-300 text-slate-400 cursor-not-allowed'
								} 
									font-bold rounded-md border px-4 py-1 w-3/4 mt-5`
							}>
							{t('formCalculation.Рассчитать')}
						</button>
					</div>
				</div>

			</form>
		</div >
	)
}

export default FormCalculator

