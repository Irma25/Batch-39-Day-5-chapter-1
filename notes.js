// array

// const array1 = ["Irma", "Septi", "Jane"];

// // console.log(array1);
// // console.info(array1[2])
// // console.log(array1[0]);

// // object

// const data = {
//     nama : "Irma",
//     alamat : "Bekasi",
//     noHandphone : 083110668440,

// }

// // console.log(data);
// // console.log(data.noHandphone)

// // Array of object

// const siswa = [
//     {
//         nama : "Abdullah",
//         kelas : 12,
//         jurusan : "IPA",
//     },

//     {
//         nama : "Sally",
//         kelas : 10,
//         jurusan : "Bahasa Inggris",
//     }
    
// ]

// // console.log(siswa[1]);
// // console.log(siswa);

// const murid = [
//     {
//         nama : "Abdullah",
//         kelas : 12,
//         jurusan : "IPA",
//         alamat : {
//             kelurahan   : "cibarusah",
//             kota        : "cikarang",
//             kodePos     : 17340,
//         },
//     },

//     {
//         nama : "Dewi",
//         kelas : 10,
//         jurusan : "bahasa",
//         alamat : {
//             kelurahan   : "Sindang Mulya",
//             kota        : "Bekasi",
//             kodePos     : 17340,
//         }
//     },

//     {
//         nama : "andika",
//         kelas : 12,
//         jurusan : "IPA",
//         alamat : {
//             kelurahan   : "ciputat",
//             kota        : "Jakarta",
//             kodePos     : 17340,
//         }
//     }
// ]



// console.log(murid);
// console.log(murid[2].alamat.kodePos);


// form

let dataProject = [];

function addData (event){
    event.preventDefault()

    let title = document.getElementById("input-title").value;
    let content = document.getElementById("content").value;
    let image = document.getElementById("input-image").files;

    // console.log(title);
    // console.log(content);
    // console.log(image);

    // bikin URL Image
    image = URL.createObjectURL(image[0]);
    // console.log(image);

    const Data = 
        {
            title,
            content,
            image
        }


    // console.log(Data);
    
        renderP();
    dataProject.push(Data);
    console.log(dataProject);

    renderP();
}

// buat function lagi untuk menampilkan data ke dalam inner html
function renderP (){

    document.getElementById("container").innerHTML = ''
    console.log(dataProject);
    for(let i = 0; i < dataProject.length; i++){
        console.log(dataProject[i]);
        document.getElementById("container").innerHTML+=
        `
        <div class="wrapper">
            <div class="content" id="content">
                <h2 id="input-title">${dataProject[i].title}</h1>
            </div>
            
            <div class="image-card">
                <img src="${dataProject[i].image}" alt="">
            </div>

            <div id="content">
                <p>${dataProject[i].content}</p>
            </div>
        </div>  
        `
    }
   
}