let arr = [];
    let multiplyCounter = 0;

    function googoodan(arr, num1, num2) {
      for(let i = 1; i <= num1; i++) {
        for(let j=1; j <= num2; j++) {
          multiplyCounter++
          arr.push(`${i} x ${j} = ${i*j}`)
        }
      }
    }
    // import googoodan from "./googoodan.js";
    googoodan(arr,9,9)
    // console.log(arr);
    console.log(multiplyCounter)


    function tagMaker(parentNode, childNode) {
      for(let i=0; i<arr.length; i++) {
        let newTag = document.createElement(childNode);
        parentNode.appendChild(newTag);
        setInterval(() => {
          newTag.innerHTML = arr[i];
        }, 1000);
      }
    }
    tagMaker(ul,"li")