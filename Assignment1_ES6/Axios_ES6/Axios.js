const info = async () => {
try{
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    let content = document.querySelector(".content");
    console.log(response);
    content.innerHTML = (response.data).map(element =>
    `
    <tr>
        <td>${element['userId']}</td>
        <td>${element['id']}</td>
        <td>${element['title']}</td>
    </tr>
    `
    ).join('');
} catch(errors){
    console.error(errors);
  }
};
info();