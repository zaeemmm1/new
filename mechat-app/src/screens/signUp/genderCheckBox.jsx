/* eslint-disable react/prop-types */

const GenderCheckBox = ({genderSelect,onCheckBoxChange}) => {
    return (
        <div className="flex w-full max-w-xs ">

            <div className="form-control">
                <label className="label cursor-pointer gap-2">
                    <span className="label-text">Male</span>
                    <input type="checkbox"
                        className="checkbox checkbox-primary"
                        checked={genderSelect === "male"}
                        onChange={()=>{ onCheckBoxChange("male") }}
                        />
                </label>
            </div>
            <div className="form-control">
                <label className="label cursor-pointer gap-2">
                    <span className="label-text">Female</span>
                    <input type="checkbox"
                        className="checkbox checkbox-secondary"
                        checked={genderSelect === "female"}
                        onChange={()=>{ onCheckBoxChange("female") }}
                        
                    />
                </label>
            </div>

        </div>
    )
}

export default GenderCheckBox