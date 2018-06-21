const uuid = require('uuid');

module.exports = [
  {
    id: uuid.v4(),
    name: 'iPhone X',
    description: 'Pantalla Super Retina HD2 5.8", Cámaras con gran angular y teleobjetivo 12 MP Face ID, Chip A11 Bionic, Carga inalámbrica',
    color: [
      'black',
      'default',
    ],
    'black:image': 'https://www.apple.com/la/iphone/compare/images/overview/compare_iphoneX_spacegray_large.jpg',
    'default:image': 'https://www.apple.com/la/iphone/compare/images/overview/compare_iphoneX_silver_large.jpg',
    price: '1000$',
  },
  {
    id: uuid.v4(),
    name: 'iPhone 8 Plus',
    description: 'Pantalla Retina HD2 5.5", Cámaras con gran angular y teleobjetivo 12 MP Touch ID, Chip A11 Bionic, Carga inalámbrica',
    color: [
      'black',
      'default',
      'yellow',
      'red',
    ],
    'black:image': 'https://www.apple.com/la/iphone/compare/images/overview/compare_iphone8plus_spacegray_large.jpg',
    'default:image': 'https://www.apple.com/la/iphone/compare/images/overview/compare_iphone8plus_silver_large.jpg',
    'yellow:image': 'https://www.apple.com/la/iphone/compare/images/overview/compare_iphone8plus_gold_large.jpg',
    'red:image': 'https://www.apple.com/la/iphone/compare/images/overview/compare_iphone8plus_red_large.jpg',
    price: '800$',
  },
  {
    id: uuid.v4(),
    name: 'iPhone 8 Plus',
    description: 'Pantalla Retina HD2 4.7", Cámaras con gran angular y teleobjetivo 12 MP Touch ID, Chip A11 Bionic, Carga inalámbrica',
    color: [
      'black',
      'default',
      'yellow',
      'red',
    ],
    'black:image': 'https://www.apple.com/la/iphone/compare/images/overview/compare_iphone8_spacegray_large.jpg',
    'default:image': 'https://www.apple.com/la/iphone/compare/images/overview/compare_iphone8_silver_large.jpg',
    'yellow:image': 'https://www.apple.com/la/iphone/compare/images/overview/compare_iphone8_gold_large.jpg',
    'red:image': 'https://www.apple.com/la/iphone/compare/images/overview/compare_iphone8_red_large.jpg',
    price: '700$',
  },
];
