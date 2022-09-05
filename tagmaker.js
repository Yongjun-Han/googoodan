import googoodan from "./googoodan";

export default function tagMaker(parentNode, childNode) {
  for(let i=0; i<arr.length; i++) {
    let newTag = document.createElement(childNode);
    parentNode.appendChild(newTag);
    setInterval(() => {
      newTag.innerHTML = arr[i];
    }, 1000);
  }
}
// tagMaker(ul,"li")