package com.lvr.recepten_app.recipe;

import java.util.List;

public record PostRecipeDTO(String name, String description, List<Long> ingredientId) {
}
