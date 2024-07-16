import axios from "axios";
import { useState } from "react";
import Button from "../../genericComponents/Button";
import InputField from "../../genericComponents/InputField";

const AddNewIngredient = ({ refresh }) => {
  const [name, setName] = useState("");
  const [unit, setUnit] = useState("");
  const [showForm, setShowForm] = useState<boolean>(false);

  const postNewIngredient = () => {
    axios
      .post("http://localhost:8080/api/v1/ingredients", {
        name: name.toLowerCase(),
        unit: unit.toLowerCase(),
      })
      .then(() => {
        refresh();
        setName("");
        setUnit("");
        setShowForm(false);
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <div className="relative">
        <Button
          handleClick={() => {
            setShowForm(!showForm);
          }}
          content={showForm ? "hide" : "add ingredient"}
          isDeleteButton={showForm ? true : false}
          style={"my-2 min-w-64"}
        />
        {showForm && (
          <div className="border-2 p-4 border-secondary rounded absolute bg-white flex flex-col items-center">
            <InputField
              handleChange={(e) => {
                setName(e.target.value);
              }}
              type={"text"}
              value={name}
              hasLabel={true}
              label={"ingredient"}
            />
            <InputField
              handleChange={(e) => {
                setUnit(e.target.value);
              }}
              type={"text"}
              value={unit}
              hasLabel={true}
              label={"unit"}
            />
            <Button handleClick={postNewIngredient} content={"add"} />
          </div>
        )}
      </div>
    </>
  );
};

export default AddNewIngredient;
