import React, { useEffect } from 'react';
import './Header.css';
import GenresBTN from './GenresBTN/GenresBTN';
import { fetchGenres } from '../../store/slices/genresSlice';
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {
    const dispatch = useDispatch();
    const { genres } = useSelector((state) => state.genresData)
    useEffect(() => {
        dispatch(fetchGenres())
    }, [])

    return (
        <header>
            <div>
                <h5>MyFilms</h5>
            </div>
            <nav>
                {
                    genres.map((genre) => {
                        return <GenresBTN
                            genre={genre}
                            key={genre.id}
                        />
                    })
                }
            </nav>
            <div>
                <input />
            </div>
        </header>
    )
}

export default Header