import '@styles/globals.css';
import { Children } from 'react';

export const metadata = {
    title: 'Promptopia',
    description: 'Discover and share AI prompts'
}

const Rootlayout = () => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <div className="app">
          {Children}
        </div>
      </body>
    </html>
  )
}

export default Rootlayout