package com.lvr.recepten_app;

import com.lvr.recepten_app.ingredient.Ingredient;
import com.lvr.recepten_app.ingredient.IngredientService;
import com.lvr.recepten_app.recipe.RecipeService;
import com.lvr.recepten_app.recipeingredient.RecipeIngredientService;
import lombok.AllArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.List;

@AllArgsConstructor
@Component
public class Seeder implements CommandLineRunner {
    private final IngredientService ingredientService;
    private final RecipeIngredientService recipeIngredientService;
    private final RecipeService recipeService;

    @Override
    public void run(String... args) throws Exception {
        seedIngredients();
        seedRecipeIngredients();
        seedRecipes();
    }

    private void seedIngredients() {
        ingredientService.create(new Ingredient("tomato"));
        ingredientService.create(new Ingredient("pasta"));
        ingredientService.create(new Ingredient("ground beef"));
        ingredientService.create(new Ingredient("gochugaru"));
        ingredientService.create(new Ingredient("mint"));
        ingredientService.create(new Ingredient("parmigiano reggiano"));
        ingredientService.create(new Ingredient("rice"));
        ingredientService.create(new Ingredient("chicken"));
        ingredientService.create(new Ingredient("broccoli"));
    }

    private void seedRecipeIngredients() {
        List<Ingredient> ingredientList = ingredientService.getIngredients();
        ingredientList.forEach(ingredient -> recipeIngredientService.create(ingredient, 2));
    }

    private void seedRecipes() {
        System.out.println("to do this one!");

    }
}

