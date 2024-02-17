import { MDBBtn, MDBSpinner } from 'mdb-react-ui-kit';
import {useState} from 'react'; 

const ChatInput = ({handleSendMessage, isLoading}) => {
  const [userMessage, setUserMessage] = useState("");

  const handleMessage = (e) => {
    setUserMessage(e.target.value);
  };

  const handleMessageSend = async () => {
    handleSendMessage(userMessage);
    setUserMessage("");
  };

  return (
    <div className="form-outline d-flex align-items-center">
      <textarea
        className="form-control"
        id="textAreaExample"
        rows="4"
        value={userMessage}
        onChange={handleMessage}
      ></textarea>
      <label className="form-label" for="textAreaExample">
        Type your message
      </label>

      <MDBBtn className="me-2" disabled={isLoading} onClick={handleMessageSend}>
        {isLoading ? (
          <>
            <MDBSpinner size="sm" role="status" tag="span" />
            <span className="visually-hidden">Loading...</span>
          </>
        ) : (
          "enviar"
        )}
      </MDBBtn>
    </div>
  );
};

export default ChatInput;