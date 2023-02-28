
export const Team = () => {

    const members = [
        {
          id: 1,
          name: "Jonathan Woodard",
          info: "I'm a software developer who has recently made the transition to tech, after playing professional football for the last seven years. I'm a self-motivated, team oriented, algorithmic thinker with a passion for learning and a strength for working in a high pressure, fast-paced, environment. I'm accustomed to comprehending a variety of new concepts in a short period of time and seeking a position to expand and leverage my strengths.",
          linkedin:"https://www.linkedin.com/in/jonathan-woodard/"
        },
        {
            id: 2,
            name: "Tatiana Johnson",
            info: "Curious, passionate and eager to learn. With a background in journalism, digital content management, DJing & now software engineering",
            linkedin:"https://www.linkedin.com/in/tatianarjohnson/"
        },
        {
            id: 3,
            name: "Byron Glenn",
            info: 'Byron Glenn is a Nashville-based individual who has transitioned into the tech industry, currently working as a software developer apprentice at the Nashville Software School. Prior to this, he had a diverse range of experiences including working as a Realtor, running for county commission, serving as an executive director for a nonprofit, and being a certified coach, teacher, and speaker for the John Maxwell Team. He holds an MBA from Trevecca Nazarene University and is passionate about helping people and volunteering with non-profits. Through his podcast, "Dont Take it Personal with Byron Glenn," he talks about real issues with everyday people to create conversations that people may not have had while growing up.',
            linkedin:"https://www.linkedin.com/in/byronglenn/"
        },
        {
            id: 4,
            name: "Duley Williams",
            info: "Life long learner and creative. A curious mind with a strong passion for problem-solving while growing.",
            linkedin:"https://www.linkedin.com/in/duleygrafix/"
        },
        {
            id: 5,
            name: "Chaneice",
            info: "Prior to her transition to tech, Chaneice worked as a Family Support Services Specialist, Claims Adjuster, Volunteer Advocate, and even a Telemarketer. With her strong interpersonal skills and experience in collaborative problem-solving, Chaneice is ready to take on new challenges in the tech industry.",
            linkedin:"https://www.linkedin.com/in/jonathan-woodard/"
        }
    ]

    return (
        <>
        <main className="w-3/4 h-full mt-10">
        <div className="space-y-3">
            {members.map((member) => {
          return (
                <div className="border rounded-lg relative p-3">
                    <h2 className="text-xl">{member.name}</h2>
                    <div>{member.info}
                        </div>
                    <div>
                        <a href={member.linkedin} target="_blank" rel="noreferrer">
                            <img src="/facebook-icon.png" alt="Linkedin icon" className="w-8 h-8" />
                            </a>
                        </div>
                </div>
          );
        })}
            </div>
            </main>
        </>
    )
    

}