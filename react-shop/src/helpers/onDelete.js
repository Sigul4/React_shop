export function deletePost(e,onDelete,data){
    onDelete(data._id)
    e.stopPropagation()
    e.preventDefault()
    fetch('/edit-item',{
        method: 'DELETE',
        body: JSON.stringify({ data }),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    })
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
    })
}
