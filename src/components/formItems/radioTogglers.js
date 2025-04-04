import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function RadioTogglers({ options, defaultValue,onChange }) {
    return (
        <div className="radio-togglers">
            {options.map((option,index) => (
                <label key = {index}>
                    <input
                        type="radio"
                        name="bgType"
                        onClick = {ev=>onChange(ev.target.value)}
                        defaultChecked={option.value === defaultValue}
                        value={option.value} />
                    <div>
                        <FontAwesomeIcon icon={option.icon} />
                        <span>{option.label}</span>
                    </div>
                </label>
            ))}


        </div>
    )
}