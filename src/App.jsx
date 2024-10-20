function App() {

  return (
    <>
    <div className="flex justify-center items-center">
      <article className="bg-white rounded-2xl w-full sm:w-[450px] xxs:w-[331px]">
        <header>
          <div className="bg-[url('/images/illustration-hero.svg')] sm:h-56 rounded-t-2xl bg-cover xxs:h-40">
          </div>
        </header>
        <main>
          <div className='text-center'>
            <h1 className='sm:text-3xl font-bold sm:mt-14 xxs:mt-10 xxs:text-xl'>Order Summary</h1>
            <p className='mt-6 sm:mx-16 xxs:mx-10 font-medium sm:text-lg tracking-tight xxs:text-base leading-5 text-gray-500 '>You can now listen to millions of songs, audiobooks, and podcasts on any 
            device anywhere you like!</p>
          </div>
          <section aria-labelledby='plan-info'>
          <div className='rounded-xl bg-neutral-veryPaleBlue sm:p-6 xxs:p-4 flex sm:w-[352px] xxs:w-[279px] mx-auto mt-6 sm:mb-8 xxs:mb-6 items-center'>
            <img src="./images/icon-music.svg" alt='Music icon'></img>
            <div className='ml-4'>
              <h2 id="plan-info" className='font-bold sm:text-lg xxs:test-sm text-neutral-darkBlue'>Annual Plan</h2>
              <p className='font-medium sm:text-base xxs:text-sm text-neutral-desaturatedBlue'>$59.99/year</p>
            </div>
            <a href="#" className='text-sm font-bold underline underline-offset-1 text-primary-brightBlue/70 ml-auto sm:hover:text-primary-brightBlue xxs:hover:text-neutral-mobileBlue transform transitions tracking-tighter'>Change</a>
          </div>
          </section>
          <section>
            <button className='rounded-lg sm:bg-primary-brightBlue xxs:bg-neutral-mobileBlue xxs:w-[279px] sm:w-[354px] sm:mx-12 xxs:mx-6 h-12 text-white place-items-center content-center hover:shadow-xl sm:shadow-primary-brightBlue xxs:shadow-neutral-mobileBlue sm:mb-9 xxs:mb-7 font-bold text-base hover:-translate-y-0.5 transform transition '>Proceed to Payment</button>
          </section>
          </main>
          <footer>
            <p className='font-bold text-base text-neutral-desaturatedBlue text-center sm:mb-12 xxs:mb-9 mx-auto cursor-pointer sm:hover:text-primary-brightBlue xxs:hover:text-neutral-mobileBlue transform transition'>Cancel Order</p>
          </footer>
      </article>
    </div>
    </>
  )
}

export default App
