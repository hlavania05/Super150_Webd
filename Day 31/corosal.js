let img = document.querySelector('img');
let images = [
    "https://wallup.net/wp-content/uploads/2016/03/10/318375-nature-landscape-lake-mountain-forest-wildflowers-spring-pine_trees-path-Switzerland-HDR.jpg", 
    "http://getwallpapers.com/wallpaper/full/7/c/7/624165.jpg", 
    "https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?cs=srgb&dl=daylight-forest-glossy-443446.jpg&fm=jpg"
];
let num = 0;
setInterval(()=> { 
    img.setAttribute('src', images[num]);
    num = (num+1)%images.length
}, 2000);









// let images = [
//     "https://i2.wp.com/godofindia.com/wp-content/uploads/2017/05/lord-krishna-14.jpg",
//     "https://2.bp.blogspot.com/-8DL1_7b-4h4/UhNloO6amvI/AAAAAAAAAcU/j-ZgMSBMmg4/s1600/lord+krishna+full+screen+wallpaper.jpg",
//     "https://www.imnepal.com/wp-content/uploads/2019/11/Hindu-Krishna-Wallpaper.jpg",
//     "https://img.freepik.com/premium-photo/shree-krishna-illustration-janmashtami-generative-ai_756405-2070.jpg?w=1060"
// ]
// let img = document.querySelector('img');
// let idx = 0;
// setInterval(() => {
//     img.setAttribute('src', images[idx]);
//     idx = idx%images.length+1;
// }, 2000);











