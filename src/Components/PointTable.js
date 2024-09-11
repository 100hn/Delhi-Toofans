import React from 'react';
// Team Logo 
import Team_First from '../Assests/Logo/Teams/Delhi.webp';
import Team_Second from '../Assests/Logo/Teams/Chennai.webp';
import Team_Third from '../Assests/Logo/Teams/Mumbai.webp';
import Team_Fourth from '../Assests/Logo/Teams/Delhi.webp';

import teamA from '../Assests/Logo/Teams/Ahmedabad.webp';
import teamB from '../Assests/Logo/Teams/Bengaluru.webp';
import teamC from '../Assests/Logo/Teams/Kolkata.webp';
import teamD from '../Assests/Logo/Teams/Delhi.webp';

const StandingTable = () => {
  const teams = [
    { name: 'Team A', logo: teamA, p: 10, w: 5, l: 3, sd: 2, pts: 15 },
    { name: 'Team B', logo: teamB, p: 12, w: 7, l: 2, sd: 3, pts: 20 },
    { name: 'Team C', logo: teamC, p: 11, w: 6, l: 4, sd: 1, pts: 18 },
    { name: 'Team D', logo: teamD, p: 14, w: 8, l: 4, sd: 2, pts: 22 },
    // Add more teams here...
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-md rounded-lg">
        <thead className="bg-[#ffbd00] text-white">
          <tr>
            <th className="py-2 px-4 border-b border-gray-200 text-left">Team</th>
            <th className="py-2 px-4 border-b border-gray-200 text-left">P</th>
            <th className="py-2 px-4 border-b border-gray-200 text-left">W</th>
            <th className="py-2 px-4 border-b border-gray-200 text-left">L</th>
            <th className="py-2 px-4 border-b border-gray-200 text-left">SD</th>
            <th className="py-2 px-4 border-b border-gray-200 text-left">PTS</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team, index) => (
            <tr key={index} className="even:bg-gray-50">
              <td className="py-2 px-4  text-gray-800 flex items-center">
                <img src={team.logo} className='mr-2 w-16 h-auto' alt={`${team.name} logo`} />
              </td>
              <td className="py-2 px-4 font-semibold">{team.p}</td>
              <td className="py-2 px-4 font-semibold">{team.w}</td>
              <td className="py-2 px-4 font-semibold">{team.l}</td>
              <td className="py-2 px-4 font-semibold">{team.sd}</td>
              <td className="py-2 px-4 font-semibold">{team.pts}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const PointTable = () => {
  return (
    <section className="bg-gray-100 py-6 justify-center items-center mx-auto m-2 mt-10 md:px-[11.25rem]">
      <main className="md:flex justify-center gap-8 grid">
        {/* Left Section: Fixture & Results */}
        <div className="w-full max-w-lg  rounded-lg p-4">
          <h1 className="text-center text-3xl font-bold my-2 mb-6 text-[#3b0067]">Fixture & Results</h1>
          <div className="text-center py-1 mb-4 ">
            <div className="flex justify-evenly items-center gap-4 py-2">
              <img src={Team_First} alt="Team 1" className="w-16 h-auto" />
              <span className="text-[#3b0067] text-2xl font-bold">3 - 2 </span>
              <img src={Team_Second} alt="Team 2" className="w-16 h-auto" />
            </div>
            <h2 className="bg-[#3b0067] text-white p-2 rounded-md">
              Delhi Toofans beat Ahmedabaad Defenders  3 - 2
            </h2>
          </div>
          <div className="text-center py-1">
            <div className="flex justify-evenly items-center gap-4 py-2">
              <img src={Team_Third} alt="Team 1" className="w-16 h-auto" />
              <span className="text-[#3b0067] text-2xl font-bold"> 3 - 2 </span>
              <img src={Team_Fourth} alt="Team 2" className="w-16 h-auto" />
            </div>
            <h2 className="bg-[#3b0067] text-white p-2 rounded-md">
              Delhi Toofans beat Ahmedabaad Defenders 3 - 2
            </h2>
          </div>
        </div>

        {/* Right Section: Standing Table */}
        <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-4">
          <h1 className="text-center text-3xl font-bold my-2 mb-6 text-[#3b0067]">Standing</h1>
          <StandingTable />
        </div>
      </main>
    </section>
  );
};

export default PointTable;
