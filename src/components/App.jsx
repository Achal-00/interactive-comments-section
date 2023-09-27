import React, { createContext, useState } from "react";
import InputSection from "./InputSection/InputSection";
import data from "./data.json";
import CommentSection from "./CommentSection/CommentSection";
import DeleteSection from "./DeleteSection/DeleteSection";

export const CommentContext = createContext();

export default function App() {
  const [commentData, setCommentData] = useState(data);

  return (
    <CommentContext.Provider value={{ commentData, setCommentData }}>
      <div className="font-custom-font-family min-h-[100dvh] p-[5%] bg-light-grey flex flex-col gap-4 relative">
        <CommentSection />
        <InputSection wh="landscape:lg:w-1/2" id="1" />
        <div className="absolute top-0 left-0 bg-black opacity-50 w-full h-full z-10 hidden overlay-blur"></div>
        <DeleteSection />
      </div>
    </CommentContext.Provider>
  );
}
