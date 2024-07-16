package com.lvr.recepten_app.recipe;

import com.lvr.recepten_app.recipeingredient.RecipeIngredient;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Getter
@NoArgsConstructor
public class Recipe {
    @Id
    @GeneratedValue
    private Long id;

    @Setter
    private String name;

    @Setter
    @Size(max = 1000)
    private String description;

    @OneToMany
    private final Set<RecipeIngredient> recipeIngredients = new HashSet<>();


    public void addIngredients(Set<RecipeIngredient> newRecipeIngredients) {
        this.recipeIngredients.addAll(newRecipeIngredients);
    }

    public void removeIngredient(RecipeIngredient ingredient) {
        this.recipeIngredients.remove(ingredient);
    }

    public void removeAll() {
        this.recipeIngredients.clear();
    }

    public Recipe(String description, String name, List<RecipeIngredient> ingredients) {
        this.description = description;
        this.name = name;
        this.recipeIngredients.addAll(ingredients);
    }
}
