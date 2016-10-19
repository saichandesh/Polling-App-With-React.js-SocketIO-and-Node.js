import React from 'react'
import {BarChart} from 'react-d3'

import Display from './partials/Display'

class Board extends React.Component {

	barGraphData(results){
		var chartData = [];
		var labels = ["option-1","option-2","option-3","option-4"];
		var i =0;
		results.forEach(function(result){
			var temp = {};
			temp.label = labels[i];
			temp.value = result;
			chartData.push(temp);
			i++;
		});
		return chartData;
	}

	render(){
		return (

					<div>
						<Display if={this.props.status == 'connected' && this.props.questions[this.props.selectedQuestion].results.length >0}>
							<BarChart data={this.barGraphData(this.props.questions[this.props.selectedQuestion].results)}
									  title = {this.props.questions[this.props.selectedQuestion].ques} 
									  heigth = {window.innerHeight * 0.6}
									  width = {window.innerWidth * 0.9} /> 
						</Display>
						<Display if={this.props.status == 'disconnected'}>
							<h2>Server stopped working. Will back soon...</h2>
						</Display>
					</div>

			   );
	}
}

module.exports = Board;