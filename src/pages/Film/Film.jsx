import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOneFilm } from '../../store/slices/filmsSlice';
import './Film.css';

const options = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization: "f36f23edf6e10fd2ddcf939916b1f67a",
    },
};
const Film = () => {
    const iframe = useRef()
    const dispatch = useDispatch();
    const { film } = useSelector((state) => state.filmsData)
    const { id } = useParams();

    useEffect(() => {
        dispatch(fetchOneFilm(id))

    }, [])

    useEffect(() => { 
        fetch(
            `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
            options
        )
        .then((response) => response.json())
        .then((response) => {
            console.log(response);
            response.results.forEach((elm) => {
                if (elm.name === "Official Trailer") {
                    iframe.current.setAttribute(
                        "src",
                        `https://www.youtube.com/embed/${elm.key}`
                    );
                } else {
                    iframe.current.setAttribute(
                        "src",
                        `https://www.youtube.com/embed/${elm.key}`
                    );
                }
            });
        })
        .catch((err) => console.error(err));
    }, [])

    console.log(iframe);
    return (
        <div>{film?.title}
           <iframe ref={iframe}/>
        </div>
    )
}

export default Film;


