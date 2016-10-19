import React from 'react'

class Attendance extends React.Component {

	addMemberRow(member,i){
		return(
				<tr key={i}>
					<td>{member.name}</td>
					<td>{member.id}</td>
				</tr>
			  );
	}

	render() {
		return (
					<div>
						<h2>Attendance - {this.props.updateAudiences.length} members</h2>
						<table className = "table table-stripred">
							<thead>
								<tr>
									<th>Audience Member</th>
									<th>Socket ID</th>
								</tr>
							</thead>
							<tbody>
								{this.props.updateAudiences.map(this.addMemberRow)}
							</tbody>
						</table>
					</div>
			   );
	}
}

module.exports = Attendance;