import classNames from 'classnames';
import { Link } from 'react-router-dom';
import moment from 'moment';

export default function LaunchItem({ launch }) {
	const launchDate = moment(launch.launch_date_local).format('YYYY-MM-DD HH:mm');
	return (
		<div className="card card-body mb-3">
			<div className="row">
				<div className="col-md-9">
					<h4>
						Mission:{' '}
						<span
							className={classNames({
								'text-success': launch.launch_success,
								'text-danger': !launch.launch_success,
							})}
						>
							{launch.mission_name}
						</span>
					</h4>
					<p>Date: {launchDate}</p>
				</div>
				<div className="col-md-3">
					<Link to={`/launch/${launch.flight_number}`} className="btn btn-primary">
						Launch Details
					</Link>
				</div>
			</div>
		</div>
	);
}
