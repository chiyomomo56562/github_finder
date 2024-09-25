// input box를 가져온다.
const searchUser = document.getElementById('searchUser');

searchUser.onchange = (e) => searchUserBoxchange(e.target.value);

function searchUserBoxchange(text){
    // 타겟에 값이 있을 경우 profile box를 생성한다.
    console.log(text);
    if (text.length ===0) {
        //프로필을 출력 안한다.
        this.profile.innerHTML = '';
    }
    else {
        const github = new Github;
        const ui = new UI;
        // 1. 받아온 id를 검색한다.
        github.getUser(text)
            .then(data =>{
                if(data.profile.message === 'Not Found') {
                    // 유저를 찾지 못했을 시 찾지 못했다는 박스를 만들어준다.
                    ui.showAlert('User not found', 'alert alert-danger');
                } else {
                    // console.log(data);
                    // 2. 받아온 데이터를 기반으로 profile box를 생성한다.
                    ui.showProfile(data.profile);
                    // console.log(data.repos)
                    ui.showRepos(data.repos);
                }
            })
    }
}