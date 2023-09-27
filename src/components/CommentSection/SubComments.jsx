export default function SubComments(props) {
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
              rows="5"
              className="col-start-1 col-end-3 landscape:lg:col-start-2 landscape:lg:col-end-4 text-greyish-blue rounded-md p-3 bg-white"
              disabled
            >
              {element.content}
            </textarea>
            <div className="grid justify-items-start landscape:lg:justify-items-stretch landscape:lg:row-start-1 landscape:lg:row-end-3">
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
              <button className="flex items-center gap-1">
                <img src="icon-delete.svg" alt="" />
                <p className="font-medium text-soft-red">Delete</p>
              </button>
              <button className="flex items-center gap-1">
                <img src="icon-edit.svg" alt="" />
                <p className="font-medium text-moderate-blue">Edit</p>
              </button>
            </div>
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
            <div className="grid justify-items-start landscape:lg:justify-items-stretch landscape:lg:row-start-1 landscape:lg:row-end-3">
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
