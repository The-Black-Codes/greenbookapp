import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { createIncident, getAllBusinesses, getAllIncidentTypes } from "../managers/BusinessManager";

export const IncidentForm = () => { 
    const navigate = useNavigate()
    const [business, setBusiness] = useState([]);
    const [incidentType, setIncidentTypes] = useState([]);

    const [currentIncident, setCurrentIncident] = useState({
        // userId: 0,
        businessId: 0,
        incidentTypeId: 0,
        title: "",
        content: "",
        date: "",

    })

    const changeIncidentState = (event) => {

		const newIncident = { ...currentIncident }
		let selectedVal = event.target.value 

		if (event.target.id.includes("Id")) {
			selectedVal = parseInt(selectedVal)
		}

        // if (event.target.id === "date") {
        //     newIncident.date = selectedVal;
        // } else {
        //     newIncident[event.target.id] = selectedVal;
        // }

		newIncident[event.target.id] = selectedVal
		// update state
		setCurrentIncident(newIncident)
	}

    useEffect(() => {
		
        getAllBusinesses().then(setBusiness)
	}, []);

    useEffect(() => {
		
        getAllIncidentTypes().then(setIncidentTypes)
	}, []);


    const handleClickSaveIncident = (event) => {
		event.preventDefault() //Prevents the browser from submitting the form

		const businessId = currentIncident.businessId
        const incidentTypeId = currentIncident.incidentTypeId
		// const user = JSON.parse(sessionStorage.getItem("greenbookapp_users"))
		const newIncident = { ...currentIncident }
		// newIncident.userId = user.id
		newIncident.date = currentIncident.date;

		if ( businessId === 0 ) {
			window.alert("Please select business")
        } else if (incidentTypeId === 0) {
            window.alert("Please select incident type")
		} else {
			
			createIncident(newIncident)
				.then(() => navigate("/incidents"))
		}

	}

    
    return (
        <>
        <h1 className="text-2xl font-bold mt-10 mb-6 flex justify-center">Report Incident</h1>
            <form className="flex justify-center ">
                <section className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md bg-yellow-200">
            <fieldset className="mb-4">
                    <div className="m-1">
                        <label htmlFor="title" className="block mb-2 font-bold">Title:</label>
                        <input type="text" id="title"
                            onChange={changeIncidentState}
                            required autoFocus 
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
                            value={currentIncident.title}
                            placeholder="Yelled at me"
                            />
                        </div>
                        </fieldset>

            <fieldset className="mb-4">
				<div className="form-group">
					<label htmlFor="date" className="block mb-2 font-bold">Date of Incident:</label>
					<input type="date" id="date"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
                            onChange={changeIncidentState} 
                            required autoFocus
                            value={currentIncident.date} 
                            placeholder="02/28/2023" />
					</div>
					</fieldset>
                        <fieldset className="mb-4">
			        <div className="form-group">
					{/* <label htmlFor="business">Assign to business: </label> */}
					<select value={currentIncident.businessId} name="business" id="businessId" onChange={changeIncidentState} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500" >
						<option value="0">Select a business</option>
						{business.map(business => (
							<option key={business.id} value={business.id}>
								{business.name}
							</option>
						))}
					</select>
				</div>
			</fieldset>
            <fieldset className="mb-4">
			        <div className="form-group">
					{/* <label htmlFor="incidentType">Incident Type: </label> */}
					<select value={currentIncident.incidentTypeId} name="incidentType" id="incidentTypeId" onChange={changeIncidentState} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500" >
						<option value="0">Select a Incident Type</option>
						{incidentType.map(incidentType => (
							<option key={incidentType.id} value={incidentType.id}>
								{incidentType.type}
							</option>
						))}
					</select>
				</div>
			</fieldset>
            <fieldset className="mb-4">
                    <div className="m-1">
                        {/* <label htmlFor="title">Content:</label> */}
                        <textarea
                            id="content"
                            onChange={changeIncidentState}
                            required
                            autoFocus
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
                            value={currentIncident.content}
                            placeholder="Tell us what happened..."
                            />
                        </div>
                        </fieldset>
            

            
            <div className="incident-submit-button">
                <button className="bg-greenbook-green text-white p-1 rounded-lg m-7"
                    onClick={handleClickSaveIncident}>Submit Button</button>
                    </div>

            </section>
            </form>
        </> 
    )
}