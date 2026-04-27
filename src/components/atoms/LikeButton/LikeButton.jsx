import React from "react";
import emptyHeart from "../../../assets/Icons/empty_heart.png";
import fullHeart from "../../../assets/Icons/full_heart.png";
import style from "./LikeButton.module.css";

function LikeButton({ isLiked, onToggle, disabled }) {
    return (
        <button
        className={style.likeButton}
        onClick={onToggle}
        disabled={disabled}
        >
            <img
            src={isLiked ? fullHeart : emptyHeart}
            alt={isLiked ? "liked" : "not liked"}
        />
        

        </button>
    );
}

export default LikeButton;