import Link from "next/link"

// This is simply a function definition which includes the parameters which is in the name: type format
// You then return the content you want to display in HTML format
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <nav>
          <Link href="/">Home</Link>
          {" | "}
          <Link href="/notes">Notes</Link>
          {" | "}
          <Link href="/notes/new">Create New</Link>
        </nav>
        {children}
      </body>
    </html>
  )
}