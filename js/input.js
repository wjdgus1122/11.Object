const formEl = document.querySelector('.wrap');
const inputEl = document.querySelector('input')
const btnEl = document.querySelector('button')
const commentWrapEl = document.querySelector('.comment_wrap')


// 1.form태그 새로고침 없애기
// 2.input 태그 입력 값 가져오기
// 3.등록하기

const handleClick = (e) => {

    e.preventDefault();
    // =>태그가 가지고있는 기본 이벤트를 적용시키지 않음
    // ex)form, a 태그 등
    
    // console.log(inputEl.value)
    // =>input태그에 작성한 내용을 가져옴

    const inputValue = inputEl.value;
    inputEl.value="";
    // =>value값을 변수에 저장한 뒤 input value값을 빈값으로 변경

    // 1. 댓글을 저장할 태그생성
    const hEl = document.createElement('h5');
    // 2. 생성한 태그 안쪽으로 value값 작성
    hEl.innerHTML = inputValue;
    console.log(hEl)
    // 3. comment_wrap 자식으로 생성한 태그 넣기
    commentWrapEl.appendChild(hEl)



}

formEl.addEventListener('submit', handleClick)
// =>폼태그를 제어할때 이벤트를 반드시 폼태그한테 적용할것
