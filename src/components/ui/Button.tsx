import React from 'react';

interface ButtonProps {
    label: string;
    onClick: () => void;
    disabled?: boolean;
    className?: string;
    children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled = false, className = '' , children}) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400 ${className}`}
        >
            {label}
            {children && <span className="ml-2">{children}</span>}
        </button>
    );
};

export default Button;