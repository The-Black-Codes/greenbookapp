import React, { useState, useEffect } from 'react';
import { getAllMembers } from '../managers/TeamManager.js';
import { Team } from "./Team.js"

export const TeamList = () => {

    const [members, setMembers] = useState([]);


    useEffect(() => {
        getAllMembers().then((members) => {
          setMembers(members);
        });
    }, []);


    return (
        <>
        <main>
        <h1 class="text-5xl text-center m-8">Meet the Team!</h1>
        <div className="flex justify-center">
        <Team members={members}/>
        </div>
        </main>
        </>
    )
}