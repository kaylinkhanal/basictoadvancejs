import { useState } from "react";

const ThumbsUp: React.FC = () => {
    const [liked, setLiked] = useState<boolean>(false);

    return (
        <button
            onClick={() => setLiked(!liked)}
            style={{
                fontSize: "30px",
                background: "none",
                border: "none",
                cursor: "pointer",
                color: liked ? "blue" : "gray",
            }}
        >
            👍
        </button>
    );
};

export default ThumbsUp;
