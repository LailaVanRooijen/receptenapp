package com.lvr.recepten_app.ingredient;

import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

import static com.lvr.recepten_app.generic.Routes.INGREDIENT_ROUTE;


@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping(INGREDIENT_ROUTE)
@AllArgsConstructor
public class IngredientController {
    private final IngredientService ingredientService;

    @GetMapping
    public List<Ingredient> getIngredients() {
        return ingredientService.getIngredients();
    }

    @GetMapping("/{id}")
    public Ingredient getById(@PathVariable Long id) {
        return ingredientService.getById(id);
    }

    @PostMapping
    public ResponseEntity<Ingredient> create(@RequestBody Ingredient ingredient) {
        Ingredient savedIngredient = ingredientService.create(ingredient);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(savedIngredient.getId())
                .toUri();
        return ResponseEntity.created(location).body(savedIngredient);
    }

    @PatchMapping("/{id}")
    public Ingredient patch(@PathVariable Long id, @RequestBody Ingredient patch) {
        return ingredientService.update(id, patch);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Ingredient> delete(@PathVariable Long id) {
        ingredientService.delete(id);
        return ResponseEntity.ok().build();
    }
}
