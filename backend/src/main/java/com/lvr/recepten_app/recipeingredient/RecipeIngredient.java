package com.lvr.recepten_app.recipeingredient;

import com.lvr.recepten_app.ingredient.Ingredient;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@NoArgsConstructor
public class RecipeIngredient {
    @Id
    @GeneratedValue
    private Long id;

    @Setter
    private Integer quantity;

    @Setter
    @ManyToOne
    Ingredient ingredient;

    public RecipeIngredient(Ingredient ingredient, Integer quantity) {
        this.ingredient = ingredient;
        this.quantity = quantity;
    }
}
