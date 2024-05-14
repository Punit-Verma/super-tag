import React from 'react';

const BaseTile = (props) => {
    const { className, ...otherProps } = props;
    
    return (
        <div className={`dark:bg-stone-800 bg-white w-full flex items-center justify-between p-6 rounded-xl border dark:border-stone-700 ${className}`} {...otherProps}>
            {props.children}
        </div>
    );
}

export default BaseTile;
