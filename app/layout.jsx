import '@styles/globals.css'

export const metadata = {
    title: "eco-mmerce",
    description: 'Shop your favorite sustainable styles'
}

const RootLayout = ({ children }) => {
  return (
    <html Lang="en">
        <body>
            <div className="main">
                <div className="gradient" />
            </div>

            <main className="app">
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout;