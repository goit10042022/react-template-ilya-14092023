import reactLogo from './assets/react.svg'
import fleekLogo from './assets/fleekLogo.svg'
import fleekMark from './assets/fleekMark.svg'
import plusIcon from './assets/plus.svg'
import viteLogo from './assets/vite.svg'

import './App.css'

function App() {
  return (
    <main>
      <div className="hero-top">
        <img src={fleekLogo} style={{ height: 87 }} />
        <img src={plusIcon} />
        <img src={reactLogo} style={{ height: 87 }} />
      </div>
      <p className='description'>
        This is a template for creating a React site build it with Vite and deploying it on Fleek.
      </p>
      <ul role="list" className='card-list'>
        <Card
          icon={fleekMark}
          width={31}
          href="https://docs.fleek.xyz/"
          title="Fleek Documentation"
          body="Learn about Fleek & the available services by cheking our official docs."
        />

        <Card
          icon={reactLogo}
          width={31}
          href="https://react.dev/"
          title="React Documentation"
          body="Learn about React in their official docs."
        />

        <Card
          icon={fleekMark}
          width={31}
          href="https://blog.fleek.xyz/"
          title="Fleek Blog"
          body="Checkout our Blog for more information about Fleek."
        />

        <Card
          icon={viteLogo}
          width={31}
          href="https://vitejs.dev/guide/"
          title="Vite Documentation"
          body="Learn about Vite & how it can bring you a modern development experience."
        />
      </ul>
    </main >
  )
}

type CardProps = {
  title: string;
  body: string;
  href: string;
  icon: string;
  width: number;
}

function Card({ title, width, body, href, icon }: CardProps) {
  return (
    <li className='card'>
      <a href={href}>
        <div className='card-top-row'>
          <img
            alt='card-icon'
            style={{ height: 31, width }}
            src={icon}
          />
          <h2>
            {title}
          </h2>
        </div>
        <p>
          {body}
        </p>
      </a>
    </li>
  )
}

export default App
