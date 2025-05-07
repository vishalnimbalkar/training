 
  // callback hell?
  function task1(callback) {
    setTimeout(() => {
        console.log("Task One completed");
        callback();
    },1000);
}

function task2(callback) {
    setTimeout(() => {
        console.log("Task two completed");
        callback();
    },1000);
}

function task3(callback) {
    setTimeout(() => {
        console.log("Task Three completed");
        callback();
    },1000);
}

// callback hell 
// task1(()=>{
//     task2(()=>{
//         task3(()=>{
//             console.log('task ended');
            
//         });
//     })
// })

function getData(data){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            if(typeof data === 'string'){
                resolve(data);
            }else{
                reject('error')
            }
        }, 2000);
    })
}

// getData('data1').then((res)=>{
//     console.log(res);
//     return getData(234);
// }).then((res)=>{
//     console.log(res);
//     return getData('data3');
// }).then((res)=>{
//     console.log(res);
// }).catch((error)=>{
//     console.log(error);
// })

async function showResult(){
    try{
    const res1 = await getData('data1');
    console.log(res1);
    const res2 = await getData(233);
    console.log(res2);
    const res3 = await getData('data3');
    console.log(res3);
    }catch(error){
        console.log(error);
    }
} 

// this will execute third getData() even if error occurs in second
async function showResult2() {
    try {
        const res1 = await getData('data1');
        console.log(res1);
    } catch (error) {
        console.log('res1 error:', error);
    }

    try {
        const res2 = await getData(233);
        console.log(res2);
    } catch (error) {
        console.log('res2 error:', error);
    }

    try {
        const res3 = await getData('data3');
        console.log(res3);
    } catch (error) {
        console.log('res3 error:', error);
    }
}


// showResult();
showResult2();

// sync, async and callback working?
// nodejs single threaded feature and limitation also why?

// try error handling in promises and async await?
// we have nested promises one of them is rejected what happens next?