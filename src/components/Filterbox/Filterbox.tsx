import { BsCameraReelsFill } from "react-icons/bs";

export default function Filterbox() {
  return (
    <div className="flex flex-col mx-20 mt-50 py-10 px-20 rounded-2xl border border-blue-600">
      <div className="flex flex-row grid-cols-12">
        <div className="col-span-4">
          <BsCameraReelsFill className="text-blue-600 text-8xl"/>
        </div>
        <div className="flex flex-col shrink">
          <div className="px-5 flex w-full">
            <form className="max-w-sm mx-auto px-20">
              <label htmlFor="countries_disabled" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
              <select  id="countries_disabled" className="bg-gray-50 pe-10 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option defaultValue={"all"}>Choose a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </form>
            <form className="max-w-sm mx-auto">
              <label htmlFor="countries_disabled" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
              <select disabled id="countries_disabled" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option defaultValue={"all"}>Choose a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </form>
            

          </div>
          <div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  )
}
