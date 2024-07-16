package com.lvr.recepten_app;

import com.lvr.recepten_app.ingredient.Ingredient;
import com.lvr.recepten_app.ingredient.IngredientService;
import com.lvr.recepten_app.recipe.Recipe;
import com.lvr.recepten_app.recipe.RecipeService;
import com.lvr.recepten_app.recipeingredient.RecipeIngredient;
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
        ingredientService.create(new Ingredient("tomato", "pieces"));
        ingredientService.create(new Ingredient("pasta", "grams"));
        ingredientService.create(new Ingredient("ground beef", "grams"));
        ingredientService.create(new Ingredient("gochugaru", "grams"));
        ingredientService.create(new Ingredient("mint", "grams"));
        ingredientService.create(new Ingredient("parmigiano reggiano", "grams"));
        ingredientService.create(new Ingredient("rice", "grams"));
        ingredientService.create(new Ingredient("chicken", "grams"));
        ingredientService.create(new Ingredient("broccoli", "grams"));
    }

    private void seedRecipeIngredients() {
        List<Ingredient> ingredientList = ingredientService.getIngredients();
        ingredientList.forEach(ingredient -> recipeIngredientService.create(ingredient, 2));
    }

    private void seedRecipes() {
        List<RecipeIngredient> ingredients = recipeIngredientService.getRecipeIngredients();
        recipeService.create(new Recipe("Delicious food", "amazing", ingredients));
    }
}

