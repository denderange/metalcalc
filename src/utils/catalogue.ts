interface Catalogue {
	[key: string]: {
		image: string
		alt: string
	}
}

export const catalogue: Catalogue = {
	"балка (двутавр)": {
		image: '..src/assets/images/Balk.webp',
		alt: 'Balk'
	},
	"швеллер": {
		image: '..src/assets/images/ChannelP.webp',
		alt: 'ChannelP'
	},
	"круг (пруток)": {
		image: '..src/assets/images/Circle.webp',
		alt: 'Circle'
	},
	"уголок": {
		image: '..src/assets/images/Corner.webp',
		alt: 'Corner'
	},
	"шестигранник": {
		image: '..src/assets/images/Hexahedron.webp',
		alt: 'Hexahedron'
	},
	"лист": {
		image: '..src/assets/images/List.webp',
		alt: 'List'
	},
	"труба круглая": {
		image: '..src/assets/images/PipeCircle.webp',
		alt: 'pipe'
	},
	"труба профильная": {
		image: '..src/assets/images/PipeProf.webp',
		alt: 'PipeProf'
	},
	"лента (полоса)": {
		image: '..src/assets/images/Ribbon.webp',
		alt: 'Ribbon'
	},
	"квадрат": {
		image: '..src/assets/images/Square.webp',
		alt: 'Square'
	},
	"imgDefault": {
		image: '..src/assets/images/imgDefault.webp',
		alt: 'product'
	},
}

