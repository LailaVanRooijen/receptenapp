package com.lvr.recepten_app.recipe;

import com.lvr.recepten_app.recipeingredient.RecipeIngredient;
import com.lvr.recepten_app.recipeingredient.RecipeIngredientService;
import jakarta.persistence.EntityNotFoundException;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
public class RecipeService {
    private final RecipeRepository recipeRepository;
    private final RecipeIngredientService recipeIngredientService;

    public List<Recipe> getRecipes() {
        return recipeRepository.findAll();
    }

    public Recipe getById(Long id) {
        return recipeRepository.findById(id).orElseThrow(EntityNotFoundException::new);
    }

    public Recipe create(PostRecipeDTO recipeDTO) {
        Recipe recipe = toRecipe(recipeDTO);
        return recipeRepository.save(recipe);
    }

    public Recipe create(Recipe recipe) {
        return recipeRepository.save(recipe);
    }

    private Recipe toRecipe(PostRecipeDTO recipeDTO) {
        List<RecipeIngredient> ingredients = recipeDTO.ingredientId() == null ? new ArrayList<>() : recipeDTO.ingredientId().stream().map(recipeIngredientService::getById).toList();
        ;
        return new Recipe(recipeDTO.description(), recipeDTO.name(), ingredients);
    }

    public Recipe update(Long id, Recipe patch) {
        Recipe recipe = recipeRepository.findById(id).orElseThrow(EntityNotFoundException::new);
        if (patch.getName() != null) {
            recipe.setName(patch.getName());
        }
        if (patch.getRecipeIngredients() != null) {
            recipe.removeAll();
            recipe.addIngredients(patch.getRecipeIngredients());
        }
        return recipeRepository.save(recipe);
    }

    public void delete(Long id) {
        Recipe recipe = recipeRepository.findById(id).orElseThrow(EntityNotFoundException::new);
        recipeRepository.deleteById(id);
    }
}
