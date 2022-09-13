import { BASE } from './constants';

export const getData = async (params, onSuccess, onError) => {
	const data = await fetch(BASE + params)
		.then(response => response.json())
		.catch(({ message }) => onError(message));

	onSuccess(data);
};
