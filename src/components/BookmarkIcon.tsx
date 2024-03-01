import { useContext } from "react";
import { BookmarkFilledIcon } from "@radix-ui/react-icons";

import { BookmarksContext } from "../contexts/BookmarksContextProvider";

interface BookmarkIconProps {
  id: number;
}

export default function BookmarkIcon({ id }: BookmarkIconProps) {
  const { bookmarkIds, handleToggleBookmark } = useContext(BookmarksContext);

  return (
    <button onClick={() => handleToggleBookmark(id)} className="bookmark-btn">
      <BookmarkFilledIcon
        className={`${bookmarkIds.includes(id) ? "filled" : ""}`}
      />
    </button>
  );
}
