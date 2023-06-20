import Card from "./pages/Card"
import Footer from "./components/Footer"
const App = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-between items-center">
      <div
        id="container"
        className="flex flex-col justify-center items-center flex-1"
      >
        <Card />
      </div>
      <Footer />
    </div>
  )
}
export default App
