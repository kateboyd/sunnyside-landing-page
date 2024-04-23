const TipCalculator = ({text}) => {
    return (
            <div class="flex">
                <div class="w-1/2"> 
                    <h4 class="text-white">{text}</h4>
                    <h5 class="text-teal-200">/ person</h5>
                </div>
                <div class="w-1/2"> 
                    <h2 class="text-teal-100">$0.00</h2>
                </div>
            </div>
    )

}

export default TipCalculator