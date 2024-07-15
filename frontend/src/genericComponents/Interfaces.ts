export interface NavigationLinkProps {
  linkTo: string;
  style?: string;
}

export interface LogoProps {
  style?: string;
}

export interface Recipe {
  id: number;
  name: string;
  description: string;
  ingredients: Ingredient[];
}

export interface Ingredient {
  id: number;
  name: string;
}
