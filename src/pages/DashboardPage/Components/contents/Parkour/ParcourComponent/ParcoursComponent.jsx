import React from 'react'
import ParkourCard from '../ParkourCard/ParkourCard';
const ParcourComponent = (props) => {
    return(
        <>
            <div className="w-full">
				<div className="max-w-7xl mx-auto p-4">
					<div className="flex flex-row space-x-8 ">

						{
							props.parkour ? (
								props.parkour.map( parkours => (
									<ParkourCard key={ parkours.id } parkours={ parkours } />
								) )
							) : (
								<></>
							)
						}

					</div>
				</div>
			</div>
        </>
    )
}
export default ParcourComponent;