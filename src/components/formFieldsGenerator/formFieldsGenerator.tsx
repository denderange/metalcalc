import styles from './formFieldsGenerator.module.css'
import InputField from '../InputField/InputField'
import { useTranslation } from 'react-i18next'

export const formFieldGenerator = (productKind: string, errors: any, register: any) => {
	const { t } = useTranslation()

	switch (productKind) {

		case 'труба круглая':
			return (
				<div>
					<InputField
						type="number"
						name="diameter"
						label={t(`formCalculation.${"внешний диаметр"}`)}
						errors={errors}
						register={register}
					/>
					<InputField
						type="number"
						name="wallThickness"
						label={t(`formCalculation.${"толщина стенки"}`)}
						errors={errors}
						register={register}
					/>
					<InputField
						type="number"
						name="itemLength"
						label={t(`formCalculation.${"длина"}`)}
						errors={errors}
						register={register}
					/>
				</div>
			)

		case 'труба профильная':
			return (
				<div>
					<InputField
						type="number"
						name="width"
						label={t(`formCalculation.${"ширина"}`)}
						errors={errors}
						register={register}
					/>
					<InputField
						type="number"
						name="height"
						label={t(`formCalculation.${"высота"}`)}
						errors={errors}
						register={register}
					/>
					<InputField
						type="number"
						name="wallThickness"
						label={t(`formCalculation.${"толщина стенки"}`)}
						errors={errors}
						register={register}
					/>
					<InputField
						type="number"
						name="itemLength"
						label={t(`formCalculation.${"длина"}`)}
						errors={errors}
						register={register}
					/>
				</div>
			)

		case 'балка (двутавр)':
			return (
				<div>
					<InputField
						type="number"
						name='width'
						label={t(`formCalculation.${"ширина"}`)}
						errors={errors}
						register={register}
					/>
					<InputField
						type="number"
						name='height'
						label={t(`formCalculation.${"высота"}`)}
						errors={errors}
						register={register}
					/>
					<InputField
						type="number"
						name='lintelThickness'
						label={t(`formCalculation.${"толщина перемычки"}`)}
						errors={errors}
						register={register}
					/>
					<InputField
						type="number"
						name='shelfThickness'
						label={t(`formCalculation.${"толщина полок"}`)}
						errors={errors}
						register={register}
					/>
					<InputField
						type="number"
						name={'itemLength'}
						label={t(`formCalculation.${"длина"}`)}
						errors={errors}
						register={register}
					/>
				</div>
			)

		case 'лист':
			return (
				<div>
					<InputField
						type="number"
						name={'thickness'}
						label={t(`formCalculation.${"толщина"}`)}
						errors={errors}
						register={register}
					/>
					<InputField
						type="number"
						name={'width'}
						label={t(`formCalculation.${"ширина"}`)}
						errors={errors}
						register={register}
					/>
					<InputField
						type="number"
						name={'itemLength'}
						label={t(`formCalculation.${"длина"}`)}
						errors={errors}
						register={register}
					/>
					<InputField
						type="number"
						name={'quantity'}
						label={t(`formCalculation.${"количество"}`)}
						errors={errors}
						register={register}
					/>
				</div>
			)

		case 'уголок':
			return (
				<div>
					<InputField
						type="number"
						name={'width'}
						label={t(`formCalculation.${"ширина"}`)}
						errors={errors}
						register={register}
					/>
					<InputField
						type="number"
						name={'height'}
						label={t(`formCalculation.${"высота"}`)}
						errors={errors}
						register={register}
					/>
					<InputField
						type="number"
						name={'wallThickness'}
						label={t(`formCalculation.${"толщина стенки"}`)}
						errors={errors}
						register={register}
					/>
					<InputField
						type="number"
						name={'itemLength'}
						label={t(`formCalculation.${"длина"}`)}
						errors={errors}
						register={register}
					/>
				</div>
			)

		case 'квадрат':
			return (
				<div>
					<InputField
						type='number'
						name={'width'}
						label={t(`formCalculation.${"ширина стороны"}`)}
						errors={errors}
						register={register}
					/>
					<InputField
						type='number'
						name={'itemLength'}
						label={t(`formCalculation.${"длина изделия"}`)}
						errors={errors}
						register={register}
					/>
					<InputField
						type="number"
						name={'quantity'}
						label={t(`formCalculation.${"количество"}`)}
						errors={errors}
						register={register}
					/>
				</div>
			)

		case 'круг (пруток)':
			return (
				<div>
					<InputField
						type='number'
						name={'diameter'}
						label={t(`formCalculation.${"внешний диаметр"}`)}
						errors={errors}
						register={register}
					/>
					<InputField
						type='number'
						name={'itemLength'}
						label={t(`formCalculation.${"длина"}`)}
						errors={errors}
						register={register}
					/>
				</div>
			)

		case 'лента (полоса)':
			return (
				<div>
					<InputField
						type='number'
						name={'width'}
						label={t(`formCalculation.${"ширина"}`)}
						errors={errors}
						register={register}
					/>
					<InputField
						type='number'
						name={'thickness'}
						label={t(`formCalculation.${"толщина"}`)}
						errors={errors}
						register={register}
					/>
					<InputField
						type='number'
						name={'itemLength'}
						label={t(`formCalculation.${"длина"}`)}
						errors={errors}
						register={register}
					/>
				</div>
			)

		case 'шестигранник':
			return (
				<div>
					<InputField
						type='number'
						name={'numberDiameter'}
						label={t(`formCalculation.${"номер (диаметр) - a"}`)}
						errors={errors}
						register={register}
					/>
					<InputField
						type='number'
						name={'itemLength'}
						label={t(`formCalculation.${"длина"}`)}
						errors={errors}
						register={register}
					/>
				</div>
			)

		case 'швеллер':
			return (
				<div>
					<InputField
						type='number'
						name={'width'}
						label={t(`formCalculation.${"ширина"}`)}
						errors={errors}
						register={register}
					/>
					<InputField
						type='number'
						name={'height'}
						label={t(`formCalculation.${"высота"}`)}
						errors={errors}
						register={register}
					/>
					<InputField
						type='number'
						name={'wallThickness'}
						label={t(`formCalculation.${"толщина стенки"}`)}
						errors={errors}
						register={register}
					/>
					<InputField
						type='number'
						name={'itemLength'}
						label={t(`formCalculation.${"длина"}`)}
						errors={errors}
						register={register}
					/>
				</div>
			)

		default:
			return (
				<div className={'text-center text-red-400'}>
					{t('Выберите вид проката')}
				</div>
			)
	}
}
