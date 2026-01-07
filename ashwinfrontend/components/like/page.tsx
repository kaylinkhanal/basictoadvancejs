'use client';

import { useState } from 'react';
import * as LucideIcons from 'lucide-react'; // import all icons

export default function LikeButton() {
    const [liked, setLiked] = useState(false);

    const toggleLike = () => setLiked(prev => !prev);

    const HeartIcon = LucideIcons.Heart as unknown as (props: any) => JSX.Element;

    return (
        <button
            onClick={toggleLike}
            className={`p-2 rounded-full transition-colors duration-300 ${liked ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-400 hover:text-gray-600 hover:bg-gray-200'
                }`}
            aria-label={liked ? 'Unlike' : 'Like'}
        >
            <HeartIcon
                size={24}
                fill={liked ? 'currentColor' : 'none'}
                strokeWidth={2}
            />
        </button>
    );
}
