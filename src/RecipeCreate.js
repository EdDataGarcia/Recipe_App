import React, { useState } from "react";

function RecipeCreate({ addRecipe }) {
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  const [formData, setFormData] = useState({ ...initialFormState });

  const handleChange = ({ target }) => {
    const value = target.name === "photo" ? target.value : target.value;
    setFormData({
      ...formData,
      [target.name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addRecipe(formData);
    setFormData({ ...initialFormState }); // Clear form
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />

      <label htmlFor="cuisine">Cuisine:</label>
      <input
        id="cuisine"
        type="text"
        name="cuisine"
        value={formData.cuisine}
        onChange={handleChange}
      />

      <label htmlFor="photo">Photo URL:</label>
      <input
        id="photo"
        type="url"
        name="photo"
        value={formData.photo}
        onChange={handleChange}
      />

      <label htmlFor="ingredients">Ingredients:</label>
      <textarea
        id="ingredients"
        name="ingredients"
        value={formData.ingredients}
        onChange={handleChange}
      />

      <label htmlFor="preparation">Preparation:</label>
      <textarea
        id="preparation"
        name="preparation"
        value={formData.preparation}
        onChange={handleChange}
      />

      <button type="submit">Create</button>
    </form>
  );
}

export default RecipeCreate;
