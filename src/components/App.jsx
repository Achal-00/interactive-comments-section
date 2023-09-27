import React, { createContext, useState } from "react";
import InputSection from "./InputSection/InputSection";
import data from "./data.json";
import CommentSection from "./CommentSection/CommentSection";

export const CommentContext = createContext();

export default function App() {
  const [commentData, setCommentData] = useState(data);

  return (
    <CommentContext.Provider value={{ commentData, setCommentData }}>
      <div className="font-custom-font-family min-h-[100dvh] p-[5%] bg-light-grey flex flex-col gap-4">
        <CommentSection />
        <InputSection />
      </div>
    </CommentContext.Provider>
  );
}
