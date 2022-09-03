import { useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';

const PlayerTable = () => {

    const players = [
        {firstName : "Jaylen",
lastName : "Brown",
jerseyNumber : 7,
position : "Shooting Guard",
contract :[
    {salary:"$30m"},
    {length:"4 Years"},
    {contractType:"Rookie extension"},
    {option:"no"}
] 

},
{firstName : "Danilo",
lastName : "Gallinari",
jerseyNumber : 8,
position : "Small Forward",
contract :[
    {salary:"$30m"},
    {length:"4 Years"},
    {contractType:"Rookie extension"},
    {option:"no"}
] 

},
{firstName : "Malcolm",
lastName : "Brogdon",
position : "Shooting Guard",
jerseyNumber : 68,
contract :[
    {salary:"$30m"},
    {length:"4 Years"},
    {contractType:"Rookie extension"},
    {option:"no"}
] 

},
{firstName : "Marcus",
lastName : "Smart",
position : "Point Guard",
jerseyNumber : 36,
contract :[
    {salary:"$30m"},
    {length:"4 Years"},
    {contractType:"Rookie extension"},
    {option:"no"}
] 

},
{firstName : "Payton",
lastName : "Pritchard",
position : "Point Guard",
jerseyNumber : 11,
contract :[
    {salary:"$30m"},
    {length:"4 Years"},
    {contractType:"Rookie extension"},
    {option:"no"}
] 

},
{firstName : "Derrick",
lastName : "White",
position : "Point Guard",
jerseyNumber : 9,
contract :[
    {salary:"$30m"},
    {length:"4 Years"},
    {contractType:"Rookie extension"},
    {option:"no"}
] 

},
{firstName : "Al",
lastName : "Horford",
position : "Power Forward ",
jerseyNumber : 42,
contract :[
    {salary:"$30m"},
    {length:"4 Years"},
    {contractType:"Rookie extension"},
    {option:"no"}
] 

},
{firstName : "Grant",
lastName : "Williams",
position : "Power Forward ",
jerseyNumber : 12,
contract :[
    {salary:"$30m"},
    {length:"4 Years"},
    {contractType:"Rookie extension"},
    {option:"no"}
] 

},
{firstName : "Rob",
lastName : "Williams III",
position : "Center",
jerseyNumber : 44,
contract :[
    {salary:"$30m"},
    {length:"4 Years"},
    {contractType:"Rookie extension"},
    {option:"no"}
] 

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
        <div>
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
                <span >{player.contract} - </span>
                
              </li>
            ))
          ) : (
            <h1>No player found!</h1>
          )}
        </div>
      </div>
    
  );
    

}

export default PlayerTable;