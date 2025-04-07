export function Result() {
  return <section className="flex justify-between items-center flex-col md:flex-row gap-4 mt-10 lg:mt-12 mb-6">
    <div className="flex flex-col justify-center bg-[url(/images/pattern-character-count.svg)] bg-right bg-[#D3A0FA] bg-no-repeat w-full h-[150px] rounded-[12px] p-5 md:px-3 md:p-4">
      <h2 className="text-preset-1 result-heading">00</h2>
      <h3 className="text-preset-3 text-neutral-900">Total Characters</h3>
    </div>
    <div className=" flex flex-col justify-center bg-[url(/images/pattern-word-count.svg)] bg-[#FF9F00] bg-right bg-no-repeat w-full h-[150px] rounded-[12px] p-5 md:px-3 md:p-4">
      <h2 className="text-preset-1 result-heading">00</h2>
      <h3 className="text-preset-3 text-neutral-900">Word Count</h3>
    </div>
    <div className="flex flex-col justify-center bg-[url(/images/pattern-sentence-count.svg)] bg-[#FE8159] bg-right bg-no-repeat w-full h-[150px] rounded-[12px] p-5 md:px-3 md:p-4">
      <h2 className="text-preset-1 result-heading">00</h2>
      <h3 className="text-preset-3 text-neutral-900">Sentence Count</h3>
    </div>
  </section>;
}
