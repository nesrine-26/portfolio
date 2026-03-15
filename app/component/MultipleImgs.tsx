import React from 'react'

const MultipleImgs = ({imgUrls }:{imgUrls:string[]} ) => {
  return (
    <div className='w-[90%] mx-auto  '>
      <div className='flex items-center justify-center w-full gap-10 py-20'>
   {imgUrls?.map((url:string, index:number) => (
        <img key={index} src={url} alt={`Image ${index + 1}`} className='object-cover w-full h-full' />
      ))}
        </div>
   
    </div>
  )
}

export default MultipleImgs
