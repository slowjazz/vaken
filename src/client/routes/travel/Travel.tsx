import React, { FC } from 'react';
import FloatingPopup from '../../components/Containers/FloatingPopup';

import { FlexColumn } from '../../components/Containers/FlexContainers';
import Announcment from '../../components/Text/Announcment';
import STRINGS from '../../assets/strings.json';
import { GraphQLErrorMessage } from '../../components/Text/ErrorMessage';
import { Spinner } from '../../components/Loading/Spinner';
import { useSingleUploadMutation } from '../../generated/graphql';

export const Travel: FC = () => {
	// const { loading, error, data } = useTeamQuery();

	return (
		<FlexColumn>
			<Announcment value={STRINGS.HACKER_TEAMS_ANNOUNCMENT_TEXT} />
		</FlexColumn>
	);
};

export default Travel;
