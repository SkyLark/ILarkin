import React from 'react';


export default function PersonalPage() {
  return (
    <main className="max-w-xl mx-auto mt-10 p-8 bg-white rounded-2xl shadow-md font-sans">
      <section className="flex flex-col items-center mb-8">
        <img src="/globe.svg" alt="Profile" className="w-20 h-20 rounded-full bg-gray-100 mb-4 object-cover" />
        <h1 className="text-3xl font-semibold text-gray-900 mb-1">Jane Doe</h1>
        <p className="text-base text-gray-500">Minimalist | Designer | Dreamer</p>
      </section>
      <section>
        <h2 className="text-lg font-medium text-gray-800 mt-6 mb-2">About Me</h2>
        <p className="text-gray-700 mb-4">
          I am passionate about creating beautiful, simple, and functional digital experiences. I believe less is more.
        </p>
        <h2 className="text-lg font-medium text-gray-800 mt-6 mb-2">Projects</h2>
        <ul className="list-disc pl-5 text-gray-700 mb-4">
          <li>Minimalist Portfolio Website</li>
          <li>Clean UI Kit</li>
          <li>Lightweight Blog Platform</li>
        </ul>
        <h2 className="text-lg font-medium text-gray-800 mt-6 mb-2">Contact</h2>
        <p className="text-gray-700">Email: jane.doe@email.com</p>
      </section>
    </main>
  );
}
