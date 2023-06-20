const RadioInputs = ({ rating, onChange }) => {
  const radioInputsHTML = Array(5)
    .fill(null)
    .map((radio, index) => (
      <label
        key={`radio-${index}`}
        className={`${
          rating == index + 1
            ? "bg-neutral-gray text-white font-semibold"
            : "bg-gray-700/60"
        } flex items-center justify-center w-11 h-11 rounded-full cursor-pointer hover:bg-primary hover:text-white hover:font-semibold text-neutral-gray`}
      >
        <input
          id={`rating-${index + 1}`}
          value={index + 1}
          type="radio"
          name="rating"
          onChange={(e) => onChange(e)}
          className={`appearance-none`}
        />
        {index + 1}
      </label>
    ))
  return <div className="flex justify-between">{radioInputsHTML}</div>
}
export default RadioInputs
