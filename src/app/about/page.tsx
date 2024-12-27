import Link from 'next/link'
export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <h1 className="text-4xl font-bold mb-4 text-pink-900">About Me</h1>
      <p className="text-lg text-pink-600 mb-6 max-w-md text-center ">
        My name is Saima Riaz and I am a student of It Program. I am passionate about learning new technologies especially web development. I am currently working with Next.js and Tailwind CSS to build responsive and modern websites.
    </p>
      <Link href="/contact" className="text-pink-900 font-bold hover:underline">
        Get in touch
      </Link>
    </div>
  )
}
