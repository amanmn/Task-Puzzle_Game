// const allImgCont = document.querySelectorAll('.image');
// let dragSrcElem = null;

// function imgStartDrag(e) {
//     dragSrcElem = this;
// }
// // Function to allow dropping
// function imgDragOver(e) {
//     e.preventDefault(); // Necessary to allow drop
// }

// // Function to handle the drop event
// function imgDropOn() {
//     if (dragSrcElem !== this) {
//         const src1 = dragSrcElem.src;
//         const src2 = this.src;
//         dragSrcElem.src = src2;
//         this.src = src1;
//     }
// }
// // Attach event listeners to all images
// allImgCont.forEach(item => {
//     item.addEventListener('dragstart', imgStartDrag);
//     item.addEventListener('dragover', imgDragOver);
//     item.addEventListener('drop', imgDropOn);
// });







const allImage = document.querySelectorAll('.image');
let imgElement = null;

function imgStartDrag(e) {
    imgElement = this;
}
function imgDragOver(e) {
    e.preventDefault();
}
function dropItem() {
    if (imgElement !== this) {
        const src1 = imgElement.src;
        const src2 = this.src;
        imgElement.src = src2;
        this.src = src1;
    }
}
allImage.forEach(item => {
    item.addEventListener('dragstart', imgStartDrag);
    item.addEventListener('dragover', imgDragOver);
    item.addEventListener('drop', dropItem);
})




