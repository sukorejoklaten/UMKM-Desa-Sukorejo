const topBtn = document.getElementById("topBtn");

window.onscroll = function(){

    if(document.body.scrollTop > 300 ||
       document.documentElement.scrollTop > 300){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

}

topBtn.onclick = function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}
.umkm-card{

    border:none;

    border-radius:18px;

    overflow:hidden;

    transition:.4s;

    box-shadow:0 8px 25px rgba(0,0,0,.08);

}

.umkm-card:hover{

    transform:translateY(-10px);

}

.umkm-card img{

    height:220px;

    object-fit:cover;

}

.umkm-card .card-body{

    padding:25px;

}