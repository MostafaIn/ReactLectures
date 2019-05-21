import React from 'react';

const EditForm = ({ index,user, handleChange, handleUpdate }) => {
    return (
        <form onSubmit={e => handleUpdate(e, user.id, index)}>
            <input type="text" name="firstName" placeholder={user.firstName} onChange={handleChange} />
            <input type="text" name="lastName" placeholder={user.lastName} onChange={handleUpdate} />
            <button>confirm</button>
        </form>
    )
}
export default EditForm;