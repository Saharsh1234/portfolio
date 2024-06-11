import React from 'react'
import Image from "next/image"
import Link from "next/link"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

function Projectsection() {
  const projects = [
    {
      name: "Blogify",
      description: "Engineered a full-stack blogging web app with Node.js, Express.js, and MongoDB on the back-end, and React.js with TailwindCSS on the front-end. Delivered robust features, including blog creation, user interaction, and account management. Enhanced user engagement by 20% and reduced page load times by 15%. Improved user satisfaction ratings by 25% through intuitive design and seamless functionality.",
      image: "/projectImage-1.png",
      github: "https://github.com/Saharsh1234/Blogify-project",
    },
    {
      name: "E-commerce REST API",
      description: "Engineered a robust e-commerce REST API using Django and Django REST Framework, supporting seamless transactions. Integrated with Postgres, Stripe, and AWS for smooth daily transactions for thousands of users. Implemented JWT authentication to enhance security and reduce unauthorized access attempts by 30%.",
      image: "/project.jpg",
      github: "https://github.com/Saharsh1234/ecomm-api",
    },
  ]
  return (
    <>
      <section id="projects">
        <h1 className="my-10 text-center font-bold text-4xl">
          Projects
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-28">
          {projects.map((project, idx) => {
            return (
              <div key={idx}>
                {/* <SlideUp offset="-300px 0px -300px 0px">*/}
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2 ml-10 my-8">
                    <Link href={project.github} target="_blank">
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70 h-80 border-solid border-2"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
                {/*</SlideUp>*/}
              </div>
            )
          })}

        </div>
      </section>
    </>
  )
}

export default Projectsection