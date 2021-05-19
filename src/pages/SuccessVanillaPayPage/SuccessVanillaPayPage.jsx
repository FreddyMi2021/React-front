import { useQuery } from "@apollo/client"
import React from "react"
import { BsCheckCircle } from "react-icons/bs"
import { decryptUser, encryptString, passwordKey } from "../../services/BaseUrl"
import { SHOW_STUDENT_2 } from "../../services/queries/StudentsQueries"

const currentUser = localStorage.getItem('currentUser') ? JSON.parse(decryptUser(localStorage.getItem('currentUser'))) : {}

export const SuccessVanillaPayPage = () => {
  const { data, error, loading } = useQuery(SHOW_STUDENT_2(currentUser.data.data.id))

  if(error) {
		localStorage.removeItem("currentUser")
		window.location.href = "/"
	}
	if(loading) return ( <>LOADING...</> )

  if(data){
    const student = currentUser
    student.data.data.hex_id = data.student.hexId
    localStorage.setItem("currentUser", encryptString(JSON.stringify(student), passwordKey))
    return (
      <>
        <div className="text-green-600 flex flex-col items-center pb-5" style={ { marginTop: "25vh" } }>
          <BsCheckCircle size="10em" className="inline-block" />
          <span className="text-gray-700 text-lg text-center mb-10">Completed</span>
          <button onClick={ () => window.location.href = "/catalog" } className="py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:bg-green-500 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-opacity-75">Start now</button>
        </div>
      </>
    )
  }
}