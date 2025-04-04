import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
export default function AboutCard({ info }) {
    return (
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
            <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
                    <FontAwesomeIcon icon={info.icon} className="w-5 h-5 text-blue-500" />

                </div>
                <h3 className="font-medium text-xl text-gray-700">{info.title}</h3>
            </div>
            <p className="text-gray-600">
                {info.description}
            </p>
        </div>
    )
}