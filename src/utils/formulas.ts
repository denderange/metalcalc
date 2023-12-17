interface Density {
	[key: string]: number
}

export const density: Density = { // Это плотность металлов
	"черный": 7.85,
	"нержавейка": 7.8,
	"алюминий": 2.7,
	"медь": 8.96,
	"латунь": 8.73
}

// 7800 кг на м3 (или 7,8г/мм3)
// m=rV
//
// density - плотность
// volume - объем
// mass - масса

//  diameter?: number, // Диаметр трубы/прутка
// 	itemLength?: number, // Длина
// 	width?: number, // Ширина
// 	height?: number // Высота
// 	thickness?: number, // Толщина
// 	lintelThickness?: number, // Толщина перемычки (балки)
// 	shelfThickness?: number, // Толщина полок (балки)
// 	wallThickness?: number, // Толщина стенки трубы/уголка
// 	quantity?: number, // Количество
// 	numberDiameter?: number// Размер шестигранника

export const applyFormulas = (
	productKind: string,
	productMetal: string,
	...props: any
) => {
	const productDensity = density[productMetal]
	const {
		diameter,
		itemLength,
		width,
		height,
		thickness,
		lintelThickness,
		shelfThickness,
		wallThickness,
		quantity,
		numberDiameter
	} = props[0]
	let result: number = 0

	switch (productKind) {
		case 'труба круглая':
			result = (3.142 * (Number(diameter) ** 2 - (Number(diameter) - Number(wallThickness) * 2) ** 2) / 4) * Number(itemLength) * productDensity
			return (result / 1000000).toFixed(3)

		case 'труба профильная':
			result = ((Number(width) + Number(height)) * 2) * Number(wallThickness) * Number(itemLength) * productDensity
			return (result / 1000000).toFixed(3)

		case 'балка (двутавр)':
			result = (2 * Number(width) * Number(shelfThickness) + Number(lintelThickness) * Number(height)) * Number(itemLength) * productDensity
			return (result / 1000000).toFixed(3)

		case 'лист':
			result = Number(width) * Number(itemLength) * Number(thickness) * Number(quantity) * productDensity
			return (result / 1000000).toFixed(3)

		case 'уголок':
			result = (Number(width) + Number(height)) * Number(wallThickness) * Number(itemLength) * productDensity
			return (result / 1000000).toFixed(3)

		case 'квадрат':
			result = Number(width) ** 2 * Number(itemLength) * Number(quantity) * productDensity
			return (result / 1000000).toFixed(3)

		case 'круг (пруток)':
			result = (3.142 * Number(diameter) ** 2 / 4) * Number(itemLength) * productDensity
			return (result / 1000000).toFixed(3)

		case 'лента (полоса)':
			result = result = Number(width) * Number(itemLength) * Number(thickness) * productDensity
			return (result / 1000000).toFixed(3)

		case 'шестигранник':
			result = productDensity * Number(itemLength) * (3 * Math.sqrt(3) / 6) * (Number(numberDiameter) ** 2)
			return (result / 1000000).toFixed(3)

		case 'швеллер':
			result = (Number(width) * 2 + Number(height)) * Number(wallThickness) * Number(itemLength) * productDensity
			return (result / 1000000).toFixed(3)

		default:
			return null
	}
}