import React from 'react'

function Alert(props) {
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
       props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show my-2`} role="alert">
       <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg} 
        {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" /> */}
      </div>
  )
}

export default Alert