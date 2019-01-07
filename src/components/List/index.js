import React from "react";
import ListItem from "../ListItem";
const List = (props) => (
    <div className="row">
        {props.content.map((details, index) => {
              return(
                  <ListItem key={`item${index}`} details={details}/>
              )
            } )}
    </div>
)
export default List