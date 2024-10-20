function App() {

  return (
    <>
    <div className="flex justify-center items-center min-h-screen">
      <article className="bg-white rounded-2xl w-full max-w-sm">
        <header>
          <div className="bg-[url('/images/illustration-hero.svg')] h-44 rounded-t-2xl bg-cover">
          </div>
        </header>
        <main>
          <div className='text-center'>
            <h1 className='text-2xl font-bold mt-9 xxs:text-xl'>Order Summary</h1>
            <p className='mt-3.5 mx-auto font-medium tracking-wider w-64 text-xs leading-5 text-gray-500 font-bodyCopy'>You can now listen to millions of songs, audiobooks, and podcasts on any 
            device anywhere you like!</p>
          </div>
          <section aria-labelledby='plan-info'>
          <div className='rounded-xl bg-neutral-veryPaleBlue p-5 flex sm:w-72 xxs:w-[279px] mx-auto mt-4 mb-6 items-center'>
            <img src="./images/icon-music.svg" alt='Music icon'></img>
            <div className='ml-4'>
              <h2 id="plan-info" className='font-bold text-sm text-neutral-darkBlue xxs:tracking-wide'>Annual Plan</h2>
              <p className='font-medium text-sm text-neutral-desaturatedBlue tracking-normal xxs:tracking-wide'>$59.99/year</p>
            </div>
            <a href="#" className='sm:text-xs xxs:text-sm font-medium underline underline-offset-1 text-primary-brightBlue/70 ml-auto sm:hover:text-primary-brightBlue xxs:hover:text-neutral-mobileBlue transform transitions xxs:tracking-tighter'>Change</a>
          </div>
          </section>
          <section>
            <button className='rounded-lg sm:bg-primary-brightBlue xxs:bg-neutral-mobileBlue xxs:w-[279px] sm:w-72 mx-10 xxs:mx-6 sm:h-11 xxs:h-12 text-white place-items-center content-center hover:shadow-xl sm:shadow-primary-brightBlue xxs:shadow-neutral-mobileBlue mb-6 font-bold sm:tracking-wide xxs:tracking-normal xxs:text-base sm:text-xs hover:-translate-y-0.5 transform transition '>Proceed to Payment</button>
          </section>
          </main>
          <footer>
            <p className='font-bold xxs:text-base xxs:tracking-normal sm:text-xs sm:tracking-wide text-neutral-desaturatedBlue text-center mb-10 mx-auto cursor-pointer sm:hover:text-primary-brightBlue xxs:hover:text-neutral-mobileBlue transform transition'>Cancel Order</p>
          </footer>
      </article>
    </div>
    </>
  )
}

export default App
