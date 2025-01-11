import React from "react"

interface propsType {
    icon: React.ReactNode;
    title: string;
    desc: string;
}

export default function FeatureCard({icon, title, desc}: propsType) {
    return(
        <div className="flex gap-2 bg-gray-100 px-4 py-6">
            {icon}
            <div className="font-medium text-xl">{title}</div>
            <p className="text-gray-600">{desc}</p>
        </div>
    )
}