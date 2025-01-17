import React from 'react'
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div id='contact' className='container pt-32'>
      <div className='grid md:grid-cols-2 gap-10'>
    <div className='space-y-8'>
     <h2 className='text-5xl'data-aos="zoom-in-up">Contact Me</h2>
     <p className='text-gray-600 text-[18px] pt-2'data-aos="zoom-in-up">
        I am currently available for freelance projects. If you have a project that you want to get started, think you need my help with something or just fancy saying hey, then get in touch.
     </p>
     <div className='flex gap-3 items-center'data-aos="zoom-in-up">
     <MdOutlineMail size={30} /> abc@gmail.com
     </div>
     <div className='flex gap-3 items-center'data-aos="zoom-in-up">
     <FaPhoneAlt size={30} /> +92-000-000-000
     </div>
    </div>
    <div className='space-y-8'>
        <div className='flex flex-col gap-1'data-aos="zoom-in-up">
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' className='h-[40px] bg-transparent border border-gray-300' />
        </div>
        <div className='flex flex-col gap-1' data-aos="zoom-in-up">
            <label htmlFor='email'>Email</label>
            <input type='text' id='email' className='h-[40px] bg-transparent border border-gray-300' />
        </div>
        <div className='flex flex-col gap-1'data-aos="zoom-in-up">
            <label htmlFor='message'>Message</label>
            <textarea  id='message' className='bg-transparent border border-gray-300' rows={8}></textarea>
        </div>
        <button className='bg-amber-400  px-4 py-2'data-aos="zoom-in-up">Send</button>
    </div>
      </div>
    </div>
  )
}

export default Contact
