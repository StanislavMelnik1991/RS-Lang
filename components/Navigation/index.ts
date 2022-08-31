import { NavItem } from '../../types';

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Учебник',
    href: '/textbook',
  },
  {
    label: 'Игры',
    children: [
      {
        label: 'Аудиовызов',
        subLabel: 'Улучшай восприятие речи на слух',
        href: '#',
      },
      {
        label: 'Спринт',
        subLabel: 'Повторяй изученные слова',
        href: '#',
      },
    ],
  },
  {
    label: 'Статистика',
    href: '/stats',
  },
];

export default NAV_ITEMS;
