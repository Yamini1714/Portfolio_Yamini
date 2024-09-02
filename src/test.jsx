import { Linkedin, Mail, Phone } from 'lucide-react'
import React from 'react'

export default function Component() {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <div className="text-xl font-bold text-gray-800">M. YAMINI</div>
          <div className="flex space-x-4">
            <a href="#profile" className="text-gray-600 hover:text-gray-800">Profile</a>
            <a href="#education" className="text-gray-600 hover:text-gray-800">Education</a>
            <a href="#skills" className="text-gray-600 hover:text-gray-800">Skills</a>
            <a href="#projects" className="text-gray-600 hover:text-gray-800">Projects</a>
          </div>
        </div>
      </nav>

      <header className="bg-gray-800 text-white py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-2">M. YAMINI</h1>
          <h2 className="text-2xl mb-4">Computer Science Engineering with Artificial Intelligence</h2>
          <div className="flex items-center space-x-4">
            <a href="tel:+917501652595" className="flex items-center">
              <Phone className="w-5 h-5 mr-2" />
              +91 7501652595
            </a>
            <a href="mailto:myamini2020@gmail.com" className="flex items-center">
              <Mail className="w-5 h-5 mr-2" />
              myamini2020@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/m-yamini1708" className="flex items-center">
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </a>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        <section id="profile" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">PROFILE</h2>
          <p className="text-gray-700">
            To get an opportunity where I can make the best of my potential & contribute to the organization's growth.
            Possess exceptional communication and interpersonal skills with a proven ability to work independently and as
            part of a team.
          </p>
        </section>

        <section id="education" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">EDUCATION</h2>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">GITA Autonomous College, Bhubaneswar</h3>
            <p>Bachelor's of Technology in Computer Science Engineering with specialization in AI | CGPA : 8.9</p>
            <p>2020 - 2024</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Kendriya Vidyalaya , KKD</h3>
            <p>Class 12 - 76% CBSE Board</p>
            <p>Class 10 - 84% CBSE Board</p>
          </div>
        </section>

        <section id="skills" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">TECHNICAL SKILLS</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">Programming Languages</h3>
              <ul className="list-disc list-inside">
                <li>JAVA</li>
                <li>Python</li>
                <li>Spring Boot</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Database Management</h3>
              <ul className="list-disc list-inside">
                <li>MySQL</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Web Development</h3>
              <ul className="list-disc list-inside">
                <li>HTML</li>
                <li>Cascading Style Sheets</li>
                <li>Bootstrap</li>
                <li>React.js</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="projects" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">PROJECTS</h2>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Online Book Shoppe</h3>
            <p className="text-gray-700">
              Developed a comprehensive online book store application, incorporating user-friendly interfaces for
              browsing, purchasing, and reviewing books. Utilized technologies such as HTML, CSS, JavaScript, and a
              backend framework (e.g., MySQL) for a robust and scalable solution.
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2023 M. YAMINI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}