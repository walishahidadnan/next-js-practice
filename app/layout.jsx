import Nav from '@components/Nav';
// import Provider from '@components/Provider';
import '@styles/globals.css';

export const metadata = {
    title: 'Promptopia',
    description: 'Discover and share AI prompts'
}

const Rootlayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <div className="app">
          <Nav />
          {children}
        </div>
      </body>
    </html>
  )
}

export default Rootlayout