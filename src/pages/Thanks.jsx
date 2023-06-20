import thanksImg from "../assets/images/illustration-thank-you.svg"
const Popup = ({ rating }) => {
  return (
    <main className="max-w-[350px] mx-auto bg-neutral-blue py-9 px-4 rounded-2xl flex flex-col items-center text-center  gap-y-6 shadow-md shadow-gray-800">
      <img
        src={thanksImg}
        alt="illustration-thank-you"
        className="max-w-[150px]"
      />
      <span className="text-sm bg-gray-700/40 text-primary p-1 px-3 rounded-2xl">
        You selected {rating} out of 5
      </span>
      <h2 className="text-2xl text-white font-bold mb-[-12px]">Thank you!</h2>
      <p className="text-sm">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </main>
  )
}
export default Popup
