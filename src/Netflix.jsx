import React from 'react';
import Sdata  from './Sdata';
import Cards from './Cards';

function Netflix() {
    return (
        <Cards 
        key = {Sdata[2].id}
        imgsrc = {Sdata[2].imgscr} 
        title = {Sdata[2].title}
        sname = {Sdata[2].sname}
        />
    );
}

export default Netflix;