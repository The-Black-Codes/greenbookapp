import { BuildingStorefrontIcon, CalendarDaysIcon, ShieldExclamationIcon } from '@heroicons/react/20/solid'


export const About = () => {
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
        <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
          <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
            <img
              className="absolute inset-0 h-full w-full bg-gray-50 object-cover"
              src="https://images.unsplash.com/photo-1521151716396-b2da27b1a19f"
              alt="Black Joy"
            />
          </div>
        </div>
        <div className="px-6 lg:contents">
          <div className="mx-auto max-w-2xl pt-16 pb-24 sm:pt-20 sm:pb-32 lg:mr-0 lg:ml-8 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2">
            <p className="text-base font-semibold leading-7 text-neutral-900">For Us By Us</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-emerald-700 sm:text-4xl">The Greenest Book!</h1>
            <p className="mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
            The Green Book was a travel guide created by Victor Hugo Green, an African American postal worker, 
            in 1936 during the era of segregation in the United States. The guide listed safe places 
            for Black travelers to stay, dine, and shop while on the road, as many establishments 
            refused to serve Black customers or subjected them to discrimination and violence.
            </p>
        
            <h2 className="mt-16 text-2xl font-bold tracking-tight text-emerald-700">We're putting a new twist on the Green Book and getting your reviews 
            straight from the source in real time.</h2>
            <div className="mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
             
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <BuildingStorefrontIcon className="mt-1 h-5 w-5 flex-none text-emerald-700" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">List of Businesses You Must Visit</strong> Check out Nashville's most popular
                    businesses and see how they're ranked. 
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <CalendarDaysIcon className="mt-1 h-5 w-5 flex-none text-emerald-700" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Events</strong> Be sure to know when the next boycott is.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ShieldExclamationIcon className="mt-1 h-5 w-5 flex-none text-emerald-700" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Incident Reports</strong> We want to know what's really
                    going on at these places of business. Do you feel safe? If not, what happened. Report it immediately in our
                    incidents section.
                  </span>
                </li>
              </ul>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
