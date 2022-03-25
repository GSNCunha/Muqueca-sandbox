fetch('img/desktop.json')
.then(res => res.json())
.then(data =>{
    let searchClass = ".MuClass";
    const database = data;
    const search = document.querySelector('.searchBar').value;
    let counter = 0;
    let buffer = "";
    buffer = `
        <div class="col-xs-12 col-sm-3 col-md-3 col-lg-2">
            <nav>
                <div class="navigationProducts">
    `;
    for(let i =0; i < database.children.length; i++){

        let temporaryBuffer= "";
        let haveItems = false;
        temporaryBuffer += `
            
        <div class="category"> 
            <h3>${database.children[i].name}</h3>
        </div>
        
        <div>
        `; 

        for(let y = 0; y < database.children[i].children.length; y++){
                counter++;
                haveItems = true;
                temporaryBuffer += `
                <div class="item">
                    <figure class="fig">
                        <img id='${database.children[i].children[y].name}' class="img" type="button" src='../img/${database.children[i].children[y].path}' alt='${database.children[i].children[y].name}'>
                        <figcaption>${database.children[i].children[y].name}</figcaption>
                    </figure>
                </div>
                `; 
        }
        temporaryBuffer += `</div>
        `;   
        if(haveItems)
        {

            buffer += temporaryBuffer;

        }
    }
    buffer +=`
    </div>
    </nav>
  </div>

    `;
    document.querySelector(searchClass).innerHTML = buffer;
    document.querySelector('.counter').innerHTML = `${counter} layouts found`;

})
.catch((error)=>{
    console.error(error);
})