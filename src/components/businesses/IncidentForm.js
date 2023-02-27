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
		// const user = JSON.parse(sessionStorage.getItem("greenbookapp_users"))
		const newIncident = { ...currentIncident }
		// newIncident.userId = user.id
		newIncident.date = new Date().toLocaleString();

		if ( businessId === 0 ) {
			window.alert("Please select business")
		} else {
			
			createIncident(newIncident)
				.then(() => navigate("/incidents"))
		}

	}

    
    return (
        <>
        <h1>Report Incident</h1>
            <form className="incidentForm">
                <section className="alter-incident-form">
            <fieldset>
			        <div className="form-group">
					{/* <label htmlFor="business">Assign to business: </label> */}
					<select value={currentIncident.businessId} name="business" id="businessId" onChange={changeIncidentState} className="form-control" >
						<option value="0">Select a business</option>
						{business.map(business => (
							<option key={business.id} value={business.id}>
								{business.name}
							</option>
						))}
					</select>
				</div>
			</fieldset>
            <fieldset>
			        <div className="form-group">
					{/* <label htmlFor="incidentType">Incident Type: </label> */}
					<select value={currentIncident.incidentTypeId} name="incidentType" id="incidentTypeId" onChange={changeIncidentState} className="form-control" >
						<option value="0">Select a Incident Type</option>
						{incidentType.map(incidentType => (
							<option key={incidentType.id} value={incidentType.id}>
								{incidentType.type}
							</option>
						))}
					</select>
				</div>
			</fieldset>
            <fieldset>
				<div className="form-group">
					<label htmlFor="date">Date of Incident:</label>
					<input type="date" id="date" 
                            onChange={changeIncidentState} 
                            required autoFocus className="form-control" 
                            value={setCurrentIncident.date} 
                            placeholder="02/28/2023" />
					</div>
					</fieldset>
            <fieldset>
                    <div className="form-group">
                        <label htmlFor="title">Title:</label>
                        <input type="text" id="title"
                            onChange={changeIncidentState}
                            required autoFocus className="form-control"
                            value={setCurrentIncident.title}
                            placeholder="Yelled at me"
                            />
                        </div>
                        </fieldset>
            <fieldset>
                    <div className="form-group">
                        <label htmlFor="title">Content:</label>
                        <input type="text" id="content"
                            onChange={changeIncidentState}
                            required autoFocus className="form-control"
                            value={setCurrentIncident.content}
                            placeholder="As soon as I walked in ..."
                            />
                        </div>
                        </fieldset>
            <div className="incident-submit-button">
                <button className="btn btn-primary"
                    onClick={handleClickSaveIncident}>Submit Button</button>
                    </div>

            </section>
            </form>
        </> 
    )
}