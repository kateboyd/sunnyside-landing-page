const TipCalculator = ({text}) => {
    return (
            <div className="flex">
                <div className="w-1/2"> 
                    <h4 className="text-white">{text}</h4>
                    <h5 className="text-teal-200">/ person</h5>
                </div>
                <div className="w-1/2"> 
                    <h2 className="text-teal-100">$0.00</h2>
                </div>
            </div>
    )

}

export default TipCalculator