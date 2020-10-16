import React from 'react';

export class Contact extends React.Component {
    render() {
        return (
            <div className="container">
                <h1>Contact</h1>
                <p>Hi. My name is Rudy Jauregui.</p>
                <p>I&rsquo;m based in Chicago, Illinois.</p>

                <h5>Contact me:</h5> 
                <p><a href="https://www.linkedin.com/in/rudyjauregui/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
                
                <p><a href="https://www.twitter.com/rjaureguijr">Twitter</a></p>

                <p><a href="mailto:rjaureguijr@gmail.com">Email</a></p>
               </div>
        );
    }
}

// export default About;