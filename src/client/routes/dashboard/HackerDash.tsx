import React, { FunctionComponent, useState } from 'react';
import { Link } from 'react-router-dom';
import TextButton from '../../components/Buttons/TextButton';
import FloatingPopup from '../../components/Containers/FloatingPopup';
import { FlexColumn, FlexStartColumn } from '../../components/Containers/FlexContainers';
import Title from '../../components/Text/Title';
import STRINGS from '../../assets/strings.json';
import { ButtonOutline, CenterButtonText } from '../../components/Buttons/Buttons';
import applicationIncompleteSVG from '../../assets/img/application_incomplete.svg';
import SmallCenteredText from '../../components/Text/SmallCenteredText';
import Status from '../../../common/models/Status';

const statusConfig = {
	[Status.Created]: {
		actionNav: '/application',
		actionText: 'Complete your application',
		boldText: "You haven't started your application yet.",
		img: applicationIncompleteSVG,
		status: 'Not Started',
		statusBG: '#FBE4E8',
		statusColor: '#FF647C',
		text: `The deadline is ${STRINGS.DEADLINE}`,
	},
	[Status.Started]: {
		actionNav: '/application',
		actionText: 'Complete your application',
		boldText: 'You still need to finish your application.',
		img: applicationIncompleteSVG,
		status: 'Incomplete',
		statusBG: '#FBE4E8',
		statusColor: '#FF647C',
		text: `The deadline is ${STRINGS.DEADLINE}`,
	},
	[Status.Confirmed]: {
		actionNav: '/team',
		actionText: 'Register your team',
		boldText: 'You can now create and register your team.',
		img: applicationIncompleteSVG,
		status: 'Confirmed',
		statusBG: '#D5F2EA',
		statusColor: '#FF647C',
		text: "If you don't have one, you can form one when you get here!",
	},
	[Status.Accepted]: {
		actionNav: '/confirm',
		actionText: 'Confirm your spot',
		boldText: "You've been accepted!",
		img: applicationIncompleteSVG,
		status: 'Accepted',
		statusBG: '#D5F2EA',
		statusColor: '#FF647C',
		text: "Confirm your spot to let us know you'll be coming",
	},
	[Status.Rejected]: {
		boldText: "Unfortunately, we couldn't offer you a spot this year :(",
		hideAction: true,
		img: applicationIncompleteSVG,
		status: 'Denied',
		statusBG: '#FBE4E8',
		statusColor: '#FF647C',
		text: "Confirm your spot to let us know you'll be coming",
	},
};

export const HackerDash: FunctionComponent = (): JSX.Element => {
	const [statusInfo, setStatusInfo] = useState(statusConfig[Status.Created]);

	return (
		<>
			<FlexStartColumn>
				<FloatingPopup
					borderRadius="1rem"
					height="min-content"
					width="36rem"
					backgroundOpacity="1"
					padding="1.5rem">
					<FlexColumn>
						<Title fontSize="1.8rem">{STRINGS.HACKER_DASHBOARD_HEADER_TEXT}</Title>
						<ButtonOutline
							sidePadding="4rem"
							width="auto"
							background={statusInfo.statusBG}
							glowColor="null">
							<CenterButtonText color={statusInfo.statusColor} fontWeight="bold" fontSize="1.8rem">
								{statusInfo.status}
							</CenterButtonText>
						</ButtonOutline>
						<img src={statusInfo.img} alt="Man wearing hoodie at holographic computer" />
						<SmallCenteredText color="#3F3356" fontSize="1rem" margin="1.4rem">
							<span style={{ fontWeight: 'bold' }}>You still need to finish your application.</span>
							<br />
							{'The deadline is January 1, 2020 at 11:59 pm (EST).'}
						</SmallCenteredText>
						{statusInfo.hideAction ? null : (
							<Link style={{ textDecoration: 'none' }} to="/application">
								<TextButton
									color="white"
									fontSize="1.4em"
									background={STRINGS.ACCENT_COLOR}
									text="Complete your application"
									glowColor="rgba(0, 0, 255, 0.67)"
								/>
							</Link>
						)}
					</FlexColumn>
				</FloatingPopup>
			</FlexStartColumn>
		</>
	);
};

export default HackerDash;
