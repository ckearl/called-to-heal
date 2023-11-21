import React, { useState } from "react";

const Therapy = () => {
  const messageSubmitHandler = (event) => {
    event.preventDefault();
    if (event.target[0].value === "") return alert("Please enter a message");
    alert("Message sent!");
    event.target.reset();
  };
  return (
    <div>
      <h2 className="text-center">Schedule a meeting with your therapist</h2>
      <button
        className="btn bg-primary text-white w-100"
        onClick={() => alert("Redirecting to scheduler portal...")}
      >
        To Meeting Scheduler Portal
      </button>
      <hr />
      <h2 className="text-center">Send a message to your therapist</h2>
      <form onSubmit={messageSubmitHandler}>
        <input type="text" className="form-control" placeholder="I'm feeling..." />
        <input type="submit" className="btn btn-primary mt-2" value="Send Message" />
      </form>
    </div>
  );
};

const Meditation = () => {
  return (
    <div>
      <h2 className="text-center">Download the Calm App</h2>
      <button
        className="btn bg-primary text-white w-100"
        onClick={() => alert("Redirecting to App Store...")}
      >
        To App Store
      </button>
    </div>
  );
};

const Notepad = ({ user, setUser }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    if (event.target[0].value === "") return alert("Please enter a note");
    const entry = event.target[0].value;
    const date = new Date().toISOString().slice(0, 10);
    const newEntry = { date, entry };
    setUser({
      ...user,
      notepad: {
        ...user.notepad,
        entries: [newEntry, ...user.notepad.entries],
      },
    });
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <h2>Add New Note</h2>
          <input type="text" className="form-control" />
          <input className="btn bg-secondary text-dark inactive" type="submit" value="Add Note" />
        </form>
        <br />
        <h2>Your Notes:</h2>
        {user.notepad.entries.map((entry, i) => (
          <div key={i} className="bg-secondary p-2 rounded my-2">
            <h3>{entry.date}</h3>
            <p>{entry.entry}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Media = () => {
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/8NH5XnaWIv8?si=Y2NCawuT7wV-uwje"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="w-100"
      ></iframe>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/ckuIXECbB5E?si=LeG-7fZRqG2GCDpq"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="w-100"
      ></iframe>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/ezGzcuAfyBE?si=sXm42vOWY68rhTJx"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="w-100"
      ></iframe>
    </div>
  );
};

const Toolbox = ({ user, setUser }) => {
  // set which tool is active
  const [tool, setTool] = useState("none");
  const handleSetTool = (tool) => () => {
    setTool(tool);
  };

  return (
    <div className="p-3">
      <div id="tool-selection" className="d-flex flex-wrap">
        <div className="w-50 p-1 ">
          <button
            id="therapy"
            className={"btn btn-outline-primary w-100 fs-5" + (tool === "therapy" ? " active" : "")}
            style={{ height: 70 }}
            onClick={handleSetTool("therapy")}
          >
            Schedule Therapy
          </button>
        </div>
        <div className="w-50 p-1 ">
          <button
            id="meditation"
            className={
              "btn btn-outline-primary w-100 fs-5" + (tool === "meditation" ? " active" : "")
            }
            style={{ height: 70 }}
            onClick={handleSetTool("meditation")}
          >
            Meditation Coach
          </button>
        </div>
        <div className="w-50 p-1 ">
          <button
            id="notepad"
            className={"btn btn-outline-primary w-100 fs-5" + (tool === "notepad" ? " active" : "")}
            style={{ height: 70 }}
            onClick={handleSetTool("notepad")}
          >
            Notepad
          </button>
        </div>
        <div className="w-50 p-1 ">
          <button
            id="media"
            className={"btn btn-outline-primary w-100 fs-5" + (tool === "media" ? " active" : "")}
            style={{ height: 70 }}
            onClick={handleSetTool("media")}
          >
            Media Player
          </button>
        </div>
      </div>
      <hr />
      <div className="">
        {tool === "none" && <h1 className="text-center">Select a Tool</h1>}

        {tool === "therapy" && <Therapy />}

        {tool === "meditation" && <Meditation />}

        {tool === "notepad" && <Notepad user={user} setUser={setUser} />}

        {tool === "media" && <Media />}
      </div>
    </div>
  );
};

export default Toolbox;
