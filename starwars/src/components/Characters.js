import React from 'react';

class Characters extends React.Component {
    render() {
        return this.props.starwarsChars.map((chars) => (
            <h2 className="char-style">{ chars.name }</h2>

        ));
    }
}

export default Characters;