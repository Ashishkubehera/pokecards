import react from 'react';
import './card-list.styles.css' ;


export const cardlist= props => 
{
    return <div className="card-list">{props.children}</div>;
};