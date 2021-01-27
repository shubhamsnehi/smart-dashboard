export function PostData(userData){
    // let baseUrl='https://jsonplaceholder.typicode.com/users';
    let baseUrl='http://localhost:3000/customers';
    console.log(userData);
    return new Promise((resolve, reject) =>{
        fetch(baseUrl,{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        })
            .then((response) => response.json())
            .then((json) => {
                resolve(json);
            })
            .catch((error) => {
                reject(error);
            });
    })
}