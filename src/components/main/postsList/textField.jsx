import React, { useState } from "react"
import PropTypes from "prop-types"
// данный файл является универсальным строителем формы ввода, можно использовать в любом проекте

const TextField = ({
    label,
    type,
    name,
    value,
    onChange,
    error,
    placeHolder
}) => {
    const [showPassword] = useState(false)
    function handleChange({ target }) {
        onChange({ name: target.name, value: target.value })
    }
    function handleClear() {
        onChange({ value: "" })
    }
    function getInputClasses() {
        return "form-control" + (error ? " is-invalid" : "")
    }
    return (
        <div className="mb-4">
            <label htmlFor={name}>{label}</label>
            <div className="input-group has-validation">
                <input
                    type={showPassword ? "text" : type}
                    id={name}
                    value={value}
                    onChange={handleChange}
                    name={name}
                    className={getInputClasses()}
                    placeholder={placeHolder}
                />
                <button
                    className="btn btn-danger"
                    type="button"
                    onClick={handleClear}
                >
                    <i className="bi bi-x-lg"></i>
                </button>
                {error && <div className="invalid-feedback">{error}</div>}
            </div>
        </div>
    )
}
TextField.defaultProps = {
    type: "text",
    placeHolder: ""
}
TextField.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.string,
    placeHolder: PropTypes.string
}

export default TextField
