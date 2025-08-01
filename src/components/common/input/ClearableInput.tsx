import React from 'react';

interface ClearableInputProps {
    value: string;
    onValueChange: (value: string) => void;
    placeholder?: string;
}

const ClearableInput: React.FC<ClearableInputProps> = ({
    value,
    onValueChange,
    placeholder,
}) => {
    return (
        <div className="relative w-full">
            <input
                type="text"
                value={value}
                onChange={(e) => onValueChange(e.target.value)}
                placeholder={placeholder}
                className="text-subtitle text-text-sub focus:bg-input-focus w-full rounded border border-[#895A3F] bg-white px-4 py-2 pr-10 transition focus:outline-none"
            />
            {value && (
                <button
                    type="button"
                    onClick={() => onValueChange('')}
                    className="absolute top-1/2 right-2 -translate-y-1/2"
                    aria-label="입력 지우기"
                >
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon text-input-sub hover:text-gray-600"
                    >
                        <path d="M14.2548 4.75488C14.5282 4.48152 14.9717 4.48152 15.2451 4.75488C15.5184 5.02825 15.5184 5.47175 15.2451 5.74512L10.9902 10L15.2451 14.2549L15.3349 14.3652C15.514 14.6369 15.4841 15.006 15.2451 15.2451C15.006 15.4842 14.6368 15.5141 14.3652 15.335L14.2548 15.2451L9.99995 10.9902L5.74506 15.2451C5.4717 15.5185 5.0282 15.5185 4.75483 15.2451C4.48146 14.9718 4.48146 14.5282 4.75483 14.2549L9.00971 10L4.75483 5.74512L4.66499 5.63477C4.48589 5.3631 4.51575 4.99396 4.75483 4.75488C4.99391 4.51581 5.36305 4.48594 5.63471 4.66504L5.74506 4.75488L9.99995 9.00977L14.2548 4.75488Z" />
                    </svg>
                </button>
            )}
        </div>
    );
};

export default ClearableInput;
