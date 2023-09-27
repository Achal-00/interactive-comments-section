import { useContext } from "react";
import { CommentContext } from "../App";

export default function SubComments(props) {
  const { commentData, setCommentData } = useContext(CommentContext);

  return (
    <div className="grid gap-4 w-[95%] justify-self-end">
      {props.replies.map((element) =>
        element.username === "juliusomo" ? (
          <div className="bg-white p-4 rounded-lg grid gap-4 portrait:grid-cols-2 landscape:lg:grid-cols-[0.1fr_1fr_0.3fr]">
            <div className="col-start-1 col-end-3 flex items-center gap-4 landscape:lg:col-start-2 landscape:lg:col-end-4 landscape:lg:row-start-1 landscape:lg:row-end-2">
              <img src={element.image} alt="" className="w-8" />
              <p className="text-dark-blue font-bold">{element.username}</p>
              <p className="text-greyish-blue">{element.createdAt}</p>
            </div>
            <textarea
              name=""
              id=""
              cols="30"
              rows="2"
              className={`col-start-1 col-end-3 landscape:lg:col-start-2 landscape:lg:col-end-4 text-greyish-blue rounded-md p-3 bg-white ${
                element.editFlag && "border-2"
              } sub-edit-input`}
              disabled={!element.editFlag}
            >
              {element.content}
            </textarea>
            <div className="grid self-start justify-items-start landscape:lg:justify-items-stretch landscape:lg:row-start-1 landscape:lg:row-end-3">
              <div className="flex landscape:lg:flex-col items-center gap-4 bg-very-light-grey py-2 px-4 landscape:lg:py-4 landscape:lg:px-2 rounded-md">
                <button>
                  <img src="icon-plus.svg" alt="" />
                </button>
                <p>{element.score}</p>
                <button>
                  <img src="icon-minus.svg" alt="" />
                </button>
              </div>
            </div>
            <div className="self-center justify-self-end landscape:lg:col-start-3 landscape:lg:col-end-4 landscape:lg:row-start-1 landscape:lg:row-end-2 flex gap-4">
              <button
                className="flex items-center gap-1"
                onClick={() => {
                  document
                    .querySelectorAll(".overlay-blur, .overlay-delete")
                    .forEach((x) => {
                      x.classList.remove("hidden");
                    });

                  let temp = commentData;
                  temp[temp.indexOf(props.parentElement)].replies[
                    temp[temp.indexOf(props.parentElement)].replies.indexOf(
                      element
                    )
                  ].deleteFlag = true;
                  setCommentData([...temp]);
                }}
              >
                <img src="icon-delete.svg" alt="" />
                <p className="font-medium text-soft-red">Delete</p>
              </button>
              <button
                className="flex items-center gap-1"
                onClick={() => {
                  let temp = commentData;
                  temp[temp.indexOf(props.parentElement)].replies[
                    temp[temp.indexOf(props.parentElement)].replies.indexOf(
                      element
                    )
                  ].editFlag = true;
                  setCommentData([...temp]);
                }}
              >
                <img src="icon-edit.svg" alt="" />
                <p className="font-medium text-moderate-blue">Edit</p>
              </button>
            </div>
            {element.editFlag && (
              <button
                className="bg-moderate-blue col-start-1 col-end-3 landscape:lg:col-end-4 text-white rounded-md py-2 px-4 font-medium justify-self-end"
                onClick={() => {
                  let temp = commentData;
                  temp[temp.indexOf(props.parentElement)].replies[
                    temp[temp.indexOf(props.parentElement)].replies.indexOf(
                      element
                    )
                  ].editFlag = false;
                  temp[temp.indexOf(props.parentElement)].replies[
                    temp[temp.indexOf(props.parentElement)].replies.indexOf(
                      element
                    )
                  ].content = document.querySelector(".sub-edit-input");
                  setCommentData([...temp]);
                }}
              >
                UPDATE
              </button>
            )}
          </div>
        ) : (
          <div className="bg-white p-4 rounded-lg grid gap-4 portrait:grid-cols-2 landscape:lg:grid-cols-[0.1fr_1fr_0.2fr]">
            <div className="col-start-1 col-end-3 flex items-center gap-4 landscape:lg:col-start-2 landscape:lg:col-end-4 landscape:lg:row-start-1 landscape:lg:row-end-2">
              <img src={element.image} alt="" className="w-8" />
              <p className="text-dark-blue font-bold">{element.username}</p>
              <p className="text-greyish-blue">{element.createdAt}</p>
            </div>
            <p className="col-start-1 col-end-3 landscape:lg:col-start-2 landscape:lg:col-end-4 text-greyish-blue">
              {element.content}
            </p>
            <div className="grid self-start justify-items-start landscape:lg:justify-items-stretch landscape:lg:row-start-1 landscape:lg:row-end-3">
              <div className="flex landscape:lg:flex-col items-center gap-4 bg-very-light-grey py-2 px-4 landscape:lg:py-4 landscape:lg:px-2 rounded-md">
                <button
                  onClick={() => {
                    let temp = commentData;
                    if (
                      temp[temp.indexOf(props.parentElement)].replies[
                        temp[temp.indexOf(props.parentElement)].replies.indexOf(
                          element
                        )
                      ].score !==
                      temp[temp.indexOf(props.parentElement)].replies[
                        temp[temp.indexOf(props.parentElement)].replies.indexOf(
                          element
                        )
                      ].incrementedScore
                    ) {
                      temp[temp.indexOf(props.parentElement)].replies[
                        temp[temp.indexOf(props.parentElement)].replies.indexOf(
                          element
                        )
                      ].score =
                        temp[temp.indexOf(props.parentElement)].replies[
                          temp[
                            temp.indexOf(props.parentElement)
                          ].replies.indexOf(element)
                        ].score + 1;
                      setCommentData([...temp]);
                    }
                  }}
                >
                  <img src="icon-plus.svg" alt="" />
                </button>
                <p>{element.score}</p>
                <button
                  onClick={() => {
                    let temp = commentData;
                    if (
                      temp[temp.indexOf(props.parentElement)].replies[
                        temp[temp.indexOf(props.parentElement)].replies.indexOf(
                          element
                        )
                      ].score !==
                      temp[temp.indexOf(props.parentElement)].replies[
                        temp[temp.indexOf(props.parentElement)].replies.indexOf(
                          element
                        )
                      ].decrementedScore
                    ) {
                      temp[temp.indexOf(props.parentElement)].replies[
                        temp[temp.indexOf(props.parentElement)].replies.indexOf(
                          element
                        )
                      ].score =
                        temp[temp.indexOf(props.parentElement)].replies[
                          temp[
                            temp.indexOf(props.parentElement)
                          ].replies.indexOf(element)
                        ].score - 1;
                      setCommentData([...temp]);
                    }
                  }}
                >
                  <img src="icon-minus.svg" alt="" />
                </button>
              </div>
            </div>
            <div className="self-center justify-self-end landscape:lg:col-start-3 landscape:lg:col-end-4 landscape:lg:row-start-1 landscape:lg:row-end-2">
              <button className="flex items-center gap-2">
                <img src="icon-reply.svg" alt="" />
                <p className="font-medium text-moderate-blue">Reply</p>
              </button>
            </div>
          </div>
        )
      )}
    </div>
  );
}
