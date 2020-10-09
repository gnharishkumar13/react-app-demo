import React from "react";
import 'tachyons'

const Card = ({id, email, name }) => {
    return (
        <div className='tc bg-light-green dib br3 pa2 ma2 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${id}?200x200`} alt='robots' />
            <div>
                <p>{name}</p>
                <p>{email}</p>

            </div>
        </div>
    );
}

export default Card;