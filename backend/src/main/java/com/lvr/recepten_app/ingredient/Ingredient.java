package com.lvr.recepten_app.ingredient;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@NoArgsConstructor
public class Ingredient {
    @Id
    @GeneratedValue
    private Long id;

    @Setter
    String name;

    public Ingredient(String name) {
        this.name = name;
    }
}
