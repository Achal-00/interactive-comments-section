import { useContext } from "react";
import { CommentContext } from "../App";

export default function DeleteSection() {
  const { commentData, setCommentData } = useContext(CommentContext);

  function cancelHandler() {
    document.querySelectorAll(".overlay-blur, .overlay-delete").forEach((x) => {
      x.classList.add("hidden");
    });
    let temp = commentData;
    commentData.map((element) => {
      if (element.deleteFlag) {
        temp[temp.indexOf(element)].deleteFlag = false;
        setCommentData([...temp]);
      }
    });
    commentData.map((element) => {
      element.replies.map((item) => {
        if (item.deleteFlag) {
          temp[temp.indexOf(element)].replies[
            temp[temp.indexOf(element)].replies.indexOf(item)
          ].deleteFlag = false;
          setCommentData([...temp]);
        }
      });
    });
  }

  function deleteHandler() {
    commentData.forEach((element) => {
      if (element.deleteFlag) {
        const temp = commentData;
        temp.splice(commentData.indexOf(element), 1);
        setCommentData([...temp]);
      }
    });
    commentData.map((element) => {
      element.replies.map((item) => {
        if (item.deleteFlag) {
          const temp = commentData;
          temp[temp.indexOf(element)].replies.splice(
            temp[temp.indexOf(element)].replies.indexOf(item),
            1
          );
          setCommentData([...temp]);
        }
      });
    });
    document.querySelectorAll(".overlay-blur, .overlay-delete").forEach((x) => {
      x.classList.add("hidden");
    });
  }

  return (
    <section className="absolute z-20 w-full h-[100dvh] top-0 left-0 place-content-center grid hidden overlay-delete">
      <div className="bg-white w-96 mx-auto p-4 rounded-lg grid gap-4">
        <h1 className="text-dark-blue font-bold text-xl">Delete comment</h1>
        <p className="text-greyish-blue">
          Are you sure you want to delete this comment? This will remove the
          comment and can't be undone.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <button
            className="bg-greyish-blue text-white py-3 rounded-md font-medium"
            onClick={cancelHandler}
          >
            NO, CANCEL
          </button>
          <button
            className="bg-soft-red text-white py-3 rounded-md font-medium"
            onClick={deleteHandler}
          >
            YES, DELETE
          </button>
        </div>
      </div>
    </section>
  );
}
