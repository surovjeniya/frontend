export interface HeaderTopRoute {
  path: string;
  title: string;
}

export const headerTopRoutes: HeaderTopRoute[] = [
  {
    path: "/delivery",
    title: "Доставка",
  },
  {
    path: "/warranty",
    title: "Гарантия",
  },
  {
    path: "/about",
    title: "О нас",
  },
  {
    path: "/payment",
    title: "Оплата",
  },
];
