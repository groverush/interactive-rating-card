import { useState } from "react"

import iconStar from "../assets/images/icon-star.svg"
import RadioInputs from "../components/RadioInputs"
import { createRoot } from "react-dom/client"
import Thanks from "./Thanks"
const Card = () => {
  const [rating, setRating] = useState()
  function handleChange({ target }) {
    const { value } = target
    setRating((prevRating) => (prevRating = value))
  }

  function handleClick() {
    if (rating) {
      const app = createRoot(document.getElementById("container"))
      app.render(<Thanks rating={rating} />)
    }
  }
  return (
    <main className="max-w-[350px] mx-auto bg-neutral-blue py-7 px-6 rounded-2xl flex flex-col gap-y-6 shadow-md shadow-gray-800">
      <div className="flex flex-col gap-y-4">
        <img
          src={iconStar}
          alt="icon-star"
          className="bg-gray-700/60 rounded-full p-2 w-10 h-10"
        />

        <h2 className="text-white text-xl font-bold">How did we do?</h2>
        <p className="text-sm">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </div>
      <RadioInputs rating={rating} onChange={handleChange} />
      <button
        className="py-3 bg-primary text-white font-semibold tracking-widest rounded-3xl text-sm hover:bg-white hover:text-primary hover:font-bold"
        type="button"
        onClick={handleClick}
      >
        SUBMIT
      </button>
    </main>
  )
}
export default Card
