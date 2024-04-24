const FormElement = ({formLabel, formInput}) => {
    return (
        <>
            <form>
            <label > {formLabel}
            <input onChange={formInput} className="bg-teal-100 border-solid border-2 border-teal-800 rounded" type="text" />
            </label>
        </form>
        </>
        )
}

export default FormElement