package com.lvr.recepten_app.recipeingredient;

import com.lvr.recepten_app.ingredient.Ingredient;
import com.lvr.recepten_app.ingredient.IngredientRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class RecipeIngredientService {
    private final RecipeIngredientRepository recipeIngredientRepository;
    private final IngredientRepository ingredientRepository;

    public RecipeIngredient getById(Long id) {
        return recipeIngredientRepository.findById(id).orElseThrow(EntityNotFoundException::new);
    }

    public List<RecipeIngredient> getRecipeIngredients() {
        return recipeIngredientRepository.findAll();
    }

    public RecipeIngredient create(RecipeIngredientDTO dto) {
        Ingredient ingredient = ingredientRepository.findById(dto.ingredientId()).orElseThrow(EntityNotFoundException::new);
        RecipeIngredient newRecipeIngredient = new RecipeIngredient();
        newRecipeIngredient.setQuantity(dto.quantity());
        newRecipeIngredient.setIngredient(ingredient);
        return recipeIngredientRepository.save(newRecipeIngredient);
    }

    public void create(Ingredient ingredient, Integer quantity) {
        recipeIngredientRepository.save(new RecipeIngredient(ingredient, quantity));
    }

    public RecipeIngredient update(Long id, RecipeIngredient patch) {
        RecipeIngredient saved = recipeIngredientRepository.findById(id).orElseThrow(EntityNotFoundException::new);
        if (patch.getQuantity() != null) {
            saved.setQuantity(patch.getQuantity());
        }
        if (patch.getIngredient() != null) {
            saved.setIngredient(patch.ingredient);
        }
        return recipeIngredientRepository.save(saved);
    }

    public void delete(Long id) {
        RecipeIngredient toDelete = recipeIngredientRepository.findById(id).orElseThrow(EntityNotFoundException::new);
        recipeIngredientRepository.deleteById(id);
    }
}
