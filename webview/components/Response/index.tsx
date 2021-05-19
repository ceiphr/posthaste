import * as React from "react";
import * as propTypes from "prop-types";
import Editor from "@monaco-editor/react";
import "./styles.css";
import { responseViews } from "../../constants/response-views";
import { supportedLangs } from "../../constants/supported-langs";

export const Response = (props) => {
  const { response } = props;
  const [view, setView] = React.useState(responseViews[0].value);
  return (
    <div className="response-window">
      <div className="response-header">
        <div className="response-view-options">
          <div>
            {responseViews.map((type) => (
              <button
                className={
                  view === type.value
                    ? "button-response-view button-response-view-selected"
                    : "button-response-view"
                }
                key={type.value}
                onClick={() => setView(type.value)}
              >
                {type.name}
              </button>
            ))}
          </div>
          <select className="select-res-lang">
            {supportedLangs.map((type) => (
              <option key={type.value} value={type.value}>
                {type.name}
              </option>
            ))}
          </select>
        </div>
        <div className="response-status">
          <div>Status:</div>
          <div className="text-response-status">{`${response.status} ${response.statusText}`}</div>
        </div>
      </div>
      <Editor
        height="60%"
        language="JSON"
        theme="vs-dark"
        value={JSON.stringify(response.data)}
      ></Editor>
    </div>
  );
};

Response.propTypes = {
  response: propTypes.object.isRequired,
};
