package com.lvr.recepten_app.recipeingredient;

import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

import static com.lvr.recepten_app.generic.Routes.RECIPE_INGREDIENT_ROUTE;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping(RECIPE_INGREDIENT_ROUTE)
@AllArgsConstructor
public class RecipeIngredientController {
    private final RecipeIngredientService recipeIngredientService;

    @GetMapping
    public List<RecipeIngredient> getRecipeIngredients() {
        return recipeIngredientService.getRecipeIngredients();
    }

    @GetMapping("/{id}")
    public RecipeIngredient getById(@PathVariable Long id) {
        return recipeIngredientService.getById(id);
    }

    @PostMapping
    public ResponseEntity<RecipeIngredient> create(@RequestBody RecipeIngredientDTO recipeIngredient) {
        RecipeIngredient savedRecipeIngredient = recipeIngredientService.create(recipeIngredient);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(savedRecipeIngredient.getId()).toUri();
        return ResponseEntity.created(location).body(savedRecipeIngredient);
    }

    @PatchMapping("/{id}")
    public RecipeIngredient update(@PathVariable Long id, @RequestBody RecipeIngredient patch) {
        return recipeIngredientService.update(id, patch);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<RecipeIngredient> delete(@PathVariable Long id) {
        recipeIngredientService.delete(id);
        return ResponseEntity.ok().build();
    }
}
