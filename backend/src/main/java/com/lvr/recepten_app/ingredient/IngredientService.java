package com.lvr.recepten_app.ingredient;

import jakarta.persistence.EntityNotFoundException;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class IngredientService {
    private final IngredientRepository ingredientRepository;

    public List<Ingredient> getIngredients() {
        return ingredientRepository.findAll();
    }

    public Ingredient getById(Long id) {
        return ingredientRepository.findById(id).orElseThrow(EntityNotFoundException::new);
    }

    public Ingredient getByName(String name) {
        return ingredientRepository.findByNameIgnoreCase(name).orElseThrow(EntityNotFoundException::new);
    }

    public Ingredient create(Ingredient ingredient) {
        return ingredientRepository.save(ingredient);
    }

    public Ingredient update(Long id, Ingredient patch) {
        Ingredient ingredient = ingredientRepository.findById(id).orElseThrow(EntityNotFoundException::new);
        if (patch.getName() != null) {
            ingredient.setName(patch.name);
        }
        return ingredientRepository.save(ingredient);
    }

    public void delete(Long id) {
        Ingredient ingredient = ingredientRepository.findById(id).orElseThrow(EntityNotFoundException::new);
        ingredientRepository.deleteById(id);
    }
}
