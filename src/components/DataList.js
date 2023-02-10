export default function DataList({handlerMagic, CATEGORIES}) {
  return (
    <form className="space-y-4 md:space-y-6" onSubmit={handlerMagic}>
      <div>
        <label for="topics" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Write a topic</label>
        <input name="topics" id="topics" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="pets" required="" />
      </div>
      <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Generate!</button>
    </form>
  )
}
