import { Facebook, Instagram, Mail, Phone, Twitter, X } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-black text-white text-center py-10'>
       
        <div className='flex justify-between mx-[10%] '>
             <div>
<div className='text-center flex ml-[10%]  '>
            <h2 className='text-center flex ml-10 mb-5  '>Contact Us </h2>
         </div>
        <div className='text-center flex ml-[10%]  '>
             <a href="mailto:infofigue@gmail.com" className='text-blue-500 ml-5 hover:underline flex items-center gap-2'><Mail /> infofigue@gmail.com </a>
        </div>
        <div className='text-center flex ml-[10%]  '>
             <a href="tel:+1234567890" className='text-blue-500 ml-5 hover:underline flex items-center gap-2'><Phone /> +1 (234) 567-890 </a>
        </div>
        
        </div>
            <div>
                <h2>Social Media</h2>
                <div className='flex items-center mt-5 '>
                <div className='text-center flex   '>
                    <a href="mailto:infofigue@gmail.com" className='text-blue-500 ml-5 hover:underline flex justify-center items-center gap-2 bg-white w-10 h-10 rounded-full mx-auto'><Facebook /> </a>
                </div>
                 <div className='text-center flex   '>
                    <a href="mailto:infofigue@gmail.com" className='text-blue-500 ml-5 hover:underline flex justify-center items-center gap-2 bg-white w-10 h-10 rounded-full mx-auto'><Instagram /> </a>
                </div>
                 <div className='text-center flex   '>
                    <a href="mailto:infofigue@gmail.com" className='text-blue-500 ml-5 hover:underline flex justify-center items-center gap-2 bg-white w-10 h-10 rounded-full mx-auto'><Twitter
                     /> </a>
                </div>

                </div>
            </div>
        </div>
        
      <p>&copy; {new Date().getFullYear()} My Company. All rights reserved.</p>
    </footer>
  )
}

export default Footer
