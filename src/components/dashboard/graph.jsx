import React from 'react';
import { Bar } from 'react-chartjs-2';

class BarChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.colors = ['#ff5b57', '#0ac38f', '#348fe2', '#9c72b6', '#f59c1a', '#99052c', '#4c66bf', '#49c7f3', '#ffcd56', '#55ed74'];
    this.labels = [];
    this.datasets = {};
    const data = [];
    props.players.map((d) => {
      this.labels.push(d.username);
      data.push(d.level_cleared);
    });
    this.datasets.data = data;
    this.datasets.label = 'Team contribution';
    this.datasets.backgroundColor = 'rgb(255, 99, 132)';
    this.datasets.borderColor = 'rgb(255, 99, 132)';
    this.state = {
      data: {
        labels: this.labels,
        datasets: [this.datasets],
      },
    };
  }

  render = () => (
    <div className="row">
      <div className="col s12">
        <div className="card z-index-4">

          <ul className="collapsible">
            <li>
              <div className="collapsible-header grey darken-3 white-text">
                <i className="material-icons">
                  insert_chart
                </i>
                Contributions
              </div>
            </li>
          </ul>
          <Bar
            width={5}
            height={2}
            data={this.state.data}
          />
        </div>
      </div>
    </div>
  );
}

export default BarChart;
