import React from 'react';

class Avatar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedAvatar: null
    };

    this.selectAvatar = this.selectAvatar.bind(this);
  }

  selectAvatar = (e) => {
    this.setState({
      selectedAvatar: e.currentTarget.dataset.id
    })
  }

  render() {
    const avatarName = [];
    for (let i = 2; i <= 60; i += 1) {
      avatarName.push(`/images/avatars/${i}.png`);
    }
    return (
      <div className="row">
        <div className="col s12">
          {
            avatarName.map(i => (
              <img data-id={i} className={(i === this.state.selectedAvatar) ? "circle responsive-img z-depth-5" : "circle responsive-img"} onClick={this.selectAvatar} key={i} src={i} alt="img" width="100" />
            ))
          }
        </div>
      </div>
    );
  }
}

export default Avatar;
