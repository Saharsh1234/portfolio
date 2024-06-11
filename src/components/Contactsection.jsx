import React from 'react'
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "react-icons/ai"

import "@/app/globals.css"

function Contactsection() {
  return (
    <>
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl" id='contact'>
      <hr className="w-full h-0.5 mx-auto mt-8 border-2"></hr>
      <div className="mx-auto  p-4 flex flex-col text-center  md:flex-row md:justify-between">
        <div className="flex flex-row items-center justify-center space-x-1">
          © 2024 Sharsh Kumar<a href="/" className="hover:underline"></a>
        </div>
        <div className="flex flex-row items-center justify-center space-x-2 mb-1">
          <a href="https://github.com/Saharsh1234?tab=repositories" rel="noreferrer" target="_blank">
            <AiOutlineGithub
              className="hover:-translate-y-1 transition-transform cursor-pointer"
              size={30}
            />
          </a>
          

          <a
            href="https://www.linkedin.com/in/sharsh-kumar-1b5b94204?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineLinkedin
              className="hover:-translate-y-1 transition-transform cursor-pointer"
              size={30}
            />
          </a>
          <a
            href="mailto:sharshkumar07@gmail.com"
            rel="noreferrer"
            target="_blank"
            className="hover:-translate-y-1 transition-transform cursor-pointer"
          >
            Gmail
          </a>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Contactsection