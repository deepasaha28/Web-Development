//async function getData() {
  //simulate getting data from a server
//  return new Promise((resolve, reject) => {
//    setTimeout(() => {
//      resolve(455)
//    }, 3500);
//  })
//}


//Settle means resolve or reject
//resolve means promise has settled successfully
//reject means promise has not settled successfully

//Fetch API
async function getData() {
  //simulate getting data from a server
  //let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')   //Promise to bring (fetch) data
      let x = await fetch('https://jsonplaceholder.typicode.com/posts',{
            method:'POST',
            body:JSON.stringify({
              title:'foo',
              body:'bar',
              userId: 1,
      }),
      headers:{
              'Content-type': 'application/json; charset=UTF-8',
      },
  
    })
  
  let data = await x.json()  //Promise to parse data NOTE: also it can be parsed in text format as x.text
      return data
      
}


async function main() {
  console.log("Loading Modules")

  console.log("Do something else")

  console.log("Load Data")

  let data = await getData()

  console.log(data)

  console.log("Process Data")

  console.log("Task 2")

}

main()

//Example of POST request Method Implementation:

async function postData(url = "", data = {}){
  const response =  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

postData("https://example.com/answer",{ answer: 42 }).then((data) => {
  console.log(data);
});













//data.then((v) =>{

//console.log(data)

//console.log("Process Data")

//console.log("Task 2")

//})
