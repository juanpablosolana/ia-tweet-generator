export default function ImageSkeletor() {
  return (

    <div role="status" class="space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center">
      <div class="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          ariaHidden="true"
          className="w-12 h-12 text-gray-200"
          viewBox="0 0 640 512"
        >
          <path d="M480 80c0-44.18 35.8-80 80-80s80 35.82 80 80c0 44.2-35.8 80-80 80s-80-35.8-80-80zM0 456.1c0-10.5 2.964-20.8 8.551-29.7L225.3 81.01C231.9 70.42 243.5 64 256 64s24.1 6.42 30.8 17.01L412.7 281.7l48.2-79c3.2-6.6 11.3-10.7 19.1-10.7 7.8 0 15 4.1 19.1 10.7l132 216.4c5.8 9.5 8.9 20.6 8.9 31.8 0 33.7-27.4 61.1-61.1 61.1H55.91C25.03 512 0 486.1 0 456.1z"></path>
        </svg>
      </div>
      <div class="w-full">
        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
      </div>
      <span class="sr-only">Loading...</span>
    </div>

  )
}