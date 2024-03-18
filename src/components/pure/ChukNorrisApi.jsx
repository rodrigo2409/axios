import React, {useState} from 'react'
import { getRandomJoke } from '../../services/axios-service'

export default function ChukNorrisApi() {

    const [joke, setJoke] = useState(null);


    const obtainNewJoke = () =>{
        getRandomJoke()
        .then((result) =>{
            setJoke(result.data.value)
        })
    }

  return (
    <div>
        <div>ChukNorrisApi</div>
        <div>
            <h3>
                {joke}
            </h3>
        </div>
        <button onClick={() => {obtainNewJoke()}} > New Joke </button>
    </div>
    
  )
}
