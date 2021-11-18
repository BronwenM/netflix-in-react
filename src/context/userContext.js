import { bool, string } from 'prop-types';
import React, {useState} from 'react';

const UserContext = React.createContext({
    loggedIn: bool, //is user logged in? if so move from home page to movies list. change what's shown on navbar
    watchList: [], //users list of saved movies
    logIn: () => {},
    initializeWatchList: () => {}, //set up watch list
    addToWatchList: () => {}, //add movie to watch list
    removeFromWatchList: () => {} //remove movie from watch list
});

export const UserContextProvider = (props) => {

    //set up state for watchlist, and user's login state
    const [watchList, setWatchList] = useState([]);
    const [loggedIn, setLoggedIn] = useState(false);
    const [userName, setUsername] = useState("");
    

    const initializeWatchList = (watchList) => {
        setWatchList(watchList);
    }

    const addToWatchList = (movie) => {
        let newWatchList = watchList;
        newWatchList = watchList.push(movie);
        setWatchList(newWatchList);
    }

    const removeFromWatchList = (movieId) => {
        let oldList = watchList;
        const found = watchList.findIndex((movie) => {
            return (movie.id === movieId);
        })
        if(found !== -1){
            oldList.splice(found, 1); //remove 1 movie at index of found movie
        }
        else {
            console.log("failed to delete movie.");
        }
    }

    const logIn = (user) => {
        setLoggedIn(true);
    }

    return (
        <UserContext.Provider value={{loggedIn: loggedIn, watchList: watchList, logIn: logIn, initializeWatchList: initializeWatchList, addToWatchList: addToWatchList, removeFromWatchList: removeFromWatchList}}>
            {props.children}
        </UserContext.Provider>
    );
}

export default UserContext;