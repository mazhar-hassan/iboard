import React from 'react';


export default (projects, {keyword, sortBy }) => {
    return projects.filter(( project ) => {
        const txtMatch = project.title.toLowerCase().includes(keyword.toLowerCase());
        //other filters here
        //const anOther = false;
        return txtMatch /* && anOther*/;
    }).sort((a,b)=> {
        if (sortBy == 'date') {
            return  a.createdAt < b.createdAt ? 1 : -1;
         } else {
            return a.title.localeCompare(b.title);
        }
    });
};