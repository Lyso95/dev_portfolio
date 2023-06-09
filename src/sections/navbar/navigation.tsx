import { Disclosure} from '@headlessui/react'
import { Bars3Icon, EnvelopeOpenIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Avatar from '../../assets/img/amos_avatar.jpg'

const navigation = [
  { name: 'Start', href: '#hero', current: true },
  { name: 'Angebote', href: '#feature', current: true},
  { name: 'Über mich', href: '#', current: false },
  { name: 'Projekte', href: '#', current: false },
  { name: 'Engagement', href: '#', current: false },
]


function classNames({ classes = [] }: { classes?: any[] } = {}) {
  return classes.filter(Boolean).join(' ')
}

export default function Navigation() {
  return (
    <Disclosure as="nav" className="bg-gray-800 sticky top-0 z-50">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto mx-auto lg:hidden rounded-full justify-start sm:float-left"
                    src={Avatar}
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block rounded-full"
                    src={Avatar}
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                            {
                                classes: [item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                    'rounded-md px-3 py-2 text-sm font-medium']
                            }                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <a className='flex items-center gap-1 my-auto bg-gray-900 shadow-black shadow-md hover:shadow-md hover:shadow-lime-400 active:bg-gray-700 active:text-lime-200 active:shadow-md active:shadow-black text-lime-400 rounded-md px-2 py-1 h-8 md:h-7 text-sm font-medium mr-2' href='#'>
              <EnvelopeOpenIcon className='h-6 md:h-4'/>
              Hire me
              </a>

                {/* Right Image */}
                
                <img
                        className="h-8 w-8 rounded-full hidden md:block  shadow-sm shadow-black"
                        src={Avatar}
                        alt=""
                 />
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                      {
                          classes: [item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                              'block rounded-md px-3 py-2 text-base font-medium']
                      }                  )}
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