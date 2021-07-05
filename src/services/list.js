export function getList() {
	return fetch('https://jsonplaceholder.typicode.com/posts/1').then((data) => data.json())
}
