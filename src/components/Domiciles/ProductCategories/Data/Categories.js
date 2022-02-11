import { BeefBurgers } from "./BeefBurgers";
import { ChickenBurgers } from "./ChickenBurgers";
import { Hotdogs } from "./Hotdogs";
import { Salchipapas } from "./Salchipapas";
import {Mazorcadas} from "./Mazorcadas";
import {Meats} from "./Meats";
import { Children } from "./Children";
import { Starters }  from "./Starters"
import { Combos } from "./Combos";
import { Acompañamientos } from "./Acompañamientos";
import { Desserts } from "./Desserts";
import { Drinks } from "./Drinks";
export const Categories = [ BeefBurgers, ChickenBurgers, Hotdogs, Salchipapas, Mazorcadas, Meats, Children, Starters, Combos, Acompañamientos, Desserts, Drinks];
export const AllProducts = BeefBurgers.products.concat(ChickenBurgers.products).concat(Hotdogs.products).concat(Salchipapas.products).concat(Mazorcadas.products).concat(Meats.products).concat(Children.products).concat(Starters.products).concat(Combos.products).concat(Acompañamientos.products).concat(Desserts.products).concat(Drinks.products);