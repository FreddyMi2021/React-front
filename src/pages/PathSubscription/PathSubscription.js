import react from 'react';
import SubscriptionPathCard from './Components/SubscriptionPathCard/SubscriptionPathCard';
const PathSubscription =() =>{
    return(
        <div className="w-full h-screen overflow-y-scroll pb-64 md:pb-0 md:overflow-hidden px-4 bg-gray-50">
            <h2 className="text-gray-500 font-bold text-center py-12">NOS TYPES D'ABONNEMENTS</h2>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:grid-cols-4 gap-4">
                <SubscriptionPathCard />
                <SubscriptionPathCard />
                <SubscriptionPathCard />
                <SubscriptionPathCard />
            </div>
		</div>
    )
}
export default PathSubscription;