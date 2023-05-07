import * as React from 'react';

import { TablePagination } from '@mui/material';

type Props = {
	totalPosts: number;
	paginate: (x: number) => void;
	postsPerPage: number;
};

export default function PaginationXD({
	totalPosts,
	paginate,
	postsPerPage,
}: Props) {
	const [page, setPage] = React.useState(1);
	const PageNumber = Math.ceil(totalPosts / postsPerPage);
	const handleClick = (event: unknown, value: number) => {
		setPage(value + 1);
		paginate(value + 1);
		// console.log(value);
	};

	return (
		<TablePagination
			count={PageNumber}
			rowsPerPageOptions={[1]}
			onPageChange={handleClick}
			page={page - 1}
			rowsPerPage={1}
			sx={{ padding: '0.5rem 1rem !important' }}
		/>
	);
}
