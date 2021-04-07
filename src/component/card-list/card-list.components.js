import './card-list.styles.css' ;
export const Cardlist= props => 
{
    console.log(props);
    return <div className="Cardlist">{props.children}</div>;
};