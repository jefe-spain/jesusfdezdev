export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800">
      <div className="py-8">
        <div className="text-center md:flex md:items-center md:justify-center md:space-x-4">
          {/* Social links */}
          <ul className="inline-flex mb-4 md:order-1 md:ml-4 md:mb-0 space-x-2">
            <li>
              <a
                className="flex justify-center items-center text-sky-500 hover:text-sky-600 transition duration-150 ease-in-out"
                href="https://x.com/jefe_spain"
                aria-label="Twitter"
              >
                <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" />
                </svg>
              </a>
            </li>
            <li>
              <a
                className="flex justify-center items-center text-sky-500 hover:text-sky-600 transition duration-150 ease-in-out"
                href="https://github.com/jefe-spain"
                aria-label="Github"
              >
                <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                </svg>
              </a>
            </li>
            <li>
              <a
                className="flex justify-center items-center text-sky-500 hover:text-sky-600 transition duration-150 ease-in-out"
                href="https://t.me/jefe_spain"
                aria-label="Telegram"
              >
                <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path  d="M22.968 10.276a.338.338 0 0 0-.232-.253 1.192 1.192 0 0 0-.63.045s-14.019 5.038-14.82 5.596c-.172.121-.23.19-.259.272-.138.4.293.573.293.573l3.613 1.177a.388.388 0 0 0 .183-.011c.822-.519 8.27-5.222 8.7-5.38.068-.02.118 0 .1.049-.172.6-6.606 6.319-6.64 6.354a.138.138 0 0 0-.05.118l-.337 3.528s-.142 1.1.956 0a30.66 30.66 0 0 1 1.9-1.738c1.242.858 2.58 1.806 3.156 2.3a1 1 0 0 0 .732.283.825.825 0 0 0 .7-.622s2.561-10.275 2.646-11.658c.008-.135.021-.217.021-.317a1.177 1.177 0 0 0-.032-.316Z" />
                </svg>
              </a>
            </li>
            <li>
              <a
                className="flex justify-center items-center text-sky-500 hover:text-sky-600 transition duration-150 ease-in-out"
                href="https://www.linkedin.com/in/jesusfdezfdez/"
                aria-label="LinkedIn"
              >
                <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.344 24H7.344V12h4v12zM9.344 10.2c-1.312 0-2.344-.891-2.344-2.2 0-1.31 1.032-2.2 2.344-2.2 1.312 0 2.344.89 2.344 2.2 0 1.309-1.032 2.2-2.344 2.2zM24.344 24h-4v-6.2c0-2.1-.656-3.3-2.072-3.3-1.547 0-2.238 1.4-2.238 3.3V24h-4V12h4v1.4c.656-1 1.547-1.9 3.594-1.9 3.328 0 4.716 2.1 4.716 5.9V24z"/>
                </svg>
              </a>
            </li>
          </ul>

          {/* Copyright */}
          <div className="text-sm text-slate-500 dark:text-slate-400">© {new Date().getFullYear()} jesusfdez.dev. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}