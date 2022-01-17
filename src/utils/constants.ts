export interface menuItem {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  title: string;
}

export const items: menuItem[] = [
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
