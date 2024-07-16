package com.lvr.recepten_app.recipe;

import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

import static com.lvr.recepten_app.generic.Routes.RECIPE_ROUTE;

@RestController
@CrossOrigin(origins = {"${client}"})
@RequestMapping(RECIPE_ROUTE)
@AllArgsConstructor
public class RecipeController {
    private final RecipeService recipeService;

    @GetMapping
    public List<Recipe> getRecipes() {
        return recipeService.getRecipes();
    }

    @GetMapping("/{id}")
    public Recipe getById(@PathVariable Long id) {
        return recipeService.getById(id);
    }

    @PostMapping
    public ResponseEntity<Recipe> create(@RequestBody PostRecipeDTO recipeDTO) {
        Recipe saved = recipeService.create(recipeDTO);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(saved.getId()).toUri();
        return ResponseEntity.created(location).body(saved);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<Recipe> update(Long id, @RequestBody Recipe recipe) {
        return ResponseEntity.ok().body(recipeService.update(id, recipe));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Recipe> delete(@PathVariable Long id) {
        recipeService.delete(id);
        return ResponseEntity.ok().build();
    }
}
