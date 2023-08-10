import React from 'react'
import './RowPost.css'
import Youtube from 'react-youtube'
import { useEffect, useState } from 'react'
import { imageUrl, API_KEY } from '../../Constants/Constants'
import axios from '../../axios'

function RowPost(props) {
    const [movies, setMovies] = useState([])
    const [urlId, setUrlId] = useState('')
    useEffect(() => {
        axios.get(props.url).then(response => {
            setMovies(response.data.results)
            console.log(response.data);
        }).catch(err => {
            // alert('network error')
        })
    }, [props])

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
        },
    };
    const handleMovie = (id) => {
        console.log(id);
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response => {
            console.log(response.data);
            if (response.data.results.length !== 0) {
                setUrlId(response.data.results[0])
            }
            else {
                console.log('Array empty');
            }
        })
    }

    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className="posters">
                {movies.map((obj =>
                    <img className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imageUrl + obj.backdrop_path}`} onClick={() => handleMovie(obj.id)} alt=" poster" />
                ))}
            </div>
            {urlId && < Youtube videoId={urlId.key} opts={opts} />}
        </div>
    )
}

export default RowPost
