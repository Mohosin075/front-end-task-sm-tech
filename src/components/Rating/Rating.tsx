// components/Rating.tsx
import { useState } from "react";

interface RatingProps {
  value: number;
  onChange: (newValue: number) => void;
}

const Rating = ({ value, onChange }: RatingProps) => {
  const [hoverValue, setHoverValue] = useState(0);



  return (
    <div className="flex items-center space-x-1">
      {Array.from({ length: 5 }).map((_, index) => {
        const starValue = index + 1;
        return (
          <svg
            key={starValue}
            xmlns="http://www.w3.org/2000/svg"
            fill={starValue <= (hoverValue || value) ? "#FF6A1A" : "gray"}
            height="20"
            width="20"
            viewBox="0 0 24 24"
            className="cursor-pointer"
          >
            <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-6.91-.56L12 2 9.91 8.68 3 9.24l5.46 4.73L5.82 21z" />
          </svg>
        );
      })}
    </div>
  );
};

export default Rating;
