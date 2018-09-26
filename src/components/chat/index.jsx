import React from 'react';
import SimpleMDE from 'react-simplemde-editor';
import 'simplemde/dist/simplemde.min.css';

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mdeValue: '',
      textValue: '',
    };
  }

  handleChange = (value) => {
    this.setState({ mdeValue: value });
    console.log(value);
  };

  sendMessage = () => {
    this.setState({ textValue: '' });
    console.log(this.state.textValue);
  }

  render = () => {
    const extraKeys = {
      Up(cm) {
        cm.replaceSelection(' surprise. ');
      },
      Down(cm) {
        cm.replaceSelection(' surprise again! ');
      },
    };
    return (
      (
        <div>
          <li>
            <button onClick={this.sendMessage}>
              Send
            </button>
          </li>
          <li className="editor">
            <SimpleMDE
              value={this.state.textValue}
              onChange={this.handleChange}
              extraKeys={extraKeys}
            />
          </li>
        </div>
      )
    );
  }
}

export default Chat;
