import { useQuery } from '@apollo/client';
import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { decryptUser } from '../../../../services/BaseUrl';
import { PAYMENT_BY_STUDENT } from '../../../../services/queries/PaymentQueries';
import PaiementOptionCardMonthly from '../PaiementOptionCardMonthly/PaiementOptionCardMonthly';
import PaiementOptionCardStandard from '../PaiementOptionCardStandard/PaiementOptionCardStandard';

const currentUser = localStorage.getItem('currentUser') ? JSON.parse(decryptUser(localStorage.getItem('currentUser'))) : {}

export default function PaiementOptionsComponents(props) {
	const history = useHistory()
	const { data, error, loading } = useQuery(PAYMENT_BY_STUDENT(currentUser.data.data.id))
	if(error) {
		localStorage.removeItem("currentUser")
		window.location.href = "/"
	}
	if(loading) return ( <>LOADING...</> )

	// if(data){
	// 	if(data.paymentByStudent !== null){
	// 		if(data.paymentByStudent.paymentTickets.length === 0){
	// 			history.push("/catalog")
	// 		}
	// 	}
	// }
	return (
		<>

			<div className="w-full h-screen overflow-y-scroll pb-40 bg-gray-50">
					<div className="block md:flex flex-row md:space-x-12 justify-center px-4 md:px-0 mt-12">
						<PaiementOptionCardStandard productId={props.productId} studentId={currentUser.data.data.id} />
						<PaiementOptionCardMonthly productId={props.productId} studentId={currentUser.data.data.id} />
					</div>
			</div>
		</>
	)
}