import React from 'react';

class Projects extends React.Component {
    render () {
        return (
            <div className="container">
                <h1>Projects</h1>
                <ul>
                    <li><a href="/food-find" className="nav-link" target="_blank">Food / Find</a> 
                        <ul>
                            <li>Project using the Yelp API to pull in types of food based on best match, highest rated and most reviewed. Then map location to the restaurant.
                            </li>
                        </ul>
                    </li>
                    <li><a href="/jam-on-it" className="nav-link">Jam On It!</a>
                    <ul>
                        <li>Project using the Spotify API. This lets users search for music matching any term. The user can then add to a custom playlist and save to listen later.
                        </li>
                    </ul>                   
                    </li>
                    <li className="invisible"><a href="/coffee-time" className="nav-link">Coffee Time</a></li>
                </ul>
            </div>
        );
    }
}

export default Projects;