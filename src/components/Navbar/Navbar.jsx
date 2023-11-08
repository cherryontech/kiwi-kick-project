import { Fragment } from 'react'
import { useEffect } from "react";
import { Link } from 'react-router-dom'
import { createPortal } from "react-dom";
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Badge } from '@mui/material'
import SpoonsModal from '../SpoonsModal/SpoonsModal';

const Navbar = ({
  taskList,
  maxSpoons,
  setShowSpoonsModal,
  showSpoonsModal,
  remainingSpoons,
  setRemainingSpoons,
  usedSpoons,
  setUsedSpoons,
  plannedSpoons,
  setPlannedSpoons, }) => {

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

  useEffect(() => {
    const spoonCount = (arr) => {

      const checkedArray = [];
      arr.map(task => {
        if (task.checked === true) {
          return checkedArray.push(task.spoons)
        }
      })
      const used = checkedArray.reduce((accumulator, spoon) => accumulator + spoon, 0);

      const spoonArray = [];
      arr.map(task => {
        return spoonArray.push(task.spoons);
      })
      const totalSpoons = spoonArray.reduce((accumulator, currentSpoon) => accumulator + currentSpoon, 0);

      setUsedSpoons(used)
      setPlannedSpoons(totalSpoons - used)
      setRemainingSpoons(maxSpoons - totalSpoons)
    }

    spoonCount(taskList);

  }, [taskList])

  return (
    <Disclosure as="nav" className="bg-background">
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
                    <svg
                      alt="spoonfull logo"
                      width="72"
                      height="35"
                      viewBox="0 0 124 60"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.4035 16.672C11.3155 16.816 11.2235 16.924 11.1275 16.996C11.0315 17.06 10.9115 17.092 10.7675 17.092C10.6155 17.092 10.4435 17.028 10.2515 16.9C10.0675 16.772 9.83547 16.632 9.55547 16.48C9.28347 16.32 8.95947 16.176 8.58347 16.048C8.20747 15.912 7.75947 15.844 7.23947 15.844C6.75947 15.844 6.33547 15.904 5.96747 16.024C5.60747 16.144 5.30347 16.312 5.05547 16.528C4.80747 16.744 4.61947 17 4.49147 17.296C4.37147 17.584 4.31147 17.9 4.31147 18.244C4.31147 18.684 4.42747 19.052 4.65947 19.348C4.89147 19.636 5.19547 19.884 5.57147 20.092C5.95547 20.3 6.39147 20.484 6.87947 20.644C7.36747 20.796 7.86347 20.96 8.36747 21.136C8.87947 21.312 9.37947 21.512 9.86747 21.736C10.3555 21.96 10.7875 22.244 11.1635 22.588C11.5475 22.932 11.8555 23.352 12.0875 23.848C12.3195 24.344 12.4355 24.948 12.4355 25.66C12.4355 26.428 12.3035 27.148 12.0395 27.82C11.7755 28.492 11.3915 29.08 10.8875 29.584C10.3915 30.08 9.77547 30.472 9.03947 30.76C8.31147 31.048 7.47947 31.192 6.54347 31.192C5.99147 31.192 5.45147 31.136 4.92347 31.024C4.40347 30.92 3.90347 30.772 3.42347 30.58C2.95147 30.38 2.50747 30.14 2.09147 29.86C1.67547 29.58 1.30347 29.268 0.975468 28.924L1.79147 27.58C1.86347 27.468 1.95547 27.38 2.06747 27.316C2.17947 27.252 2.30347 27.22 2.43947 27.22C2.62347 27.22 2.82747 27.308 3.05147 27.484C3.27547 27.652 3.54347 27.84 3.85547 28.048C4.17547 28.248 4.55947 28.436 5.00747 28.612C5.45547 28.78 5.99147 28.864 6.61547 28.864C7.63147 28.864 8.41547 28.616 8.96747 28.12C9.52747 27.624 9.80747 26.94 9.80747 26.068C9.80747 25.58 9.69147 25.184 9.45947 24.88C9.22747 24.568 8.91947 24.308 8.53547 24.1C8.15947 23.892 7.72747 23.716 7.23947 23.572C6.75147 23.428 6.25547 23.276 5.75147 23.116C5.24747 22.948 4.75147 22.756 4.26347 22.54C3.77547 22.316 3.33947 22.028 2.95547 21.676C2.57947 21.316 2.27547 20.876 2.04347 20.356C1.81147 19.828 1.69547 19.172 1.69547 18.388C1.69547 17.764 1.81547 17.16 2.05547 16.576C2.30347 15.992 2.65947 15.476 3.12347 15.028C3.59547 14.572 4.17547 14.208 4.86347 13.936C5.55147 13.664 6.33547 13.528 7.21547 13.528C8.20747 13.528 9.11547 13.684 9.93947 13.996C10.7715 14.308 11.4875 14.752 12.0875 15.328L11.4035 16.672ZM16.8547 27.928C17.2147 28.392 17.6067 28.72 18.0307 28.912C18.4627 29.096 18.9387 29.188 19.4587 29.188C20.4667 29.188 21.2507 28.82 21.8107 28.084C22.3787 27.348 22.6627 26.252 22.6627 24.796C22.6627 24.044 22.5987 23.404 22.4707 22.876C22.3427 22.34 22.1587 21.904 21.9187 21.568C21.6787 21.232 21.3867 20.988 21.0427 20.836C20.6987 20.684 20.3107 20.608 19.8787 20.608C19.2227 20.608 18.6547 20.752 18.1747 21.04C17.7027 21.32 17.2627 21.724 16.8547 22.252V27.928ZM16.7227 20.536C17.2347 19.936 17.8147 19.452 18.4627 19.084C19.1187 18.716 19.8787 18.532 20.7427 18.532C21.4307 18.532 22.0547 18.672 22.6147 18.952C23.1747 19.224 23.6547 19.624 24.0547 20.152C24.4547 20.68 24.7627 21.336 24.9787 22.12C25.2027 22.896 25.3147 23.788 25.3147 24.796C25.3147 25.7 25.1907 26.544 24.9427 27.328C24.7027 28.104 24.3547 28.78 23.8987 29.356C23.4427 29.924 22.8907 30.372 22.2427 30.7C21.5947 31.02 20.8627 31.18 20.0467 31.18C19.3267 31.18 18.7147 31.064 18.2107 30.832C17.7147 30.6 17.2627 30.28 16.8547 29.872V35.068H14.2747V18.76H15.8347C16.1867 18.76 16.4107 18.924 16.5067 19.252L16.7227 20.536ZM32.6335 18.568C33.5375 18.568 34.3535 18.716 35.0815 19.012C35.8175 19.308 36.4415 19.728 36.9535 20.272C37.4735 20.816 37.8735 21.476 38.1535 22.252C38.4335 23.028 38.5735 23.9 38.5735 24.868C38.5735 25.836 38.4335 26.708 38.1535 27.484C37.8735 28.26 37.4735 28.924 36.9535 29.476C36.4415 30.02 35.8175 30.44 35.0815 30.736C34.3535 31.032 33.5375 31.18 32.6335 31.18C31.7215 31.18 30.8975 31.032 30.1615 30.736C29.4335 30.44 28.8095 30.02 28.2895 29.476C27.7695 28.924 27.3695 28.26 27.0895 27.484C26.8095 26.708 26.6695 25.836 26.6695 24.868C26.6695 23.9 26.8095 23.028 27.0895 22.252C27.3695 21.476 27.7695 20.816 28.2895 20.272C28.8095 19.728 29.4335 19.308 30.1615 19.012C30.8975 18.716 31.7215 18.568 32.6335 18.568ZM32.6335 29.164C33.7375 29.164 34.5575 28.796 35.0935 28.06C35.6375 27.316 35.9095 26.256 35.9095 24.88C35.9095 23.504 35.6375 22.444 35.0935 21.7C34.5575 20.948 33.7375 20.572 32.6335 20.572C31.5135 20.572 30.6815 20.948 30.1375 21.7C29.5935 22.444 29.3215 23.504 29.3215 24.88C29.3215 26.256 29.5935 27.316 30.1375 28.06C30.6815 28.796 31.5135 29.164 32.6335 29.164ZM45.8645 18.568C46.7685 18.568 47.5845 18.716 48.3125 19.012C49.0485 19.308 49.6725 19.728 50.1845 20.272C50.7045 20.816 51.1045 21.476 51.3845 22.252C51.6645 23.028 51.8045 23.9 51.8045 24.868C51.8045 25.836 51.6645 26.708 51.3845 27.484C51.1045 28.26 50.7045 28.924 50.1845 29.476C49.6725 30.02 49.0485 30.44 48.3125 30.736C47.5845 31.032 46.7685 31.18 45.8645 31.18C44.9525 31.18 44.1285 31.032 43.3925 30.736C42.6645 30.44 42.0405 30.02 41.5205 29.476C41.0005 28.924 40.6005 28.26 40.3205 27.484C40.0405 26.708 39.9005 25.836 39.9005 24.868C39.9005 23.9 40.0405 23.028 40.3205 22.252C40.6005 21.476 41.0005 20.816 41.5205 20.272C42.0405 19.728 42.6645 19.308 43.3925 19.012C44.1285 18.716 44.9525 18.568 45.8645 18.568ZM45.8645 29.164C46.9685 29.164 47.7885 28.796 48.3245 28.06C48.8685 27.316 49.1405 26.256 49.1405 24.88C49.1405 23.504 48.8685 22.444 48.3245 21.7C47.7885 20.948 46.9685 20.572 45.8645 20.572C44.7445 20.572 43.9125 20.948 43.3685 21.7C42.8245 22.444 42.5525 23.504 42.5525 24.88C42.5525 26.256 42.8245 27.316 43.3685 28.06C43.9125 28.796 44.7445 29.164 45.8645 29.164ZM56.2154 20.38C56.4794 20.108 56.7514 19.864 57.0314 19.648C57.3194 19.424 57.6234 19.232 57.9434 19.072C58.2634 18.912 58.6034 18.788 58.9634 18.7C59.3234 18.612 59.7154 18.568 60.1394 18.568C60.8114 18.568 61.3994 18.68 61.9034 18.904C62.4154 19.128 62.8434 19.444 63.1874 19.852C63.5394 20.26 63.8034 20.752 63.9794 21.328C64.1554 21.896 64.2434 22.524 64.2434 23.212V31H61.6754V23.212C61.6754 22.388 61.4834 21.748 61.0994 21.292C60.7234 20.836 60.1474 20.608 59.3714 20.608C58.7954 20.608 58.2594 20.74 57.7634 21.004C57.2754 21.268 56.8154 21.628 56.3834 22.084V31H53.8034V18.76H55.3634C55.7154 18.76 55.9394 18.924 56.0354 19.252L56.2154 20.38Z" fill="#001111" />
                      <path d="M73.5521 12.482V20.78H83.6861V24.182H73.5521V35H69.3221V9.08H85.4861V12.482H73.5521ZM102.417 16.64V35H100.077C99.5608 35 99.2308 34.754 99.0868 34.262L98.7988 32.552C98.4148 32.96 98.0068 33.332 97.5748 33.668C97.1548 34.004 96.7048 34.292 96.2248 34.532C95.7448 34.772 95.2288 34.958 94.6768 35.09C94.1368 35.222 93.5548 35.288 92.9308 35.288C91.9228 35.288 91.0348 35.12 90.2668 34.784C89.4988 34.448 88.8508 33.974 88.3228 33.362C87.8068 32.75 87.4168 32.018 87.1528 31.166C86.8888 30.302 86.7568 29.354 86.7568 28.322V16.64H90.6268V28.322C90.6268 29.558 90.9088 30.518 91.4728 31.202C92.0488 31.886 92.9188 32.228 94.0828 32.228C94.9348 32.228 95.7268 32.036 96.4588 31.652C97.2028 31.256 97.8988 30.716 98.5468 30.032V16.64H102.417ZM110.338 8.36V35H106.468V8.36H110.338ZM118.337 8.36V35H114.467V8.36H118.337Z" fill="#23A1AF" />
                      <path d="M96.6426 59.6343C96.5496 59.662 96.4504 59.662 96.3574 59.6343L80.9233 55.0412C80.8545 55.0207 80.7909 54.9856 80.7368 54.9384L70.0024 45.5532C69.6548 45.2492 69.8697 44.6768 70.3315 44.6768L122.668 44.6768C123.13 44.6768 123.345 45.2492 122.998 45.5532L112.263 54.9384C112.209 54.9856 112.145 55.0207 112.077 55.0412L96.6426 59.6343Z" fill="#F7559E" />
                      <path d="M81 44.6768L41 50.1768L3.17433 53.4865C2.00542 53.5888 1 52.6675 1 51.4941V46.6768C1 45.5722 1.89543 44.6768 3 44.6768L81 44.6768Z" fill="#F7559E" />
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
              <div className="flex flex-col justify-center items-center p-4 gap-4">
                <div>
                  <button className="btn-modal" onClick={() => { console.log("button Clicked"); setShowSpoonsModal(true); }}>
                    <Badge badgeContent={4} color="primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.025 11.4492L3.68505 6.42088C3.46973 6.25033 3.29292 6.03615 3.16624 5.79241C3.03956 5.54868 2.96588 5.28091 2.95002 5.00667C2.93417 4.73244 2.97651 4.45796 3.07426 4.20125C3.17201 3.94455 3.32295 3.71142 3.51719 3.51719C3.71142 3.32295 3.94455 3.17201 4.20125 3.07426C4.45796 2.97651 4.73244 2.93417 5.00667 2.95002C5.28091 2.96588 5.54868 3.03956 5.79241 3.16624C6.03615 3.29292 6.25033 3.46973 6.42088 3.68505L11.4492 10.025C12.5384 9.54922 14.1992 9.48505 15.5984 10.8834C16.4442 11.7301 16.9709 12.765 17.1509 13.75C17.3259 14.7084 17.1917 15.7717 16.4817 16.4817C15.7725 17.1917 14.7084 17.3259 13.7509 17.1509C12.7659 16.9709 11.73 16.4442 10.8842 15.5975C9.48422 14.1984 9.54922 12.5384 10.025 11.4492Z" fill="#0F0129" />
                      </svg>
                    </Badge>
                    <div>Spoons</div></button>
                  {showSpoonsModal && createPortal(
                    <SpoonsModal
                      setShowSpoonsModal={setShowSpoonsModal}
                      remainingSpoons={remainingSpoons}
                      usedSpoons={usedSpoons}
                      plannedSpoons={plannedSpoons}
                    />,
                    document.body
                  )}
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

export default Navbar;