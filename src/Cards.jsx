import React from 'react';
import Images from './Images'
import Heading from './Heading';
import Title from './Title';


function Cards(props) {
    return(
        <div className="cards">
            <div className="card">
                <Images imgsrc={props.imgsrc}  />
                <div className="card__info">
                    <Title title={props.title}/>
                    <Heading sname={props.sname}/>
                    <a href="" target="_blank">
                        <button> Watch Now </button>
                    </a>
                </div>
          </div>
      </div>
    );
}

export default Cards;