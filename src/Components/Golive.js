function Golive() {
  
  return (
    <div class="bg-purple-900 dark:bg-gray-800">
      <div class="relative px-9 py-5 overflow-hidden sm:px-6 sm:py-8 lg:p-12 xl:p-20 ml-14">
        <div class="absolute inset-y-0 right-0 hidden lg:block lg:left-2/3 xl:left-1/2 ">
          <picture>
            <source srcSet="images/make event img.png" type="image/webp" />
            <source srcSet="images/make event img.png" />
            <img
              class="object-cover w-1/2 maw-w-44  mb-5 mx-auto"
              src="/images/laptop img.png"
              alt="shopping item"
            />
          </picture>
        </div>

        <h2 class="text-2xl font-semibold font-display text-white dark:text-white sm:text-3xl ">
          We&#x27;ve got more coming...
        </h2>
        <p class="mt-2 max-w-xl text-base text-gray-400">
          Want to hear from us when we add new components? Sign up for our
          newsletter and we&#x27;ll email you every time we release a new batch
          of components.
        </p>
        <form>
          <div class="mt-6 sm:flex justify-start">
            <button
              class="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-orange-500 rounded-lg shadow-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-orange-200"
              type="submit"
            >
              Go Virtual, Go Global
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Golive;
