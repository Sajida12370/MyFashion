
import React from 'react';

const TimelineSteps = ({ step, isCompleted, isCurrent, isLastStep, order, icon, description }) => {
    const iconBgColor = isCompleted || isCurrent ? `bg-${icon.bgColor}` : 'bg-gray-100';
    const iconTextColor = isCompleted || isCurrent ? 'text-white' : `text-${icon.textColor}`;
    
    // Line color should be blue for completed steps, gray for pending ones, etc.
    const connectorColor = isCompleted || isCurrent ? 'bg-blue-500' : 'bg-gray-300'; 
    const labelTextColor = isCompleted || isCurrent ? 'text-gray-900' : 'text-gray-500';
    const descriptionTextColor = isCompleted || isCurrent ? 'text-gray-900' : 'text-gray-500';

    return (
        <li className={`relative mb-6 ${isLastStep ? 'sm:mb-0' : 'sm:pl-10'} transition-transform transform hover:scale-105`}>
            <div className='flex items-center'>
                {/* Icon */}
                <div className={`z-10 flex items-center justify-center w-8 h-8 ${step?.status === 'completed' ? 
                'bg-green-800 text-green-100' 
                    : step?.status === 'pending' ? 'bg-red-700 text-red-100' 
                    : step?.status === 'processing' ? 'bg-blue-700 text-blue-100' 
                    : 'bg-indigo-700 text-indigo-100'} rounded-full ring-0 ring-white shrink-0 shadow-lg transition-shadow hover:shadow-xl`}>
                    <i className={`ri-${icon.iconName} text-xl`}></i>
                </div>
                {/* Connector Line - Always visible if it's completed or current */}
                {!isLastStep && (
                    <div className={`hidden sm:flex w-full h-0.5 ${connectorColor} transition-all duration-300`}>
                    </div>
                )}
            </div>
            <div className='mt-3 sm:pe-8'>
                <h3 className={`font-semibold text-lg ${labelTextColor}`}>
                    {step.label}
                </h3>
                <time className='block mb-2 text-sm font-normal leading-none text-gray-500'>
                    {order.updatedAt ? new Date(order.updatedAt).toLocaleString() : 'Time Not Available'}
                </time>
                <p className={`text-base font-normal ${descriptionTextColor}`}>{description}</p>
            </div>
        </li>
    );
}

export default TimelineSteps;
