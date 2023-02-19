let count =0;
document.getElementById('add').addEventListener('click',function(){
    const inputField = document.getElementById('input').value;
    count++;
    //rows-element
    // Parent node table row;
    const rowsElement = document.getElementById('rows-element');
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${count}</td>
    <td>${inputField}</td>
    <td>
    <button id="delete">Delete</button>
    </td>
    `;
     rowsElement.appendChild(tr);

    //  For deleteing:;

    const deleteBtn = document.querySelectorAll('#delete');
    for(const value of deleteBtn){
        value.addEventListener('click',function(event){
           const myitem = event.target.parentNode.parentNode;
           myitem.innerHTML = '';
        })
    }
})