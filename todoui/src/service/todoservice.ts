async function getTodos():Promise<any[]> {
    let todos:any = [];
    // call backend API to get the list of todos
    await fetch('http://localhost:3000/api/todos')
    .then((response) => response.json())
    .then((data) => {
        todos.push(...data);
    })
    .catch((error) => {
        console.error('Error fetching todos:', error);
        return [];
    });
    return todos;
}
export default getTodos