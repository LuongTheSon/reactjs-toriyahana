import headerLogo from './header-logo.png';
import icon_ins from './icon-insta.svg';
import icon_face from './icon-face.svg';
import icon_line from './icon-line.svg';
import headerTop_brg from './header-top-brg.jpg';
import FooterLogo from './footer-logo.svg';
import Home_banner from './banner-home-photo.jpg';
import page_banner from './banner-page-photo.jpg';
import cart_menu from './icon-menu-cart.svg';
import bin_icon from './bin_icon.png';

import FoodItem_01 from './food-list-01.jpg';
import FoodItem_02 from './food-list-02.jpg';
import FoodItem_03 from './food-list-03.jpg';
import FoodItem_04 from './food-list-04.jpg';
import FoodItem_05 from './food-list-05.jpg';
import FoodItem_06 from './food-list-06.jpg';
import FoodItem_07 from './food-list-07.jpg';
import FoodItem_08 from './food-list-08.jpg';
import FoodItem_09 from './food-list-09.jpg';
import FoodItem_10 from './food-list-10.jpg';
import FoodItem_11 from './food-list-11.jpg';
import FoodItem_12 from './food-list-12.jpg';
import FoodItem_13 from './food-list-13.jpg';
import FoodItem_14 from './food-list-14.jpg';
import FoodItem_15 from './food-list-15.jpg';
import FoodItem_16 from './food-list-16.jpg';
import FoodItem_dt from './food-list-dt.jpg';

import menuFood_1 from './anchor-photo-01.png';
import menuFood_2 from './anchor-photo-02.png';
import menuFood_3 from './anchor-photo-03.png';
import menuFood_4 from './anchor-photo-04.png';

export const images = {
  headerLogo,
  headerTop_brg,
  FooterLogo,
  Home_banner,
  page_banner,
  cart_menu,
  bin_icon
};

export const social = [
  {
    socialIcon: icon_ins,
    socialName: 'instagram'
  },
  {
    socialIcon: icon_face,
    socialName: 'facebook'
  },
  {
    socialIcon: icon_line,
    socialName: 'line'
  }
];

export const categoryList = [
  {
    menu_name: 'All',
    menu_title: '一覧'
  },
  {
    menu_name: 'Hotpot',
    menu_title: 'お鍋'
  },
  {
    menu_name: 'Skewers',
    menu_title: '串'
  },
  {
    menu_name: 'Sashimi',
    menu_title: 'お刺身'
  },
  {
    menu_name: 'Meat',
    menu_title: '精肉'
  }
];

export const foodList = [
  {
    _id: '1',
    name: '【産地直送】手羽先地鶏鍋3〜4人前',
    image: [FoodItem_01, FoodItem_dt, FoodItem_01, FoodItem_01],
    price: 1000,
    description: 'best coffee of year',
    category: 'Hotpot',
    state_name: '冷凍',
    state: 'frozen'
  },
  {
    _id: '2',
    name: '【産地直送】手羽先地鶏鍋3〜4人前',
    image: [FoodItem_02, FoodItem_dt, FoodItem_02, FoodItem_02],
    price: 1000,
    description: 'best beef of world',
    category: 'Hotpot',
    state_name: '冷凍',
    state: 'frozen'
  },
  {
    _id: '3',
    name: '【産地直送】手羽先地鶏鍋3〜4人前',
    image: [FoodItem_03, FoodItem_dt, FoodItem_03, FoodItem_03],
    price: 1000,
    description: 'in my home, super ngon',
    category: 'Hotpot',
    state_name: '冷凍',
    state: 'chilled'
  },
  {
    _id: '4',
    name: '【産地直送】手羽先地鶏鍋3〜4人前',
    image: [FoodItem_04, FoodItem_dt, FoodItem_04, FoodItem_04],
    price: 1000,
    description: 'in my home, super ngon',
    category: 'Hotpot',
    state_name: '常温',
    state: 'temp'
  },
  {
    _id: '5',
    name: '【産地直送】手羽先地鶏鍋3〜4人前',
    image: [FoodItem_05, FoodItem_dt, FoodItem_05, FoodItem_05],
    price: 1000,
    description: 'in my home, super ngon',
    category: 'Skewers',
    state_name: '冷凍',
    state: 'chilled'
  },
  {
    _id: '6',
    name: '【産地直送】手羽先地鶏鍋3〜4人前',
    image: [FoodItem_06, FoodItem_dt, FoodItem_06, FoodItem_06],
    price: 1000,
    description: 'in my home, super ngon',
    category: 'Skewers',
    state_name: '冷凍',
    state: 'frozen'
  },
  {
    _id: '7',
    name: '【産地直送】手羽先地鶏鍋3〜4人前',
    image: [FoodItem_07, FoodItem_dt, FoodItem_07, FoodItem_07],
    price: 1000,
    description: 'in my home, super ngon',
    category: 'Skewers',
    state_name: '常温',
    state: 'temp'
  },
  {
    _id: '8',
    name: '【産地直送】手羽先地鶏鍋3〜4人前',
    image: [FoodItem_08, FoodItem_dt, FoodItem_08, FoodItem_08],
    price: 1000,
    description: 'in my home, super ngon',
    category: 'Skewers',
    state_name: '冷凍',
    state: 'frozen'
  },
  {
    _id: '9',
    name: '【産地直送】手羽先地鶏鍋3〜4人前',
    image: [FoodItem_09],
    price: 1000,
    description: 'in my home, super ngon',
    category: 'Sashimi',
    state_name: '冷凍',
    state: 'frozen'
  },
  {
    _id: '10',
    name: '【産地直送】手羽先地鶏鍋3〜4人前',
    image: [FoodItem_10],
    price: 1000,
    description: 'in my home, super ngon',
    category: 'Sashimi',
    state_name: '常温',
    state: 'temp'
  },
  {
    _id: '11',
    name: '【産地直送】手羽先地鶏鍋3〜4人前',
    image: [FoodItem_11],
    price: 1000,
    description: 'in my home, super ngon',
    category: 'Sashimi',
    state_name: '冷凍',
    state: 'frozen'
  },
  {
    _id: '12',
    name: '【産地直送】手羽先地鶏鍋3〜4人前',
    image: [FoodItem_12],
    price: 1000,
    description: 'in my home, super ngon',
    category: 'Sashimi',
    state_name: '冷凍',
    state: 'chilled'
  },
  {
    _id: '13',
    name: '【産地直送】手羽先地鶏鍋3〜4人前',
    image: [FoodItem_13],
    price: 1000,
    description: 'in my home, super ngon',
    category: 'Meat',
    state_name: '冷凍',
    state: 'chilled'
  },
  {
    _id: '14',
    name: '【産地直送】手羽先地鶏鍋3〜4人前',
    image: [FoodItem_14],
    price: 1000,
    description: 'in my home, super ngon',
    category: 'Meat',
    state_name: '常温',
    state: 'temp'
  },
  {
    _id: '15',
    name: '【産地直送】手羽先地鶏鍋3〜4人前',
    image: [FoodItem_15],
    price: 1000,
    description: 'in my home, super ngon',
    category: 'Meat',
    state_name: '冷凍',
    state: 'frozen'
  },
  {
    _id: '16',
    name: '【産地直送】手羽先地鶏鍋3〜4人前',
    image: [FoodItem_16],
    price: 1000,
    description: 'in my home, super ngon',
    category: 'Meat',
    state_name: '冷凍',
    state: 'frozen'
  }
];

export const foodMenuList = [
  {
    anchor: 'list1',
    image: menuFood_1,
    name: 'お鍋一覧へ'
  },
  {
    anchor: 'list2',
    image: menuFood_2,
    name: '串一覧へ'
  },
  {
    anchor: 'list3',
    image: menuFood_3,
    name: 'お刺身一覧へ'
  },
  {
    anchor: 'list4',
    image: menuFood_4,
    name: '精肉一覧へ'
  }
];
