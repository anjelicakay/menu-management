export interface RestaurantState {
  activeMenu: Menu;
  menus: Menu[];
}

export interface Menu {
  categories: string[];
  menuItems: MenuItem[];
  type: string;
}

export interface MenuItem {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  title: string;
}
