import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import verticalMenu from '../../assets/verticalmenu.svg';
import PaginationXD from '../../components/pagination/PaginationXD';

function createData(
	org: string,
	username: string,
	email: string,
	phone: string,
	date_joined: string,
	status: string
) {
	return { org, username, email, phone, date_joined, status };
}

const users = [
	createData(
		'Lendsqr',
		'Adedeji',
		'adedeji@lendsqr.com',
		'08078903721',
		'May 15, 2020 10:00 AM',
		'Inactive'
	),
	createData(
		'Irorun',
		'Debby Ogana',
		'debby2@irorun.com',
		'08078903721',
		'May 30, 2020 10:00 AM',
		'Pending'
	),
	createData(
		'Irorun',
		'Debby Ogana',
		'debby2@irorun.com',
		'08078903721',
		'May 30, 2020 10:00 AM',
		'Pending'
	),
	createData(
		'Irorun',
		'Debby Ogana',
		'debby2@irorun.com',
		'08078903721',
		'May 30, 2020 10:00 AM',
		'Pending'
	),
];

// console.log();

export default function UserTable() {
	const [currentPage, setCurrentPage] = React.useState(1);
	const [postsPerPage] = React.useState(2);

	const indexOfLastUser = currentPage * postsPerPage;
	const indexOfFirstUser = indexOfLastUser - postsPerPage;
	const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
	const paginate = (value: number) => {
		setCurrentPage(value);
	};
	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 650 }} aria-label='users table'>
				<TableHead>
					<TableRow>
						<TableCell
							sx={{
								textTransform: 'none',
								fontFamily: 'Work Sans',
								fontWeight: '600',
								fontSize: '0.8rem',
								whiteSpace: 'nowrap',
							}}>
							ORGANIZATION
						</TableCell>
						<TableCell
							sx={{
								fontWeight: '600',
								fontFamily: 'Work Sans',
								textTransform: 'none',
								fontSize: '0.8rem',
								whiteSpace: 'nowrap',
							}}>
							USERNAME
						</TableCell>
						<TableCell
							sx={{
								fontWeight: '600',
								fontFamily: 'Work Sans',
								textTransform: 'none',
								fontSize: '0.8rem',
								whiteSpace: 'nowrap',
							}}>
							EMAIL
						</TableCell>
						<TableCell
							sx={{
								fontWeight: '600',
								fontFamily: 'Work Sans',
								textTransform: 'none',
								fontSize: '0.8rem',
								whiteSpace: 'nowrap',
							}}>
							PHONE NUMBER
						</TableCell>
						<TableCell
							sx={{
								fontWeight: '600',
								fontFamily: 'Work Sans',
								textTransform: 'none',
								fontSize: '0.8rem',
								whiteSpace: 'nowrap',
							}}>
							DATE JOINED
						</TableCell>
						<TableCell
							sx={{
								fontWeight: '600',
								fontFamily: 'Work Sans',
								textTransform: 'none',
								fontSize: '0.8rem',
								whiteSpace: 'nowrap',
							}}>
							STATUS
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{currentUsers.map((user, index) => (
						<TableRow
							key={index}
							sx={{
								'&:last-child td, &:last-child th': { border: 0 },
							}}>
							<TableCell
								sx={{
									width: 'max-content',
									fontFamily: 'Work Sans',
									fontWeight: '400',
									whiteSpace: 'nowrap',
									fontSize: '0.8rem',
								}}>
								{user.org}
							</TableCell>
							<TableCell
								// align='center'
								sx={{
									width: 'max-content',
									fontFamily: 'Work Sans',
									fontWeight: '400',
									whiteSpace: 'nowrap',
									fontSize: '0.8rem',
								}}>
								{user.username}
							</TableCell>
							<TableCell
								// align='center'
								sx={{
									width: 'max-content',
									fontFamily: 'Work Sans',
									fontWeight: '400',
									whiteSpace: 'nowrap',
									fontSize: '0.8rem',
								}}>
								{user.email}
							</TableCell>
							<TableCell
								// align='center'
								sx={{
									width: 'max-content',
									fontFamily: 'Work Sans',
									fontWeight: '400',
									whiteSpace: 'nowrap',
									fontSize: '0.8rem',
								}}>
								{user.phone}
							</TableCell>
							<TableCell
								sx={{
									width: 'max-content',
									fontFamily: 'Work Sans',
									fontWeight: '400',
									whiteSpace: 'nowrap',
									fontSize: '0.8rem',
								}}>
								{user.date_joined}
							</TableCell>
							<TableCell
								sx={{
									whiteSpace: 'nowrap',
									position: 'relative',
								}}>
								<p
									style={{
										fontFamily: 'Work Sans',
										fontWeight: '400',
										fontSize: '0.8rem',
										backgroundColor:
											user.status === 'Active'
												? '#F3FCF6'
												: user.status === 'Pending'
												? '#FDF7E5'
												: user.status === 'Inactive'
												? '#F5F5F7'
												: '#FCE3E7',
										color:
											user.status === 'Active'
												? '#53D072'
												: user.status === 'Pending'
												? '#EBBB1C'
												: user.status === 'Inactive'
												? 'rgba(84, 95, 125, 1)'
												: '#E4033B',
										marginRight: '70px',
										padding: '5px 10px',
										borderRadius: '32%',
									}}>
									{user.status}
								</p>

								<img
									src={verticalMenu}
									style={{
										position: 'absolute',
										right: '30px',
										top: '50%',
										transform: 'translateY(-50%)',
									}}
									alt='vertical menu icon'
								/>
							</TableCell>
						</TableRow>
					))}
					<tr>
						<PaginationXD
							postsPerPage={postsPerPage}
							totalPosts={users.length}
							paginate={paginate}
						/>
					</tr>
				</TableBody>
			</Table>
		</TableContainer>
	);
}
