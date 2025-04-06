import { Nav } from "./components/Nav"
import { HeadingText } from "./components/HeadingText"
import { InputField } from "./components/InputField"
import { Result } from "./components/Result"
import { LetterDensity } from "./components/LetterDensity"

function App() {

  return (
  <main className="bg-[url(images/bg-light-theme.png)] bg-cover bg-center">
      <section className=" lg:max-w-[990px] p-4 pb-8 md:px-8 lg:mx-auto lg:pt-8 md:pb-16 font-dm-sans">
      <Nav />
      <HeadingText />
      <InputField />
      <Result />
      <LetterDensity />
    </section>
  </main>
  )
}
export default App
