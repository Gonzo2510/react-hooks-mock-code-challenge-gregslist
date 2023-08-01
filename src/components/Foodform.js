import { useState } from "react";

function FoodForm() {
    const [food, setFood] = useState('')
    const [country, setCountry] = useState('')
    

    function handleChange(e) {
        if (e.target.value.length < 10) {
            setFood(e.target.value)
        }
        // if charcters are less than 10 setFood 
    }

    function handleSubmit(e) {
        e.preventDefault()
        setCountry(e.target.value)

    }

    return (
      <div>
        <h1>
            <form>Favorite Food
                <input value={food} onChange={handleChange}/>
                <div>Country of origin
                    <input ></input>
                    <button onSubmit={handleSubmit}>Submit</button>
                </div>
            </form>
        </h1>
      </div>
    );
  }
  
  export default FoodForm
  
//   Create a controlled component with:
// A field for a user to type the name of their favorite food
// Do not let a user enter more than ten characters for the food
// A field for a user to type the food’s country of origin
// A Submit button

// When a User submits the form:
// The form should clear
// If the country of origin is American, render a h1 with the text Delicious!
// If the country of origin is Italy, render a h1 with the text Delizioso!
// If the country of origin is Mexico or Spain, render a h1 with the text Delicioso!
// If the country of origin is not one of those countries, render a h1 with the text Yummy!
// This message should not be displayed before a user submits the form
// If the User fills out the form again, the text should update