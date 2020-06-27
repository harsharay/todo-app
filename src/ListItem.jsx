import React from 'react';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';




const ListItem = ({ id,name,handleDelete }) => {
    return (
        <div className="list-item">
            <li>{name} <span className="close" onClick={(() =>handleDelete(id))}><DeleteOutlinedIcon color="secondary"/></span></li>
        </div>
    )
}

export default ListItem;