import React from "react";

class Team extends React.Component {
    constructor(props) {
        super(props);
        this.imageArr = [
            { name: "Name", url: "1.jpg" },
            { name: "Name", url: "1.jpg" },
            { name: "Name", url: "1.jpg" },
            { name: "Name", url: "1.jpg" },
            { name: "Name", url: "1.jpg" },
            { name: "Name", url: "1.jpg" }
        ];
    }

    displayImage(imageArr) {
        // const url = "images/team/" + imageObj.url;
        return (
            <div>
                {imageArr.map(Obj => (
                    <div className="col s12 m3">
                        <img
                            className="team-img"
                            src={"images/team/" + Obj.url}
                        />
                        <p>{Obj.name}</p>
                    </div>
                ))}
            </div>
        );
    }

    render = () => (
        <div className="row center">
            <div className="col s12">
                <h5>Meet the team behind Electric Pulp</h5>
                <div className="row imageDisplay">
                    {this.displayImage(this.imageArr)}
                </div>
            </div>
        </div>
    );
}

export default Team;
