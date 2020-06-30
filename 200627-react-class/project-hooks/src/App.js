import React, {useState, useCallback, useRef, useEffect}  from 'react';


const App = () => {
	let id = useRef(1);

	const [ number, setNumber] = useState(0);

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [list, setList] = useState([]);

	const onChangeUsername = useCallback((e) => {
		setUsername(e.target.value);
	}, []);

	const onInsert = useCallback(() => {
		const user = {
			username: username,
			password: password,
			id: id.current++,
		}

		console.log(id);

		setList(list.concat(user));
		setUsername('');
		setPassword('');

	}, [id, list, password, username]);


	useEffect(() => {
		// cdm + cdu
		console.log('mount');

		return () => {
			// cwm + cdu
			console.log('unmount');
		}
	});


	return (
		<div>
			<h1>{number}</h1>
			<button type="button" onClick={() => setNumber(number + 1)}>increase</button>
			<div>
				{/* <input value={username} onChange={(e) => setUsername(e.target.value)} /> */}
				<input value={username} onChange={onChangeUsername} />
				<input value={password} onChange={(e) => setPassword(e.target.value)} />
				<button type="button" onClick={onInsert}>Insert</button>
			</div>
		</div>
	);
}

export default App;
