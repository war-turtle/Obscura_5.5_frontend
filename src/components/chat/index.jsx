import React from 'react';
import './index.css';
import 'simplemde/dist/simplemde.min.css';

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mdeValue: '',
      textValue: '',
    };
  }

  render = () => (
    (
      <div className="chat-container">
        hi

        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <input id="icon_prefix" type="text" className="validate" />
                <label htmlFor="icon_prefix">
                  Your Message
                </label>
              </div>
            </div>
          </form>
        </div>

      </div>
    )
  )
}

export default Chat;
