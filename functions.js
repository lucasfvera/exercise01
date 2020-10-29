function renderMultipleImg(element,times,id) {
    let newElement = '';
    console.log(element);
    for(let i=0;i<times;i++){
        newElement = newElement + element;
    }
    console.log(newElement);
    document.getElementById(id) = newElement;
};