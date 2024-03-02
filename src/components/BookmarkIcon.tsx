import { useContext } from "react";
import { BookmarkFilledIcon } from "@radix-ui/react-icons";

import { BookmarksContext } from "../contexts/BookmarksContextProvider";

interface BookmarkIconProps {
  id: number;
}

export default function BookmarkIcon({ id }: BookmarkIconProps) {
  const { bookmarkedIds, handleToggleBookmark } = useContext(BookmarksContext);

  return (
    <button
      onClick={(e) => {
        handleToggleBookmark(id);
        e.stopPropagation();
        e.preventDefault();
      }}
      className="bookmark-btn"
    >
      <BookmarkFilledIcon
        className={`${bookmarkedIds.includes(id) ? "filled" : ""}`}
      />
    </button>
  );
}
