export function InputField() {
  return <div>
    <textarea className="w-full h-[12.5rem] text-preset-3 text-neutral-700 dark:text-neutral-200 bg-neutral-100 dark:bg-neutral-700 border-neutral-200 dark:border-[#2A2B37] hover:bg-neutral-200 dark:hover:bg-neutral-600 active:bg-neutral-200 dark:active:bg-neutral-600 placeholder:text-neutral-900 dark:placeholder:text-neutral-200 rounded-[12px] outline-0 border-2 p-3 md:p-4 mb-4" placeholder="Start typing here… (or paste your text)"></textarea>
    <div className="flex justify-between items-start md:items-center flex-col md:flex-row">
      <div className="flex items-start md:items-center flex-col md:flex-row gap-[12px] md:gap-6">
        <span className="flex items-center gap-2">
        <figure className="flex justify-center items-center w-4 h-4 rounded-[4px] border border-neutral-600 dark:border-neutral-200" role="checkbox">
            {/* <img src="/images/icon-check.svg" /> */}
          </figure>
          <p className="text-preset-4 text-neutral-900 dark:text-neutral-200">Exclude Spaces</p></span>
        <span className="flex items-center gap-2">
          {/* <input type="checkbox" /> */}
          <figure className="flex justify-center items-center w-4 h-4 rounded-[4px] border border-neutral-600 dark:border-neutral-200" role="checkbox ">
            {/* <img src="/images/icon-check.svg" /> */}
          </figure>
          <p className="text-preset-4 text-neutral-900 dark:text-neutral-200">Set Character Limit</p>
          {/* <input type="text" className="text-base leading-[140%] tracking-[-0.6px] text-neutral-900 w-[55px] h-[29px] border border-neutral-800 rounded-[6px] p-3" /> */}
        </span>
      </div>
      <p className="text-preset-4 text-neutral-900 dark:text-neutral-200 pt-[12px] md:pt-0">Approx. reading time: 0 minute</p>
    </div>
  </div>;
}
