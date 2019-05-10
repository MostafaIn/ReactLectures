import React from 'react'

const TextareaField = ({ name, cols, rows, value, onChange,error }) => {
    return (
        <div>
        <h3>your message is in here</h3>
            <textarea
                name={name}
                cols={cols}
                rows={rows}
                value={value}
                onChange={onChange}
            />
        {error && <small>{error}</small>}
        </div>
    )
}
TextareaField.defaultProps = {
    cols: 50,
    rows: 10
}
export default TextareaField
