export default function StepsCard({ step, index }) {
    return (<div className="text-center">
        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-blue-500 font-bold text-xl">{index + 1}</span>
        </div>
        <h3 className="font-medium text-lg text-gray-700 mb-2">{step.title}</h3>
        <p className="text-gray-600 text-sm">
            {step.description}
        </p>
    </div>
    )
}