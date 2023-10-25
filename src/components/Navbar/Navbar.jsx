import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]

function classNames(...classes) {
  ``
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-navbar-background">
      {({ open }) => (
        <>
          <div className="mx-0 max-w-7xl sm:px-4">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-4 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                < Link to='/'>
                  <div className="flex flex-shrink-0 items-center">
                    <svg width="110" height="100
                    " viewBox="0 0 86 19" fill="none" xmlns="http://www.w3.org/2000/svg" alt="SpoonFull Logo">
                      <path d="M8.60625 2.98C8.53958 3.09333 8.46958 3.17667 8.39625 3.23C8.32292 3.28333 8.22958 3.31 8.11625 3.31C7.99625 3.31 7.85958 3.25667 7.70625 3.15C7.55292 3.03667 7.35958 2.91333 7.12625 2.78C6.89958 2.64 6.62625 2.51667 6.30625 2.41C5.98625 2.29667 5.60292 2.24 5.15625 2.24C4.73625 2.24 4.36625 2.29667 4.04625 2.41C3.73292 2.51667 3.46958 2.66667 3.25625 2.86C3.04292 3.04667 2.87958 3.27 2.76625 3.53C2.65958 3.78333 2.60625 4.06 2.60625 4.36C2.60625 4.74667 2.70292 5.06667 2.89625 5.32C3.09625 5.57333 3.35625 5.79 3.67625 5.97C3.99625 6.15 4.35958 6.30667 4.76625 6.44C5.17292 6.57333 5.58958 6.71333 6.01625 6.86C6.44292 7 6.85958 7.16333 7.26625 7.35C7.67292 7.53667 8.03625 7.77333 8.35625 8.06C8.67625 8.34 8.93292 8.68667 9.12625 9.1C9.32625 9.50667 9.42625 10.0067 9.42625 10.6C9.42625 11.2333 9.31625 11.8267 9.09625 12.38C8.88292 12.9333 8.56958 13.4167 8.15625 13.83C7.74292 14.2433 7.23292 14.57 6.62625 14.81C6.02625 15.0433 5.34292 15.16 4.57625 15.16C4.11625 15.16 3.66958 15.1133 3.23625 15.02C2.80292 14.9333 2.39292 14.81 2.00625 14.65C1.61958 14.4833 1.25625 14.2867 0.91625 14.06C0.582917 13.8267 0.282917 13.5667 0.01625 13.28L0.62625 12.26C0.68625 12.18 0.75625 12.1133 0.83625 12.06C0.922917 12.0067 1.01958 11.98 1.12625 11.98C1.26625 11.98 1.42625 12.0533 1.60625 12.2C1.79292 12.3467 2.01958 12.51 2.28625 12.69C2.55958 12.8633 2.88292 13.0233 3.25625 13.17C3.63625 13.3167 4.09625 13.39 4.63625 13.39C5.07625 13.39 5.46958 13.3333 5.81625 13.22C6.16292 13.1 6.45292 12.9333 6.68625 12.72C6.92625 12.5 7.10958 12.2367 7.23625 11.93C7.36292 11.6233 7.42625 11.2833 7.42625 10.91C7.42625 10.49 7.32958 10.1467 7.13625 9.88C6.94292 9.61333 6.68625 9.39 6.36625 9.21C6.04625 9.03 5.68292 8.87667 5.27625 8.75C4.86958 8.62333 4.45292 8.49333 4.02625 8.36C3.59958 8.22 3.18292 8.06 2.77625 7.88C2.36958 7.7 2.00625 7.46667 1.68625 7.18C1.36625 6.88667 1.10958 6.52333 0.91625 6.09C0.722917 5.65 0.62625 5.11 0.62625 4.47C0.62625 3.95667 0.72625 3.46 0.92625 2.98C1.12625 2.5 1.41625 2.07667 1.79625 1.71C2.18292 1.33667 2.65625 1.04 3.21625 0.819999C3.77625 0.593333 4.41625 0.48 5.13625 0.48C5.94292 0.48 6.68292 0.609999 7.35625 0.869999C8.03625 1.12333 8.62625 1.49 9.12625 1.97L8.60625 2.98ZM13.3903 12.5C13.7103 12.92 14.0536 13.2133 14.4203 13.38C14.7936 13.5467 15.2103 13.63 15.6703 13.63C16.5636 13.63 17.2536 13.31 17.7403 12.67C18.2336 12.0233 18.4803 11.0833 18.4803 9.85C18.4803 9.20333 18.4236 8.65333 18.3103 8.2C18.2036 7.74 18.0436 7.36667 17.8303 7.08C17.6236 6.78667 17.367 6.57333 17.0603 6.44C16.7536 6.3 16.407 6.23 16.0203 6.23C15.4536 6.23 14.9603 6.35667 14.5403 6.61C14.127 6.86333 13.7436 7.22333 13.3903 7.69V12.5ZM13.2903 6.36C13.5036 6.10667 13.7303 5.87667 13.9703 5.67C14.217 5.45667 14.4803 5.27667 14.7603 5.13C15.0403 4.97667 15.337 4.86 15.6503 4.78C15.9703 4.69333 16.3103 4.65 16.6703 4.65C17.2503 4.65 17.7736 4.76333 18.2403 4.99C18.7136 5.21667 19.117 5.55 19.4503 5.99C19.7836 6.43 20.0403 6.97333 20.2203 7.62C20.407 8.26667 20.5003 9.01 20.5003 9.85C20.5003 10.6033 20.397 11.3033 20.1903 11.95C19.9903 12.59 19.7003 13.1467 19.3203 13.62C18.947 14.0933 18.487 14.4667 17.9403 14.74C17.4003 15.0067 16.7903 15.14 16.1103 15.14C15.5036 15.14 14.9836 15.04 14.5503 14.84C14.117 14.64 13.7303 14.36 13.3903 14V18.41H11.4403V4.84H12.6103C12.8836 4.84 13.0536 4.97 13.1203 5.23L13.2903 6.36ZM27.0203 4.68C27.767 4.68 28.4403 4.80333 29.0403 5.05C29.647 5.29 30.1603 5.64 30.5803 6.1C31.007 6.55333 31.3336 7.10333 31.5603 7.75C31.787 8.39 31.9003 9.11 31.9003 9.91C31.9003 10.71 31.787 11.4333 31.5603 12.08C31.3336 12.7267 31.007 13.2767 30.5803 13.73C30.1603 14.1833 29.647 14.5333 29.0403 14.78C28.4403 15.02 27.767 15.14 27.0203 15.14C26.267 15.14 25.587 15.02 24.9803 14.78C24.3803 14.5333 23.867 14.1833 23.4403 13.73C23.0136 13.2767 22.6836 12.7267 22.4503 12.08C22.2236 11.4333 22.1103 10.71 22.1103 9.91C22.1103 9.11 22.2236 8.39 22.4503 7.75C22.6836 7.10333 23.0136 6.55333 23.4403 6.1C23.867 5.64 24.3803 5.29 24.9803 5.05C25.587 4.80333 26.267 4.68 27.0203 4.68ZM27.0203 13.62C27.9803 13.62 28.697 13.2967 29.1703 12.65C29.6436 12.0033 29.8803 11.0933 29.8803 9.92C29.8803 8.74667 29.6436 7.83667 29.1703 7.19C28.697 6.53667 27.9803 6.21 27.0203 6.21C26.047 6.21 25.3203 6.53667 24.8403 7.19C24.367 7.83667 24.1303 8.74667 24.1303 9.92C24.1303 11.0933 24.367 12.0033 24.8403 12.65C25.3203 13.2967 26.047 13.62 27.0203 13.62ZM38.407 4.68C39.1537 4.68 39.827 4.80333 40.427 5.05C41.0337 5.29 41.547 5.64 41.967 6.1C42.3937 6.55333 42.7204 7.10333 42.947 7.75C43.1737 8.39 43.287 9.11 43.287 9.91C43.287 10.71 43.1737 11.4333 42.947 12.08C42.7204 12.7267 42.3937 13.2767 41.967 13.73C41.547 14.1833 41.0337 14.5333 40.427 14.78C39.827 15.02 39.1537 15.14 38.407 15.14C37.6537 15.14 36.9737 15.02 36.367 14.78C35.767 14.5333 35.2537 14.1833 34.827 13.73C34.4004 13.2767 34.0704 12.7267 33.837 12.08C33.6104 11.4333 33.497 10.71 33.497 9.91C33.497 9.11 33.6104 8.39 33.837 7.75C34.0704 7.10333 34.4004 6.55333 34.827 6.1C35.2537 5.64 35.767 5.29 36.367 5.05C36.9737 4.80333 37.6537 4.68 38.407 4.68ZM38.407 13.62C39.367 13.62 40.0837 13.2967 40.557 12.65C41.0304 12.0033 41.267 11.0933 41.267 9.92C41.267 8.74667 41.0304 7.83667 40.557 7.19C40.0837 6.53667 39.367 6.21 38.407 6.21C37.4337 6.21 36.707 6.53667 36.227 7.19C35.7537 7.83667 35.517 8.74667 35.517 9.92C35.517 11.0933 35.7537 12.0033 36.227 12.65C36.707 13.2967 37.4337 13.62 38.407 13.62ZM47.2938 6.25C47.5138 6.01667 47.7438 5.80333 47.9838 5.61C48.2238 5.41667 48.4771 5.25333 48.7438 5.12C49.0171 4.98 49.3071 4.87333 49.6138 4.8C49.9271 4.72 50.2604 4.68 50.6138 4.68C51.1738 4.68 51.6638 4.77333 52.0838 4.96C52.5104 5.14667 52.8671 5.41 53.1538 5.75C53.4404 6.08333 53.6571 6.48667 53.8038 6.96C53.9504 7.43333 54.0238 7.95667 54.0238 8.53V15H52.0638V8.53C52.0638 7.80333 51.8971 7.24 51.5638 6.84C51.2304 6.43333 50.7204 6.23 50.0338 6.23C49.5338 6.23 49.0638 6.35 48.6238 6.59C48.1904 6.82333 47.7871 7.14333 47.4138 7.55V15H45.4638V4.84H46.6338C46.9071 4.84 47.0771 4.97 47.1438 5.23L47.2938 6.25Z" fill="#0F0129" />
                      <path d="M59.1952 2.37V7.18H64.9552V8.91H59.1952V15H57.0552V0.639999H65.9552V2.37H59.1952ZM75.6716 4.84V15H74.5016C74.2349 15 74.0616 14.87 73.9816 14.61L73.8416 13.59C73.6216 13.8233 73.3916 14.0367 73.1516 14.23C72.9116 14.4233 72.6549 14.59 72.3816 14.73C72.1082 14.8633 71.8182 14.9667 71.5116 15.04C71.2049 15.12 70.8749 15.16 70.5216 15.16C69.9616 15.16 69.4682 15.0667 69.0416 14.88C68.6216 14.6933 68.2682 14.4333 67.9816 14.1C67.6949 13.76 67.4782 13.3533 67.3316 12.88C67.1849 12.4067 67.1116 11.8833 67.1116 11.31V4.84H69.0716V11.31C69.0716 12.0367 69.2382 12.6033 69.5716 13.01C69.9049 13.41 70.4149 13.61 71.1016 13.61C71.6016 13.61 72.0682 13.4933 72.5016 13.26C72.9349 13.02 73.3416 12.6933 73.7216 12.28V4.84H75.6716ZM80.3934 0.239999V15H78.4334V0.239999H80.3934ZM85.1786 0.239999V15H83.2186V0.239999H85.1786Z" fill="#049D32" fillOpacity="0.93" />
                    </svg>
                  </div>
                </Link>
                <div className="hidden sm:ml-6 sm:block">
                  {/* TODO: update menu options
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            {/* TODO: update menu options */}
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
} 