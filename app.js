function java(){
    var div = document.createElement('div');
    var salom = document.getElementById('salom');
    var btn1 = document.createElement('btn1');
    
  
    btn1.style.width="20%";
    btn1.style.height="100vh";
    btn1.style.display="inline-flex";
    btn1.style.justifyContent="center";
    btn1.style.alignItems="center";
    btn1.style.fontSize="28px";
    btn1.style.color="white";
    btn1.style.position='absolute';
    btn1.style.backgroundColor='red';
    btn1.style.marginTop='-160px';
    btn1.style.marginLeft='-250px';


  
    console.log(btn1);
    salom.appendChild(btn1);
  }



document.addEventListener('DOMContentLoaded', function() {
    // Rasm qo'shish uchun tugmani tanlang
    const button = document.getElementById('addImageButton');
    // Rasm qo'shish uchun container
    const imageContainer = document.getElementById('imageContainer');

    button.addEventListener('click', function() {
        // Yangi rasm elementi yaratamiz
        const img = document.createElement('img');
        img.src = 'tolib.jpg'; // Rasmining URL manzili
        img.alt = 'Placeholder Image'; // Alternativ matn (rasm ko'rsatilmasa)
        img.style.width = '70vh'; // Rasmning kengligi
        img.style.height = '70vh'; // Rasmning balandligi
        img.style.borderRadius='250px';
        img.style.position='absolute';

        // Rasmni containerga qo'shamiz
        imageContainer.appendChild(img);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Rasm qo'shish uchun tugmani tanlang
    const button = document.getElementById('asos');
    // Rasm qo'shish uchun container
    const imageContainer = document.getElementById('imageContainer');

    button.addEventListener('click', function() {
        // Yangi rasm elementi yaratamiz
        const img = document.createElement('img');
        img.src = 'farid.jpg'; // Rasmining URL manzili
        img.alt = 'Placeholder Image'; // Alternativ matn (rasm ko'rsatilmasa)
        img.style.width = '70vh'; // Rasmning kengligi
        img.style.height = '70vh'; // Rasmning balandligi
        img.style.borderRadius='250px';
        img.style.position='absolute';

        // Rasmni containerga qo'shamiz
        imageContainer.appendChild(img);
    });
});


