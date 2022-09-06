import { useState } from 'react';
import React from 'react';


const PlayerTable = () => {

    const players = [
        {firstName : "Jaylen",
lastName : "Brown",
jerseyNumber : 7,
position : "Shooting Guard",

    


},
{firstName : "Danilo",
lastName : "Gallinari",
jerseyNumber : 8,
position : "Small Forward",


},
{firstName : "Malcolm",
lastName : "Brogdon",
position : "Shooting Guard",
jerseyNumber : 68,
 

},
{firstName : "Marcus",
lastName : "Smart",
position : "Point Guard",
jerseyNumber : 36,


},
{firstName : "Payton",
lastName : "Pritchard",
position : "Point Guard",
jerseyNumber : 11,
 

},
{firstName : "Derrick",
lastName : "White",
position : "Point Guard",
jerseyNumber : 9,


},
{firstName : "Al",
lastName : "Horford",
position : "Power Forward ",
jerseyNumber : 42,


},
{firstName : "Grant",
lastName : "Williams",
position : "Power Forward ",
jerseyNumber : 12,
 

},
{firstName : "Rob",
lastName : "Williams III",
position : "Center",
jerseyNumber : 44,


}
    ]

    const [lastName,setLastName] = useState('');

    const [foundPlayer,setFoundPlayer] = useState(players);
    
    const filter = (e) =>{
        const searchedWord = e.target.value;

        if (searchedWord !== '') {
            const results = players.filter((player) => {
              return player.lastName.toLowerCase().startsWith(searchedWord.toLowerCase());
            });

            setFoundPlayer(results);}
            else{
                setFoundPlayer(players)
            };

            setLastName(searchedWord);
    };
    return(
        
    <>
    
        <input
          type="search"
          value={lastName}
          onChange={filter}
          className="input"
          placeholder="Filter by Last Name"
        />

        <div >
          {foundPlayer && foundPlayer.length > 0 ? (
            foundPlayer.map((player) => (
              <li key={player.jerseyNumber}>
                <span >{player.jerseyNumber} - </span>
                <span >{player.firstName} - </span>
                <span >{player.lastName} - </span>
                <span >{player.position} - </span>
                
                
              </li>
            ))
          ) : (
            <h1>No player found!</h1>
          )}
        </div>
      </>
  );
    

}

export default PlayerTable;