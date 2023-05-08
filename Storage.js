var userName = 'itay'
localStorage.setItem('username',userName)
sessionStorage.setItem('username',userName)



// var count = 0

// const timer = setInterval(()=>{
//     console.log('hello');
//     count++
//     if(count === 3){

//         clearInterval(timer)
//     }
// },500)

// let myPromise = new Promise(function(myResolve, myReject) {
//     // "Producing Code" (May take some time)

//       myResolve(); // when successful
//       myReject();  // when error
//     });

//     // "Consuming Code" (Must wait for a fulfilled Promise)
//     myPromise.then(
//       function(value) { /* code if successful / },
//       function(error) { / code if some error */ }
//     );

    const api = fetch('https://random-data-api.com/api/v2/users?size=2&is_xml=true%27)
    .then(result=>{return 'hello'})
    .then(()=>{return 'lala'})
    .then(()=>{return 'nadav'})
    .catch(error=>console.log(error))

    console.log(api);