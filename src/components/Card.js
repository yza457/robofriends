import React from 'react';

const Card = ({name, email, id}) => { // {name, email, id} is destructured
    return (
        // this is not HTML, this is JSX
        // only return one thing, otherwise compile error
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}?200*200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;