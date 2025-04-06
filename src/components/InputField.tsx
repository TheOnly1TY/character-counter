export function InputField() {
  return <div>
    <textarea className="text-[1.25rem] leading-[140%] tracking-[-0.6px] text-neutral-700 w-full h-[200px] bg-neutral-100 rounded-[12px] outline-0 border-2 border-neutral-200 p-3 md:p-4 mb-4 hover:bg-neutral-200 active:bg-neutral-200W" placeholder="Start typing here… (or paste your text)"></textarea>
    <div className="flex justify-between items-start md:items-center flex-col md:flex-row">
      <div className="flex  items-start md:items-center flex-col md:flex-row gap-[12px] md:gap-6">
        <span className="flex items-center gap-2">
        <figure className="flex justify-center items-center w-4 h-4 rounded-[4px] border border-neutral-600 " role="checkbox">
            {/* <img src="/images/icon-check.svg" /> */}
          </figure>
          <p className="text-base leading-[130%] tracking-[-0.6px] text-neutral-900">Exclude Spaces</p></span>
        <span className="flex items-center gap-2">
          {/* <input type="checkbox" /> */}
          <figure className="flex justify-center items-center w-4 h-4 rounded-[4px] border border-neutral-600" role="checkbox ">
            {/* <img src="/images/icon-check.svg" /> */}
          </figure>
          <p className="text-base leading-[130%] tracking-[-0.6px] text-neutral-900">Set Character Limit</p>
          {/* <input type="text" className="text-base leading-[140%] tracking-[-0.6px] text-neutral-900 w-[55px] h-[29px] border border-neutral-800 rounded-[6px] p-3" /> */}
        </span>
      </div>
      <p className="text-base leading-[130%] tracking-[-0.6px] text-neutral-900 pt-[12px] md:pt-0">Approx. reading time: 0 minute</p>
    </div>
  </div>;
}
