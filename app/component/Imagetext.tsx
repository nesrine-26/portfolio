import React from 'react'

const Imagetext = (imgUrl:{url:string}) => {
  return (
    <div className='flex justify-center gap-32    items-center h-screen max-w-[90%] mx-auto w-screen  '>
        <div className='w-1/2 h-1/2 bg-amber-500'>
 <img src={imgUrl.url} alt="Image" className='object-cover w-full h-full' />
        </div>
     

      <div className='relative z-50 text-black w-1/2 '>
      <p>
          hello world, hello world  hello world  hello world  hello world  hello world  hello world  hello world  hello world  hello world        
     
      </p>
         <button
        className="group relative flex h-12 items-center justify-center gap-3 overflow-hidden max-w-max border border-white/30
                bg-linear-to-r from-black/80 via-gray-500 to-black/80
                px-4 text-lg font-extrabold text-white 
                transition-all duration-300
                hover:scale-110 
                active:scale-95 mt-10"
      >
        <span className="absolute inset-0 animate-pulse bg-linear-to-r from-gray-200  via-black/40 to-indigo-gray-900 blur-xl opacity-60" />
        {/* Shine sweep */}
        <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
        {/* Floating spark */}
        <span className="absolute top-2 right-4 h-2 w-2 animate-ping rounded-full bg-white/70" />
        Learn More 
      </button>
      </div>
    </div>
  )
}

export default Imagetext
