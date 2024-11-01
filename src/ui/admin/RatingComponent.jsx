import React from 'react';
import { Star } from 'lucide-react';

const RatingComponent = ({ maxRating = 5, value = 0, onChange }) => {
    const handleStarClick = (selectedRating) => {
        if (onChange) {
            onChange(selectedRating);
        }
    };

    const starIcons = [];
    for (let i = 1; i <= maxRating; i++) {
        starIcons.push(
            <Star
                key={i}
                size={24}
                onClick={() => handleStarClick(i)}
                color={i <= value ? 'gold' : 'gray'}
                style={{ cursor: 'pointer' }}
            />
        );
    }

    return <div className="flex">{starIcons}</div>;
};

export default RatingComponent;
