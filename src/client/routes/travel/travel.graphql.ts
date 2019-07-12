import { gql } from 'apollo-boost';

export default gql`
	query travel {
		me {
			id
			... on Hacker {
				travel {
					id
					createdAt
					originCity
					receipts {
						id
					}
				}
			}
		}
	}

	mutation singleUpload($input: Upload!) {
		singleUpload(input: $input) {
			id
			filename
			mimetype
			encoding
		}
	}
`;
