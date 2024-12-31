import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <h1 className="text-xl font-bold text-blue-500">Waniya Tariq</h1>
      <div>
        <Link href="/" className="mr-4 text-blue-500">Home</Link>
        <Link href="/about" className="mr-4 text-blue-500">About</Link>
        <Link href="/contact" className="text-blue-500">Contact</Link>
      </div>
    </nav>
  )
}
