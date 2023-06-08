var config = {
    style: 'mapbox://styles/jserfass/cli6ckzci00cf01r6e0ag9gwa',
    accessToken: 'pk.eyJ1IjoianNlcmZhc3MiLCJhIjoiY2w5eXA5dG5zMDZydDN2cG1zeXduNDF5eiJ9.6-9p8CxqQlWrUIl8gSjmNw',
    showMarkers: false,
    theme: 'dark',
    use3dTerrain: true,
    title: 'Operation Just Cause',
    subtitle: 'US Invasion of Panama - Tuesday Dec 19, 1989 to Tuesday Jan 30, 1990',
    inset: false,
    byline: '',
    //footer: '<h2>Data Utilized in These Maps</h2> <p1>Analysis by Joshua Serfass, 2022<br> National Park Boundaries: <a href="https://public-nps.opendata.arcgis.com/" target="_blank">https://public-nps.opendata.arcgis.com/</a><br> US Forest Service Boundaries: <a href="https://data-usfs.hub.arcgis.com/" target="_blank">https://data-usfs.hub.arcgis.com/</a><br>Route Data: <a href="https://www.peakbagger.com/" target="_blank">https://www.peakbagger.com/</a>, <a href="https://www.strava.com/athletes/18627052" target="_blank">https://www.strava.com/athletes/18627052</a><br></p1><h2>Works Cited</h2><p1>Beckey, F. W. (2008). Cascade Alpine Guide: Climbing & High Routes. Mountaineers Books.</p1><br><p1>Climbing rating systems. Mountain Madness. (n.d.). Retrieved December 12, 2022,from <a href="https://mountainmadness.com/resources/climbing-rating-systems#:~:text=Grade%201%3A%20Easy%20glacier%20route,to%20difficult%2C%20with%20technical%20climbing." target="_blank">https://mountainmadness.com/</a></p1><br><p1>EarthWord – prominence. EarthWord – Prominence | U.S. Geological Survey. (n.d.). Retrieved December 12, 2022, from <a href="https://www.usgs.gov/communications-and-publishing/news/earthword-prominence#:~:text=Definition%3A,the%20summit%20above%20sea%20level." target="_blank">https://usgs.gov/</a></p1><br><a href="https://jserfass.github.io/portfolio/#"><img src="pictures/mountain.png" alt="Home" style="width:100px;height:100px;"></a><br><p1>Portfolio Home</p1>',
        // add the Panama boundary polygon
    chapters: [
        {
            id: 'washington',
            alignment: 'full',
            title: 'Overview',
            image: 'pictures/WhiteHouse.jpg',
            description: "The U.S. military intervention in Panama, known as Operation Just Cause, commenced in mid-December 1989 under the leadership of President George H. W. Bush. The primary objective was to remove Panama's de facto leader, General Manuel Noriega, who was sought by American law enforcement for his involvement in organized crime and drug trafficking. The operation ended in late January 1990 when Noriega surrendered. As a result, the Panama Defense Forces (PDF) was disbanded and Guillermo Endara, the elected president, was inaugurated.<br></br>Noriega, who had a long history of association with U.S. intelligence services, had gradually taken control of Panama to become its unofficial dictator in the early 1980s. By the mid-1980s, the U.S. and Noriega's relationship started to deteriorate as his illicit activities were revealed. In 1988, he faced multiple drug-related charges from federal grand juries. Attempts to negotiate his resignation, initiated during President Ronald Reagan's tenure, proved futile. Noriega's decision to annul the results of the 1989 general elections, which seemed to favor opposition candidate Guillermo Endara, prompted Bush to reinforce the U.S. troops in the Canal Zone. Following the shooting of a U.S. Marine at a PDF checkpoint, Bush sanctioned the plan to invade Panama.<br></br> The U.S. military incursion into Panama was initiated on December 20. The Panamanian forces were quickly subdued, but operations continued for several weeks. Endara took the presidential oath soon after the onset of the invasion. Noriega managed to evade capture for several days before taking asylum in the diplomatic mission of the Holy See in Panama City. He capitulated on January 3, 1990, was transported to the U.S., and was subsequently tried, found guilty, and sentenced to a 40-year prison term.<br></br> The Pentagon's estimates show, the invasion resulted in the deaths of 516 Panamanians, comprising 314 soldiers and 202 civilians. In contrast, 23 U.S. soldiers and 3 U.S. civilians lost their lives. The United Nations General Assembly and the Organization of American States both disapproved of the invasion, terming it a breach of international law.", 
            location: {
                center: [-77.0365, 38.8977],
                zoom: 20,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'usfspoly',
                    opacity: 1
                },
            ],
            onChapterExit: [
                {
                    layer: 'usfspoly',
                    opacity: 0
                },
            ]
        },
        {
            id: 'Torrijos Carter Treaties',
            alignment: 'left',
            title: 'Torrijos–Carter Treaties: Washington, D.C., U.S. Wednesday Sep 7, 1977',
            image: 'pictures/Carter.jpg',
            description: "On September 7, 1977, U.S. President Jimmy Carter and the de facto leader of Panama, General Omar Torrijos, signed Torrijos–Carter Treaties, which set in motion the process of handing over the Panama Canal to Panamanian control by 2000. Although the canal was destined for Panamanian administration, the military bases remained and one condition of the transfer was that the canal would remain open for American shipping. The U.S. had long-standing relations with General Noriega, who served as a U.S. intelligence asset and paid informant of the Central Intelligence Agency from 1967, including the period when Bush was head of the CIA (1976–77).",
            location: {
                center: [-77.03789, 38.89793],
                zoom: 17.52,
                pitch: 78.50,
                bearing: -38.40
            },
            onChapterEnter: [
                {layer: 'whitehouse-3fgyw1', opacity: .99},
                ],
            onChapterExit: [
                {layer: 'whitehouse-3fgyw1', opacity: 0},
                ],
        },
        {
            id: 'firstcoupe',
            alignment: 'right',
            title: 'The The First Coup Attempt: Panama. Wednesday Mar 16, 1988',
            image: 'pictures/Panama.png',
            description: "In March 1988, forces loyal to Noriega successfully thwarted an attempted overthrow of the Panamanian government. As the relationship further soured, Noriega seemed to change his Cold War loyalties towards the Soviet bloc, reaching out for and receiving military support from Cuba, Nicaragua, and Libya. This shift triggered the American military strategists to start devising potential plans for an invasion of Panama.",
            location: {
                center: [-77.23131, 8.45784],
                zoom: 6.3,
                pitch: 0,
                bearing: 0,
            },
            onChapterEnter: [
                {layer: 'panama-1q9wmt', opacity: .7},
                ],
            onChapterExit: [
                {layer: 'panama-1q9wmt', opacity: 0},
                ],
        },
        {
            id: 'Operation Nimrod Dancer',
            alignment: 'left',
            title: 'Operation Nimrod Dancer: The White House, Washington DC, US. Thursday May 11, 1989',
            image: 'pictures/Bush.jpg',
            description: "President George H.W. Bush ordered an additional 1,900 combat troops to Panama to increase security of American personnel and property, known as Operation Nimrod Dancer. This was designed to put further pressure on Noriega and help secure U.S. interests, including the Panama Canal and American citizens residing in Panama. Nimrod Dancer involved reinforcing U.S. Southern Command troops already stationed in the Canal Zone, primarily through the addition of combat-ready military units.",
            location: {
                center: [-77.03789, 38.89793],
                zoom: 17.52,
                pitch: 78.50,
                bearing: -38.40
            },
            onChapterEnter: [
                {layer: 'whitehouse-3fgyw1', opacity: .99},
                ],
            onChapterExit: [
                {layer: 'whitehouse-3fgyw1', opacity: 0},
                ],
        },
        {
            id: 'The Second coup attempt',
            alignment: 'right',
            title: 'The Second Coup Attempt: Panama City, Panama. Tuesday Oct 3, 1989',
            image: 'pictures/noriega.jpg',
            description: "In October 1989, Noriega foiled a second coup attempt by members of the Panamanian Defense Forces (PDF), led by Major Moisés Giroldi. American sources contended that the coup's failure was due to the rebels' inadequate planning, lack of clear communication with the U.S., and uncertainty from the American side about the insurgents' objectives and intentions. The Bush administration faced bipartisan criticism in the United States Senate for how it handled and responded to the coup. Democratic senator Sam Nunn, along with other senators, accused officials from the Bush administration of dishonesty and withholding information from the Senate.",
            location: {
                center: [-79.52171, 8.97335],
                zoom: 13.39,
                pitch: 66.50,
                bearing: 0.00
            },
            onChapterEnter: [
                {layer: 'boundaries-3lwule', opacity: .7},
                ],
            onChapterExit: [
                {layer: 'boundaries-3lwule', opacity: 0},
                ],
        },
        {
            id: 'Panama Declares War',
            alignment: 'left',
            title: 'Panama Declares War: Washington, D.C., U.S. Friday Dec 15, 1989',
            image: 'pictures/punch.jpg',
            description: "The scrutiny on Bush intensified. He stated that the U.S. would not engage in negotiations with someone involved in drug trafficking and denied being aware of Noriega's drug-related activities before his indictment in February 1988. However, this claim was under scrutiny as Bush had met Noriega during his tenure as the Director of the CIA and had also served as the Chair of the Task Force on Drugs when he was Vice President. On December 15, the Panamanian legislature adopted a resolution proclaiming that a state of war was in effect between Panama and the United States.",
            location: {
                center: [-82.36377, 8.75409],
                zoom: 6.32,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {layer: 'panama-1q9wmt', opacity: .7},
                ],
            onChapterExit: [
                {layer: 'panama-1q9wmt', opacity: 0},
                ],
        },
        {
            id: 'Stopping Four U.S. Military Personnel',
            alignment: 'right',
            title: 'The Assault of U.S. Military Personnel: El Chorrillo, Panama. Saturday Dec 16, 1989 - 09:00:00 PM',
            image: 'pictures/joint.jpg',
            description: "On the evening after the declaration of war, around 9:00 p.m., a group of four American military officers was intercepted at a barricade near the PDF base in Panama City's El Chorrillo district. The officers included Marine Captain Richard E. Hadded, Navy Lieutenant Michael J. Wilson, Army Captain Barry L. Rainwater, and Marine First Lieutenant Robert Paz. They were heading to dinner at the Marriott Caesar Park Hotel in Panama City's city center from the U.S. Fort Clayton base. The PDF initiated gunfire, and Paz was fatally hit by a bullet that pierced the vehicle's rear and struck his back. Hadded, who was driving the vehicle, also sustained a foot injury. Despite being quickly transported to Gorgas Army Hospital, Paz succumbed to his injuries and was posthumously awarded the Purple Heart.",
            location: {
                center: [-79.52465, 8.98234],
                zoom: 16.5,
                pitch: 68.50,
                bearing: -9.60
            },
            onChapterEnter: [
                {layer: 'boundaries-3lwule', opacity: .5},
                {layer: 'marriott-2e5vjf', opacity: .9},
                ],
            onChapterExit: [
                {layer: 'boundaries-3lwule', opacity: 0},
                {layer: 'marriott-2e5vjf', opacity: 0},
                ],
        },
        {
            id: 'Bush Greenlights Invasion',
            alignment: 'left',
            title: 'Bush Greenlights Invasion: Washington, D.C., U.S. Sunday Dec 17, 1989 - 01 AM',
            image: 'pictures/pentagon.jpg',
            description: "The next day, Bush ordered the execution of the Panama invasion plan; the military set H-Hour as 0100 on December 20.On the morning of December 20, 1989, a few hours after the start of the operation. Bush cited Panama's declaration of a state of war with the United States and attacks on U.S. troops as justification for the invasion.",
            location: {
                center: [-77.05784, 38.87276],
                zoom: 16.22,
                pitch: 63.50,
                bearing: 24.00
            },
            onChapterEnter: [
                {layer: 'pentagon-469vuo', opacity: .99},
                ],
            onChapterExit: [
                {layer: 'pentagon-469vuo', opacity: 0},
                ],
        },
        {
            id: 'The Military Incursion into Panama',
            alignment: 'right',
            title: 'The Military Incursion into Panama: Panama. Tuesday Dec 19, 1989 - 01 AM',
            image: 'pictures/Christmas.jpg',
            hidden: false,
            description: "The U.S. launched its invasion of Panama on December 20, 1989, initiating the operation at 12:46 a.m. local time. This extensive mission involved the deployment of 27,684 American military personnel and more than 300 aircraft. These included C-130 Hercules tactical transports manned by the 317th Tactical Airlift Wing (outfitted with the Adverse Weather Aerial Delivery System or AWADS) and the 314th Tactical Airlift Wing, AC-130 Spectre gunships, OA-37B Dragonfly reconnaissance and attack aircraft, C-141 Starlifter and C-5 Galaxy strategic transporters, F-117A Nighthawk stealth attack aircraft operated by the 37th Tactical Fighter Wing, and AH-64 Apache assault helicopters. The invasion marked the initial combat deployment for the AH-64, the HMMWV, and the F-117A. Two EF-111As electronic warfare aircraft from the 390th ECS, 366th TFW, were employed to jam the Panamanian radar units. These aircraft were set against the 16,000-strong Panama Defense Forces or PDF.",
            location: {
                center: [-69.69256, 30.49117],
                zoom: 3.13,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {layer: 'panama-1q9wmt', opacity: .9}, 
                {layer: 'bases-616kj0', opacity: .9},
                {layer: 'invasionlines-6inaev', opacity: .9},
                ],
            onChapterExit: [
                {layer: 'panama-1q9wmt', opacity: 0},
                {layer: 'bases-616kj0', opacity: 0},
                {layer: 'invasionlines-6inaev', opacity: 0},
                ],
        },
        {
            id: 'Task Force Atlantic',
            alignment: 'left',
            title: 'Task Force Atlantic: Panama. Wednesday Dec 20, 1989',
            image: 'pictures/Units.png',
            hidden: false,
            description: "",
            location: {
                center: [-79.88944, 9.21323],
                zoom: 10.75,
                pitch: 5.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {layer: 'units-5ze0av', opacity: .9},
                {layer: 'attackpoints-7ozk3z', opacity: .9},
                {layer: 'parachutes-4u2c4j', opacity: .9},
                {layer: 'airplanes-41eu5i', opacity: .9},
                {layer: 'invasionlines-6inaev', opacity: .9},
                {layer: 'battlelines-dpp6ne', opacity: .9},
                {layer: 'boundaries-3lwule', opacity: .7},
                ],
            onChapterExit: [
                {layer: 'units-5ze0av', opacity: 0},
                {layer: 'attackpoints-7ozk3z', opacity: 0},
                {layer: 'parachutes-4u2c4j', opacity: 0},
                {layer: 'airplanes-41eu5i', opacity: 0},
                {layer: 'invasionlines-6inaev', opacity: 0},
                {layer: 'battlelines-dpp6ne', opacity: 0},
                {layer: 'boundaries-3lwule', opacity: 0},
                ],
        },
        {
            id: 'Task Force Semper Fidelis',
            alignment: 'left',
            title: 'Task Force Semper Fidelis: Panama. Wednesday Dec 20, 1989',
            image: 'pictures/Units.png',
            hidden: false,
            description: "",
            location: {
                center: [-79.66951, 8.93086],
                zoom: 12,
                pitch: 5.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {layer: 'units-5ze0av', opacity: .9},
                {layer: 'attackpoints-7ozk3z', opacity: .9},
                {layer: 'parachutes-4u2c4j', opacity: .9},
                {layer: 'airplanes-41eu5i', opacity: .9},
                {layer: 'invasionlines-6inaev', opacity: .9},
                {layer: 'battlelines-dpp6ne', opacity: .9},
                {layer: 'boundaries-3lwule', opacity: .7},
                ],
            onChapterExit: [
                {layer: 'units-5ze0av', opacity: 0},
                {layer: 'attackpoints-7ozk3z', opacity: 0},
                {layer: 'parachutes-4u2c4j', opacity: 0},
                {layer: 'airplanes-41eu5i', opacity: 0},
                {layer: 'invasionlines-6inaev', opacity: 0},
                {layer: 'battlelines-dpp6ne', opacity: 0},
                {layer: 'boundaries-3lwule', opacity: 0},
                ],
        },
        {
            id: 'Task Force Bayonet',
            alignment: 'left',
            title: 'Task Force Bayonet: Panama. Wednesday Dec 20, 1989',
            image: 'pictures/Units.png',
            hidden: false,
            description: "",
            location: {
                center: [-79.58831, 8.98467],
                zoom: 12.52,
                pitch: 5.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {layer: 'units-5ze0av', opacity: .9},
                {layer: 'attackpoints-7ozk3z', opacity: .9},
                {layer: 'parachutes-4u2c4j', opacity: .9},
                {layer: 'airplanes-41eu5i', opacity: .9},
                {layer: 'invasionlines-6inaev', opacity: .9},
                {layer: 'battlelines-dpp6ne', opacity: .9},
                {layer: 'boundaries-3lwule', opacity: .7},
                ],
            onChapterExit: [
                {layer: 'units-5ze0av', opacity: 0},
                {layer: 'attackpoints-7ozk3z', opacity: 0},
                {layer: 'parachutes-4u2c4j', opacity: 0},
                {layer: 'airplanes-41eu5i', opacity: 0},
                {layer: 'invasionlines-6inaev', opacity: 0},
                {layer: 'battlelines-dpp6ne', opacity: 0},
                {layer: 'boundaries-3lwule', opacity: 0},
                ],
        },
        {
            id: 'Task Force 82nd Airborne',
            alignment: 'right',
            title: 'Task Force 82nd Airborne: Panama. Wednesday Dec 20, 1989',
            image: 'pictures/Units.png',
            hidden: false,
            description: "",
            location: {
                center: [-79.38631, 9.04324],
                zoom: 11.65,
                pitch: 8.11,
                bearing: 0.00
            },
            onChapterEnter: [
                {layer: 'units-5ze0av', opacity: .9},
                {layer: 'attackpoints-7ozk3z', opacity: .9},
                {layer: 'parachutes-4u2c4j', opacity: .9},
                {layer: 'airplanes-41eu5i', opacity: .9},
                {layer: 'invasionlines-6inaev', opacity: .9},
                {layer: 'battlelines-dpp6ne', opacity: .9},
                {layer: 'boundaries-3lwule', opacity: .7},
                ],
            onChapterExit: [
                {layer: 'units-5ze0av', opacity: 0},
                {layer: 'attackpoints-7ozk3z', opacity: 0},
                {layer: 'parachutes-4u2c4j', opacity: 0},
                {layer: 'airplanes-41eu5i', opacity: 0},
                {layer: 'invasionlines-6inaev', opacity: 0},
                {layer: 'battlelines-dpp6ne', opacity: 0},
                {layer: 'boundaries-3lwule', opacity: 0},
                ],
        },
        {
            id: 'Securing Pacora River Bridge',
            alignment: 'left',
            title: 'Securing Pacora River Bridge: Pacora River Bridge, Panama. Wednesday Dec 20, 1989',
            image: 'pictures/bridge.jpg',
            description: "Elements of 1st and 3rd Bn, 7th Special Forces Group (Airborne) conducted air assault and secured Pacora River Bridge preventing PDF reinforcements from reaching Omar Torrijos Airport and Panama City.",
            location: {
                center: [-79.29689, 9.07851],
                zoom: 13.80,
                pitch: 60.00,
                bearing: -97.60
            },
            onChapterEnter: [
                {layer: 'units-5ze0av', opacity: .9},
                {layer: 'attackpoints-7ozk3z', opacity: .9},
                {layer: 'parachutes-4u2c4j', opacity: .9},
                {layer: 'airplanes-41eu5i', opacity: .9},
                {layer: 'invasionlines-6inaev', opacity: .9},
                {layer: 'battlelines-dpp6ne', opacity: .9},
                {layer: 'boundaries-3lwule', opacity: .7},
                ],
            onChapterExit: [
                {layer: 'units-5ze0av', opacity: 0},
                {layer: 'attackpoints-7ozk3z', opacity: 0},
                {layer: 'parachutes-4u2c4j', opacity: 0},
                {layer: 'airplanes-41eu5i', opacity: 0},
                {layer: 'invasionlines-6inaev', opacity: 0},
                {layer: 'battlelines-dpp6ne', opacity: 0},
                {layer: 'boundaries-3lwule', opacity: 0},
                ],
        },
        {
            id: 'Operation Nifty Package',
            alignment: 'right',
            title: 'Operation Nifty Package Part 1: Panama City, Panama. Wednesday Dec 20, 1989',
            image: 'pictures/NoFace.jpg',
            description: "Operation Nifty Package involved SEAL Team 4. Their mission was to prevent Noriega's potential escape by sea by destroying his private jet and gunboat, located at the Paitilla airport. The operation faced resistance, and four SEALs were killed, but they succeeded in sinking Noriega's boat and damaging his plane. Controversey surrounded the operation as the SEALs were forced to change tactics and use explosives to destroy the plane, which was parked in a hangar, rather than using a sniper rifle to shoot the fuel tank, as originally planned.",
            location: {
                center: [-79.50862, 8.98672],
                zoom: 16.15,
                pitch: 50,
                bearing: -31.20
            },
            onChapterEnter: [
                {layer: 'units-5ze0av', opacity: .9},
                {layer: 'attackpoints-7ozk3z', opacity: .9},
                {layer: 'parachutes-4u2c4j', opacity: .9},
                {layer: 'invasionlines-6inaev', opacity: .9},
                {layer: 'battlelines-dpp6ne', opacity: .9},
                {layer: 'boundaries-3lwule', opacity: .7},
                ],
            onChapterExit: [
                {layer: 'units-5ze0av', opacity: 0},
                {layer: 'attackpoints-7ozk3z', opacity: 0},
                {layer: 'parachutes-4u2c4j', opacity: 0},
                {layer: 'invasionlines-6inaev', opacity: 0},
                {layer: 'battlelines-dpp6ne', opacity: 0},
                {layer: 'boundaries-3lwule', opacity: 0},
                ],
        },
        {
            id: 'Operations in Colon City',
            alignment: 'left',
            title: 'Operations in Colon City: Colón, Panama. Wednesday Dec 20, 1989',
            image: 'pictures/7th.jpg',
            description: "3d Bde, 7th Infantry Division (L) (4/17th Inf) began operations in Colon City, the Canal Zone, and Panama City.",
            location: {
                center: [-79.95766, 9.36249],
                zoom: 11.79,
                pitch: 41.61,
                bearing: 27.20
            },
            onChapterEnter: [
                {layer: 'units-5ze0av', opacity: .9},
                {layer: 'attackpoints-7ozk3z', opacity: .9},
                {layer: 'parachutes-4u2c4j', opacity: .9},
                {layer: 'airplanes-41eu5i', opacity: .9},
                {layer: 'invasionlines-6inaev', opacity: .9},
                {layer: 'battlelines-dpp6ne', opacity: .9},
                {layer: 'boundaries-3lwule', opacity: .7},
                ],
            onChapterExit: [
                {layer: 'units-5ze0av', opacity: 0},
                {layer: 'attackpoints-7ozk3z', opacity: 0},
                {layer: 'parachutes-4u2c4j', opacity: 0},
                {layer: 'airplanes-41eu5i', opacity: 0},
                {layer: 'invasionlines-6inaev', opacity: 0},
                {layer: 'battlelines-dpp6ne', opacity: 0},
                {layer: 'boundaries-3lwule', opacity: 0},
                ],
        },
        {
            id: 'Raid at Renacer Prison',
            alignment: 'right',
            title: 'Raid at Renacer Prison: Gamboa, Panama. Wednesday Dec 20, 1989',
            image: 'pictures/82nd.jpg',
            description: "The El Renacer prison in Gamboa, Panama, was the target of an attack by the 82nd Airborne Division of the U.S. Army on December 20, 1989, amidst the U.S. invasion of Panama. The raid resulted in the liberation of the sixty-four prisoners confined in the prison and the death of 5 soldiers from the Panama Defense Forces.",
            location: {
                center: [-79.69145, 9.11696],
                zoom: 15.01,
                pitch: 48.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {layer: 'units-5ze0av', opacity: .9},
                {layer: 'attackpoints-7ozk3z', opacity: .9},
                {layer: 'parachutes-4u2c4j', opacity: .9},
                {layer: 'airplanes-41eu5i', opacity: .9},
                {layer: 'invasionlines-6inaev', opacity: .9},
                {layer: 'battlelines-dpp6ne', opacity: .9},
                {layer: 'boundaries-3lwule', opacity: .7},
                ],
            onChapterExit: [
                {layer: 'units-5ze0av', opacity: 0},
                {layer: 'attackpoints-7ozk3z', opacity: 0},
                {layer: 'parachutes-4u2c4j', opacity: 0},
                {layer: 'airplanes-41eu5i', opacity: 0},
                {layer: 'invasionlines-6inaev', opacity: 0},
                {layer: 'battlelines-dpp6ne', opacity: 0},
                {layer: 'boundaries-3lwule', opacity: 0},
                ],
        },
        {
            id: 'Marriott hostages',
            alignment: 'left',
            title: 'Marriott hostages: Panama City, Panama. Thursday Dec 21, 1989',
            image: 'pictures/marriott.jpg',
            description: "On Wednesday, the upscale Marriott Hotel was effectively turned into a detention center as armed paramilitary forces conducted several raids, specifically targeting Americans to be held as hostages and threatening to seize more. Members of the U.S. 82nd Airborne Division reached the hotel at 11:22 p.m. EST to rescue the guests confined within. Around 30 to 40 individuals were trapped in the hotel at the time. The division's arrival was supported by overhead cover and light gunfire. The operation was completed by 12:30 a.m. EST on December 21, and all the hostages were freed. The U.S. military reported that one American was killed and another was wounded during the rescue operation. The Panamanian government stated that three PDF soldiers were killed and one was wounded.",
            location: {
                center: [-79.52465, 8.98234],
                zoom: 16,
                pitch: 68.50,
                bearing: -9.60
            },
            onChapterEnter: [
                {layer: 'units-5ze0av', opacity: .9},
                {layer: 'attackpoints-7ozk3z', opacity: .9},
                {layer: 'parachutes-4u2c4j', opacity: .9},
                {layer: 'airplanes-41eu5i', opacity: .9},
                {layer: 'invasionlines-6inaev', opacity: .9},
                {layer: 'battlelines-dpp6ne', opacity: .9},
                {layer: 'boundaries-3lwule', opacity: .7},
                {layer: 'marriott-2e5vjf', opacity: .9},
                ],
            onChapterExit: [
                {layer: 'units-5ze0av', opacity: 0},
                {layer: 'attackpoints-7ozk3z', opacity: 0},
                {layer: 'parachutes-4u2c4j', opacity: 0},
                {layer: 'airplanes-41eu5i', opacity: 0},
                {layer: 'invasionlines-6inaev', opacity: 0},
                {layer: 'battlelines-dpp6ne', opacity: 0},
                {layer: 'boundaries-3lwule', opacity: 0},
                {layer: 'marriott-2e5vjf', opacity: 0},
                ],
        },
        {
            id: 'the General Assembly of the United Nations',
            alignment: 'right',
            title: 'The General Assembly of the United Nations: New York, U.S. Friday Dec 29, 1989',
            image: 'pictures/kids.jpg',
            description: "On December 29, the United Nations General Assembly cast a vote regarding the invasion, with a result of 75–20, and 40 abstentions. The assembly strongly condemned the invasion, declaring it as a clear infringement of international law.",
            location: {
                center: [-73.96582, 40.75252],
                zoom: 16,
                pitch: 73.50,
                bearing: 0.00
            },
            onChapterEnter: [
                {layer: 'un-4evzzk', opacity: .99},
                ],
            onChapterExit: [
                {layer: 'un-4evzzk', opacity: 0},
                ],
        },
        {
            id: 'Noriega Surrendered To The U.S. Military',
            alignment: 'left',
            title: 'Noriega Surrenders - Operation Nifty Package Part 2: Panama City, Panama. Wednesday Jan 3, 1990',
            image: 'pictures/capture.jpg',
            description: "Operation Nifty Package relied on America's two elite special operations units: United States Delta Force and Navy SEAL Team 6. The main objective of this mission was to capture Panama's de facto leader, General Manuel Noriega. <br></br> When Operation Just Cause began on December 20, 1989, one of its primary targets was the Panama Defense Forces (PDF) headquarters in La Comandancia, where Noriega was believed to be hiding. However, Noriega managed to escape during the confusion.<br></br>After escaping La Comandancia, Noriega found refuge in the Apostolic Nunciature of the Holy See (essentially, the Vatican's embassy) on December 24. U.S. troops quickly surrounded the Nunciature to prevent his escape. Psychological warfare tactics were used to coax him out, famously including the use of loud rock-and-roll music. Finally, on January 3, 1990, Noriega surrendered to the U.S. forces, marking the successful completion of Operation Nifty Package. He was then transported to the United States, where he was tried and convicted on multiple criminal charges.",
            location: {
                center: [-79.55726, 8.99683],
                zoom: 16.75,
                pitch: 70.50,
                bearing: 20.00
            },
            onChapterEnter: [
                {layer: 'units-5ze0av', opacity: .9},
                {layer: 'attackpoints-7ozk3z', opacity: .9},
                {layer: 'parachutes-4u2c4j', opacity: .9},
                {layer: 'airplanes-41eu5i', opacity: .9},
                {layer: 'invasionlines-6inaev', opacity: .9},
                {layer: 'battlelines-dpp6ne', opacity: .9},
                {layer: 'boundaries-3lwule', opacity: .5},
                ],
            onChapterExit: [
                {layer: 'units-5ze0av', opacity: 0},
                {layer: 'attackpoints-7ozk3z', opacity: 0},
                {layer: 'parachutes-4u2c4j', opacity: 0},
                {layer: 'airplanes-41eu5i', opacity: 0},
                {layer: 'invasionlines-6inaev', opacity: 0},
                {layer: 'battlelines-dpp6ne', opacity: 0},
                {layer: 'boundaries-3lwule', opacity: 0},
                ],
        },
        {
            id: 'Operation Promote Liberty',
            alignment: 'right',
            title: 'Operation Promote Liberty: The Pentagon. Wednesday Jan 31, 1990',
            image: 'pictures/pentagon.avif',
            description: "The aim of Operation Promote Liberty was to create a secure environment for the restructuring and stabilization of Panama after the overthrow of Manuel Noriega following the aforementioned events of Operation Just Cause. The operation marked an important shift in U.S. military strategy, illustrating the value of using military forces to support reconstruction and stabilization efforts after major combat operations.",
            location: {
                center: [-77.05428, 38.87332],
                zoom: 15.90,
                pitch: 56.50,
                bearing: -41.00
            },
            onChapterEnter: [
                {layer: 'pentagon-469vuo', opacity: .99},
                ],
            onChapterExit: [
                {layer: 'pentagon-469vuo', opacity: .99},
                ],
        },
    ]
};