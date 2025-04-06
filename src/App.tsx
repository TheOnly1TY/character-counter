import { Nav } from "./components/Nav"
import { HeadingText } from "./HeadingText"
import { InputField } from "./components/InputField"

function App() {

  return (
    <section className="lg:max-w-[990px] p-4 md:px-8 lg:mx-auto lg:pt-6 ">
      <Nav />
      <HeadingText />
      <InputField />
      <Result />
    </section>
  )
}

function Result(){
  return <section className="flex justify-between items-center  gap-4">
    <div className="bg-[url(/images/pattern-character-count.svg)] bg-right bg-purple-400 bg-no-repeat w-full h-[150px] rounded-[12px] p-4">
      <h2>278</h2>
      <h3>Total Characters</h3>
    </div>
    <div className="bg-[url(/images/pattern-word-count.svg)] bg-[#FF9F00] bg-right bg-no-repeat w-full h-[150px] rounded-[12px] p-4">
    <h2>39</h2>
    <h3>Word Count</h3>
    </div>
    <div className="bg-[url(/images/pattern-sentence-count.svg)] bg-[#FE8159] bg-right bg-no-repeat w-full h-[150px] rounded-[12px] p-4">
    <h2>04</h2>
    <h3>Sentence Count</h3>
    </div>
  </section>
}

export default App
