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
import axios from 'axios';

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

// console.log();

export default function UserTable() {
	const [usersdata, setUsersData] = React.useState([]) as any;
	const [loading, setLoading] = React.useState<null | string>(null);

	const getUsers = async () => {
		try {
			const response = await axios.get(
				' https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users '
			);
			if (response.status && response.status === 200) {
				setUsersData(response.data);
				setLoading('successful');
				return response.data;
			}
		} catch (error) {
			console.error('Error fetching data:', error);
			throw error;
		}
	};

	React.useEffect(() => {
		getUsers();
	}, []);

	const options: any = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
		second: 'numeric',
		hour12: false,
		timeZone: 'America/New_York',
	};

	console.log(usersdata, loading);
	console.log(
		new Date('2072-12-27T03:44:22.522Z').toLocaleString('en-US', options)
	);

	const [currentPage, setCurrentPage] = React.useState(1);
	const [postsPerPage] = React.useState(10);
	const indexOfLastUser = currentPage * postsPerPage;
	const indexOfFirstUser = indexOfLastUser - postsPerPage;
	const currentUsers = usersdata.slice(indexOfFirstUser, indexOfLastUser);
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
					{loading === 'successful' &&
						usersdata.length > 0 &&
						currentUsers.map((user: any) => (
							<TableRow
								key={user.id}
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
									{user?.orgName}
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
									{user?.userName}
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
									{user?.phoneNumber}
								</TableCell>
								<TableCell
									sx={{
										width: 'max-content',
										fontFamily: 'Work Sans',
										fontWeight: '400',
										whiteSpace: 'nowrap',
										fontSize: '0.8rem',
									}}>
									{new Date(user?.createdAt).toLocaleString('en-US', options)}
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
												user?.education.employmentStatus === 'Employed'
													? '#F3FCF6'
													: user?.education.employmentStatus === 'Pending'
													? '#FDF7E5'
													: user?.education.employmentStatus === 'Inactive'
													? '#F5F5F7'
													: '#FCE3E7',
											color:
												user?.education.employmentStatus === 'Employed'
													? '#53D072'
													: user?.education.employmentStatus === 'Pending'
													? '#EBBB1C'
													: user?.education.employmentStatus === 'Inactive'
													? 'rgba(84, 95, 125, 1)'
													: '#E4033B',
											marginRight: '70px',
											padding: '5px 10px',
											borderRadius: '32%',
										}}>
										{user?.education.employmentStatus}
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
							totalPosts={usersdata.length}
							paginate={paginate}
						/>
					</tr>
				</TableBody>
			</Table>
		</TableContainer>
	);
}
