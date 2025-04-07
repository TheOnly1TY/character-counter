import { UseTheme } from "../contexts/ThemeContext";

export function LetterDensity() {
  const {theme} = UseTheme()
  return <section>
    <h2 className="text-preset-2 text-neutral-900 dark:text-neutral-200 font-semibold">Letter Density</h2>
    <p className="text-preset-4 text-neutral-600 dark:text-neutral-200 mt-6">No characters found. Start typing to see letter density.</p>
    {/* <ul className="flex flex-col gap-3 my-5">
      <li className="flex justify-between items-center gap-3.5">
        <p className="text-preset-4 text-neutral-900 dark:text-neutral-200 w-4">E</p>
        <div className="w-full h-3 bg-neutral-100 dark:bg-neutral-800 rounded-full flex-1 overflow-hidden">
          <div className="h-full w-[16.06%] bg-purple-400 rounded-full" />
        </div>
        <span className="flex justify-end gap-1 text-preset-4 text-neutral-900 dark:text-neutral-200 w-[90px] text-rigdark:bg-neutral-800 ht">
          <p>40</p>
          <p>(16.06%)</p>
        </span>
      </li>
      <li className="flex justify-between items-center gap-3.5">
        <p className="text-preset-4 text-neutral-900 dark:text-neutral-200 w-4">I</p>
        <div className="w-full h-3 bg-neutral-100 dark:bg-neutral-800 rounded-full flex-1 overflow-hidden">
          <div className="h-full w-[11.65%] bg-purple-400 rounded-full" />
        </div>
        <span className="flex justify-end gap-1 text-preset-4 text-neutral-900 dark:text-neutral-200 w-[90px] text-rightdark:bg-neutral-800   ">
          <p>29</p>
          <p>(11.65%)</p>
        </span>
      </li>
      <li className="flex justify-between items-center gap-3.5">
        <p className="text-preset-4 text-neutral-900 dark:text-neutral-200 w-4">T</p>
        <div className="w-full h-3 bg-neutral-100 dark:bg-neutral-800 rounded-full flex-1 overflow-hidden">
          <div className="h-full w-[11.24%] bg-purple-400 rounded-full" />
        </div>
        <span className="flex justify-end gap-1 text-preset-4 text-neutral-900 dark:text-neutral-200 w-[90px] text-rightdark:bg-neutral-800   ">
          <p>28</p>
          <p>(11.24%)</p>
        </span>
      </li>
      <li className="flex justify-between items-center gap-3.5">
        <p className="text-preset-4 text-neutral-900 dark:text-neutral-200 w-4">O</p>
        <div className="w-full h-3 bg-neutral-100 dark:bg-neutral-800 rounded-full flex-1 overflow-hidden">
          <div className="h-full w-[8.84%] bg-purple-400 rounded-full" />
        </div>
        <span className="flex justify-end gap-1 text-preset-4 text-neutral-900 dark:text-neutral-200 w-[90px] text-rightdark:bg-neutral-800   ">
          <p>22</p>
          <p>(8.84%)</p>
        </span>
      </li>
      <li className="flex justify-between items-center gap-3.5">
        <p className="text-preset-4 text-neutral-900 dark:text-neutral-200 w-4">N</p>
        <div className="w-full h-3 bg-neutral-100 dark:bg-neutral-800 rounded-full flex-1 overflow-hidden">
          <div className="h-full w-[8.43%] bg-purple-400 rounded-full" />
        </div>
        <span className="flex justify-end gap-1 text-preset-4 text-neutral-900 dark:text-neutral-200 w-[90px] text-right dark:bg-neutral-800   ">
          <p>21</p>
          <p>(8.43%)</p>
        </span>
      </li>
    </ul> */}
    <div className="flex items-center gap-2">
      <p className="text-preset-3 dark:text-neutral-200">See more</p>
      {
        theme  === "dark" ? <img src='/images/dropdown-dark.png' alt="dropdown-icon" /> : <img src='/images/dropdown.png' alt="dropdown-icon" />
      }
    </div> 
  </section>;
}
