import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      {/* Profile Picture */}
      <div className="w-32 h-32 mb-4 text-blue-500">
        <Image 
          src="/banner.jpeg" // Path to your image in the public folder
          alt="Profile Picture of Saima Riaz"
          width={100} // width of the image in pixels
          height={100} // height of the image in pixels
          className="rounded-full" // Rounded shape for a profile picture
        />
      </div>

      <h1 className="text-4xl font-bold mb-4 text-purple-600">Hello I am Saima Riaz</h1>
      <p className="text-lg mb-6 text-pink-600">
        I am a It student exploring the world of web development.
      </p>
      <Link href="/about" className="text-purple-600 font-bold hover:underline">
        Learn more about me
      </Link>
    </div>
  )
}

// import Link from 'next/link'

// export default function Home() {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
//       <h1 className="text-4xl font-bold mb-4">Hello, I am Saima Riaz</h1>
//       <p className="text-lg text-gray-700 mb-6">
//         I am a It student exploring the world of web development.
//       </p>
//       <Link href="/about" className="text-blue-500 hover:underline">
//         Learn more about me
//       </Link>
//     </div>
//   )
// }