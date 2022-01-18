import { Menu, MenuItem } from "./types";

export const GET_RESTAURANT_MENUS = 'GET_RESTAURANT_MENUS';
export const GET_RESTAURANT_MENUS_SUCCESS = 'GET_RESTAURANT_MENUS_SUCCESS';

export const UPDATE_ACTIVE_MENU = 'UPDATE_ACTIVE_MENU';

interface GetRestaurantMenusAction {
  type: typeof GET_RESTAURANT_MENUS
}

interface GetRestaurantMenusSuccessAction {
  type: typeof GET_RESTAURANT_MENUS_SUCCESS,
  payload: {
    activeMenu: Menu,
    menus: Menu[]
  }
}

interface UpdateActiveMenuAction {
  type: typeof UPDATE_ACTIVE_MENU,
  payload: Menu
}

export type RestaurantActionTypes = 
  GetRestaurantMenusAction |
  GetRestaurantMenusSuccessAction |
  UpdateActiveMenuAction;





export const dinnerMenuItems: MenuItem[] = [
  {
    category: "appetizer",
    description: "on grilled garlic crostini",
    id: 1,
    image: "https://www.shugarysweets.com/wp-content/uploads/2019/06/bruschetta-recipe.jpg",
    price: 12.00,
    title: "Fresh Tomato Bruschetta"
  },
  {
    category: "appetizer",
    description: "in garlic butter sauce",
    id: 2,
    image: "https://www.prouditaliancook.com/wp-content/uploads/2019/12/clam-platter.jpg",
    price: 8.00,
    title: "Half-Dozen Baked Clams"
  },
  {
    category: "appetizer",
    description: "cocktail sauce, fresh lemon",
    id: 3,
    image: "https://www.thespruceeats.com/thmb/GT8nRuZNhCc3rQY1MWk-aeYbFC0=/2000x1332/filters:fill(auto,1)/fried-calamari-2019531-hero-01-e294f265d7e84c0f89d4b5759759ffbf.jpg",
    price: 15.00,
    title: "Fried Calamari"
  },
  {
    category: "appetizer",
    description: "our famous meatballs, romaine salad, red wine vinaigrette",
    id: 4,
    image: "https://i0.wp.com/nevernothungry.com/wp-content/uploads/2019/04/Meatball-Salad-8.jpg?fit=2240%2C3360&ssl=1",
    price: 13.00,
    title: "Meatball Salad"
  },
  {
    category: "pasta",
    description: "olive oil, garlic, white wine, red pepper flakes",
    id: 5,
    image: "https://stripedspatula.com/wp-content/uploads/2019/06/linguine-with-clams-3.jpg",
    price: 25.00,
    title: "Linguine with Clams"
  },
  {
    category: "pasta",
    description: "creamy tomato sauce with a touch of vodka",
    id: 6,
    image: "https://assets.bonappetit.com/photos/5a8da4996497380283798c16/1:1/w_2872,h_2872,c_limit/rigatoni-with-vodka-sauce.jpg",
    price: 20.00,
    title: "Rigatoni Vodka"
  },
  {
    category: "pasta",
    description: "four cheese stuffed, fresh marinara",
    id: 7,
    image: "https://www.forkinthekitchen.com/wp-content/uploads/2019/03/190223.ricotta.ravioli.updated-8427-8.jpg",
    price: 18.00,
    title: "Cheese Ravioli"
  },
  {
    category: "pasta",
    description: "housemade red sauce",
    id: 8,
    image: "https://a7m3f5i5.rocketcdn.me/wp-content/uploads/2015/09/moms-spaghetti-sauce-recipe-a-healthy-slice-of-life-6-of-6-800x600.jpg",
    price: 20.00,
    title: "Spaghetti Marinara"
  },
  {
    category: "pasta",
    description: "homemade meat sauce",
    id: 9,
    image: "https://img.taste.com.au/MQu_oINQ/taste/2016/11/one-pot-penne-bolognese-102943-1.jpeg",
    price: 21.00,
    title: "Penne Bolognese"
  },
  {
    category: "dessert",
    description: "coffee-soaked lady fingers, mascarpone mousse",
    id: 10,
    image: "https://natashaskitchen.com/wp-content/uploads/2019/11/Tiramisu-Cake-5.jpg",
    price: 10.00,
    title: "Tiramisu"
  },
  {
    category: "dessert",
    description: "italian hole-less doughnuts, caramel, chocolate hazelnut, raspberry",
    id: 11,
    image: "https://www.insidetherustickitchen.com/wp-content/uploads/2020/05/Bomboloni-square-1200px-Inside-the-rustic-kitchen.jpg",
    price: 12.00,
    title: "Bomboloni"
  },
  {
    category: "dessert",
    description: "nutella mousse, hazelnut cream, chocolate drizzle, caramel cookies",
    id: 12,
    image: "https://www.chicagomag.com/wp-content/archive/dining-drinking/February-2017/Jar-Bar/JarBar_CookieDoughOvernightOats.jpg",
    price: 12.00,
    title: "The Cookie Jar"
  },
];

export const lunchMenuItems: MenuItem[] = [
  {
    category: "salad",
    description: "romaine, parmesan, garlic breadcrumbs",
    id: 13,
    image: "https://natashaskitchen.com/wp-content/uploads/2019/01/Caesar-Salad-Recipe-3.jpg",
    price: 9.00,
    title: "Caesar"
  },
  {
    category: "salad",
    description: "salami, pepperoncini, blue cheese, egg, cherry tomatoes, artichokes, red onion, cucumber, avocado, parmesan breadcrumbs, smoked mustard vinaigrette",
    id: 14,
    image: "https://www.chelseasmessyapron.com/wp-content/uploads/2017/02/Italian-Chopped-Salad-2-500x500.jpg",
    price: 17.00,
    title: "Chopped"
  },
  {
    category: "sandwich",
    description: "creamy coleslaw, spicy aioli, buttered pickles, sesame bun",
    id: 15,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQih7SSaJ0DEj_x3zxkGpN1RpC2-nvO-rUsvQ&usqp=CAU",
    price: 12.00,
    title: "Spicy Chicken"
  },
  {
    category: "sandwich",
    description: "mustard greens, tomato, green goddess, brioche",
    id: 16,
    image: "https://howtofeedaloon.com/wp-content/uploads/2018/07/lobster-roll-instagram.jpg",
    price: 15.00,
    title: "Lobster Roll"
  },
  {
    category: "sandwich",
    description: "marinated bufala mozzarella, sliced tomato, arugula, shaved red onion, herb mayo, brioche bun",
    id: 17,
    image: "https://v1.nitrocdn.com/iRwsMXPEdaMSNBlSqLBkXmjSJwoqRrps/assets/static/optimized/rev-f3f118f/wp-content/uploads/2021/09/Close-up-side-shot-of-styled-sandwich-2.jpg",
    price: 15.00,
    title: "Grilled Chicken"
  },
]

export const lunch: Menu = {
  categories: ["salad", "sandwich"],
  menuItems: lunchMenuItems,
  type: "lunch"
}

export const dinner: Menu = {
  categories: ["appetizer", "pasta", "dessert"],
  menuItems: dinnerMenuItems,
  type: "dinner"
}

export const exampleRestaurant = [lunch, dinner]

