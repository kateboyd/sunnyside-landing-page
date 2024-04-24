import BigButton from "../BigButton"
import TipCalculator from "../TipCalculator"

const TipCalculatorSection = ({}) => {
    return (
        <div className="bg-teal-800 py-10 rounded">
            <TipCalculator text="Tip Amount" />
            <TipCalculator text= "Total"/>
            <BigButton text="RESET" />
        </div>
    )

}

export default TipCalculatorSection