import { BASE, APP_ID } from './constants';

export const getData = async (params, onSuccess, onError) => {
	const data = await fetch(BASE + params + APP_ID)
		.then(response => response.json())
		.catch(({ message }) => onError(message));

	onSuccess(data);
};

export const toTime = date => {
	const dateObj = new Date(Date(date));
	const hours = dateObj.getHours();
	const minutes = dateObj.getMinutes();

	return `${hours}:${minutes}`;
};
