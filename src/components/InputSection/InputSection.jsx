import { useContext, useEffect, useState } from "react";
import { CommentContext } from "../App";

export default function InputSection(props) {
  const { commentData, setCommentData } = useContext(CommentContext);
  const [comment, setComment] = useState("");

  useEffect(() => {
    console.log(commentData);
  }, [commentData]);

  async function submitHandler() {
    if (props.id === "1") {
      console.log("ok");
      const temp = commentData;
      let size = temp.length;
      temp[size] = {
        id: size + 1,
        content: comment,
        createdAt: "Just Now",
        score: 0,
        username: "juliusomo",
        image: "avatars/image-juliusomo.webp",
        replies: [],
      };
      setCommentData([...temp]);
    } else if (props.id === "2") {
      let temp = commentData;
      let size = temp[temp.indexOf(props.element)].replies.length;
      temp[temp.indexOf(props.element)].replies[size] = {
        id: size + 1,
        content: comment,
        createdAt: "Just Now",
        score: 0,
        username: "juliusomo",
        image: "avatars/image-juliusomo.webp",
      };
      setCommentData([...temp]);
      let anotherTemp = commentData;
      anotherTemp[anotherTemp.indexOf(props.element)].test =
        !anotherTemp[anotherTemp.indexOf(props.element)].test;
      setCommentData([...anotherTemp]);
    }
  }

  return (
    <section
      className={`bg-white w-full p-4 rounded-lg landscape:lg:mx-auto ${props.wh}`}
    >
      <div className="grid gap-4 landscape:lg:hidden">
        <textarea
          name=""
          id=""
          rows="3"
          placeholder="Add a comment..."
          className="border-2 rounded-md p-3"
          onChange={(e) => setComment(e.currentTarget.value)}
        ></textarea>
        <div className="flex items-center justify-between">
          <img src="avatars/image-juliusomo.webp" alt="" className="w-8" />
          <button
            className="bg-moderate-blue text-white rounded-md py-2 px-4 font-medium"
            onClick={submitHandler}
          >
            SEND
          </button>
        </div>
      </div>
      <div className="hidden landscape:lg:grid grid-cols-[0.1fr_1fr_0.1fr] gap-4">
        <img src="avatars/image-juliusomo.webp" alt="" className="self-start" />
        <textarea
          name=""
          id=""
          rows="2"
          placeholder="Add a comment..."
          className="border-2 rounded-md p-3"
          onChange={(e) => setComment(e.currentTarget.value)}
        ></textarea>
        <button
          className="bg-moderate-blue text-white rounded-md py-2 px-4 font-medium self-start"
          onClick={submitHandler}
        >
          SEND
        </button>
      </div>
    </section>
  );
}
