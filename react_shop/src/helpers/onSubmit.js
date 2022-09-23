export const submit = (e, data, addProduct, setData) => {
    addProduct(prevData => [...prevData, data])
    console.log(data)
    e.preventDefault()
    fetch('/create-item', {
        method: 'POST',
        body: JSON.stringify({ data }),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        })
        .then(res => res.json())
        .then(json => setData(json.data))
    }
