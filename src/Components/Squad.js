import React, { useState } from 'react';
import image1 from '../Assests/Banner/Delhi-Toofan.jpg';
import image2 from '../Assests/Banner/Delhi-Toofan.jpg';
import image3 from '../Assests/Banner/Delhi-Toofan.jpg';

const Squad = () => {
  const players = [
    {
      name: 'Saqlain Tariq',
      role: 'Player',
      image: image1,
      details: {
        name: 'Saqlain Tariq',
        position: 'Middle Blocker',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus quos expedita sequi quae vitae maxime ab labore delectus obcaecati veritatis.',
        stats: {
          points: 106,
          blocks: 89,
          spikes: 72,
          digs: 56,
        },
      },
    },
    {
      name: 'Another Player',
      role: 'Player',
      image: image2,
      details: {
        name: 'Another Player',
        position: 'Outside Hitter',
        description: 'Another player description goes here. Adipisicing elit. Minus quos expedita sequi quae vitae maxime.',
        stats: {
          points: 120,
          blocks: 95,
          spikes: 80,
          digs: 60,
        },
      },
    },
    {
      name: 'Third Player',
      role: 'Player',
      image: image3,
      details: {
        name: 'Third Player',
        position: 'Libero',
        description: 'Third player description goes here. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        stats: {
          points: 90,
          blocks: 70,
          spikes: 85,
          digs: 50,
        },
      },
    },
    // Add more players as needed
  ];

  const [selectedPlayer, setSelectedPlayer] = useState(players[0]);

  const handlePlayerClick = (player) => {
    setSelectedPlayer(player);
  };

  return (
    <section className='bg-[#3b0067] md:pt-6 justify-center items-center mx-auto m-2 md:my-10 md:px-[11.25rem]'>
      <h1 className='text-3xl text-white text-center font-bold mb-6'>Squad</h1>
      <div className='flex flex-col lg:flex-row gap-5'>
        <div className='flex flex-col w-full lg:w-1/4 gap-4'>
          {players.map((player, index) => (
            <div 
              key={index} 
              className='flex items-center p-2 rounded-md cursor-pointer'
              onClick={() => handlePlayerClick(player)}
            >
              <img src={player.image} alt={player.name} className='w-20 h-22 object-cover' />
              <div className='ml-4 text-white'>
                <h4 className='text-lg font-bold'>{player.name}</h4>
                <span className='text-sm'>{player.role}</span>
              </div>
            </div>
          ))}
        </div>

        <div className='w-full lg:w-2/4'>
          <img src={selectedPlayer.image} alt="News" className='w-full h-auto rounded-md' />
        </div>

        <div className='w-full lg:w-1/4 pl-4 pt-8'>
          <h2 className='text-2xl font-bold mb-2 text-[#ffbd00]'>{selectedPlayer.details.name}</h2>
          <h5 className='text-lg text-white mb-4'>{selectedPlayer.details.position}</h5>
          <p className='text-sm text-white mb-4'>{selectedPlayer.details.description}</p>
          <div className='grid grid-cols-4 gap-2 text-white'>
            <div className='text-left'>
              <span className='text-xl font-bold block'>{selectedPlayer.details.stats.points}</span>
              <span className='text-sm'>Total Points</span>
            </div>
            <div className='text-left'>
              <span className='text-xl font-bold block'>{selectedPlayer.details.stats.blocks}</span>
              <span className='text-sm '>Blocks</span>
            </div>
            <div className='text-left'>
              <span className='text-xl font-bold block'>{selectedPlayer.details.stats.spikes}</span>
              <span className='text-sm '>Spikes</span>
            </div>
            <div className='text-left'>
              <span className='text-xl font-bold block'>{selectedPlayer.details.stats.digs}</span>
              <span className='text-sm '>Digs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Squad;
