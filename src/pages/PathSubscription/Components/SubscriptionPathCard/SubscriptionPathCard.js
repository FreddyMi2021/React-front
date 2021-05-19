import react from 'react';
export default function SubscriptionPathCard(){
    return(
        <>
            <div className="h-full flex flex-col rounded-lg shadow-lg lg:rounded-none lg:rounded-l-lg">
                <div className="flex-1 flex flex-col">
                <div className="bg-green-600 rounded-b-full px-6 pt-12 pb-10">
                    <div>
                    <h2 className="mt-2 text-center text-3xl font-semibold font-display text-white">
                        1 mois
                    </h2>
                    <div className="mt-4 flex items-center justify-center font-display">
                        <span className="px-3 flex items-start text-6xl tracking-tight font-medium">
                            <span className="mt-2 mr-2 text-white text-4xl">
                            €
                            </span>
                            <span className="text-blue-300">
                                20
                            </span>
                        </span>
                        <span className="flex flex-col ">
                        <span className="text-2xl font-semibold text-white tracking-wide">EUR</span>
                        </span>
                    </div>
                    </div>
                </div>
                <div className="flex-1 flex flex-col justify-between p-6 bg-gray-50 sm:p-10 lg:p-6 xl:p-10">
                    <ul>
                    <li className="flex items-start">
                        <div className="flex-shrink-0">
                        <svg className="h-6 w-6 text-teal-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        </div>
                        <p className="ml-3 text-base font-medium text-gray-500">
                        All application UI components
                        </p>
                    </li>
                    <li className="mt-4 flex items-start">
                        <div className="flex-shrink-0">
                        <svg className="h-6 w-6 text-teal-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        </div>
                        <p className="ml-3 text-base font-medium text-gray-500">
                        Figma assets
                        </p>
                    </li>
                    <li className="mt-4 flex items-start">
                        <div className="flex-shrink-0">
                        <svg className="h-6 w-6 text-teal-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        </div>
                        <p className="ml-3 text-base font-medium text-gray-500">
                        Lifetime access
                        </p>
                    </li>
                    <li className="mt-4 flex items-start">
                        <div className="flex-shrink-0">
                        <svg className="h-6 w-6 text-teal-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        </div>
                        <p className="ml-3 text-base font-medium text-gray-500">
                        Use on unlimited projects
                        </p>
                    </li>
                    <li className="mt-4 flex items-start">
                        <div className="flex-shrink-0">
                        <svg className="h-6 w-6 text-teal-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        </div>
                        <p className="ml-3 text-base font-medium text-gray-500">
                        Free updates
                        </p>
                    </li>
                    <li className="mt-4 flex items-start">
                        <div className="flex-shrink-0">
                        <svg className="h-6 w-6 text-teal-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        </div>
                        <p className="ml-3 text-base font-medium text-gray-500">
                        Community access
                        </p>
                    </li>
                    </ul>
                    <div className="mt-8">
                    <div className="rounded-lg shadow-md">
                        <a href="/subscription-payment" className="uppercase block w-full text-center rounded-lg bg-purple-500 text-white px-6 py-3 text-base font-semibold font-display text-teal-600 hover:text-teal-500 focus:outline-none focus:shadow-outline transition ease-in-out duration-150">
                        S'abonner
                        </a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}