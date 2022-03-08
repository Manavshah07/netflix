import React from 'react';
import Sdata from './Sdata';
import Cards from './Cards';

function Amazon() {
    return (
        <Cards 
        key = {Sdata[3].id}
        imgsrc = {Sdata[3].imgscr} 
        title = {Sdata[3].title}
        sname = {Sdata[3].sname}
        />
    )
};

export default Amazon;