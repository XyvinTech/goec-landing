"use client";

import React, { useState } from 'react';
import { Star } from 'lucide-react';

const RatingComponent = ({
    maxRating = 5,
    initialRating = 0,
    onRatingChange,
}) => {
    const [rating, setRating] = useState(initialRating);

    const handleStarClick = (selectedRating) => {
        setRating(selectedRating);
        if (onRatingChange) {
            onRatingChange(selectedRating);
        }
    };

    const starIcons = [];

    // Loop through the maximum rating and generate star icons accordingly
    for (let i = 1; i <= maxRating; i++) {
        starIcons.push(
            <Star
                key={i}
                size={24}
                onClick={() => handleStarClick(i)}
                color={i <= rating ? 'gold' : 'gray'}
                style={{ cursor: 'pointer' }}
            />
        );
    }

    return <div className="flex">{starIcons}</div>;
};

export default RatingComponent;
