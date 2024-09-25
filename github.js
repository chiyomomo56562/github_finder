class Github{
    constructor() {      
        this.repos_count = 5; //가져올 repo의 갯수
        this.repos_sort = 'created: asc'; //가져올 repo의 정렬 방식
    }
    // 1. make_profile_box로부터 값을 수신한다.
    async getUser(userId) {
        // js에서 클래스의 메소드를 정의 할 때 function 키워드를 사용할 필요가 없다.
        // github api를 사용해 비동기 통신이 필요하기 때문에 async 키워드를 사용한다.

        // 2. github api를 통해 값을 요청한다.
        //유저의 프로필과 저장소를 받아온다.
        const userProfile = await fetch(`https://api.github.com/users/${userId}`);
        const userRepo = await fetch(`https://api.github.com/users/${userId}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}`);

        console.log(userProfile)

        // 받아온 데이터를 json형식으로 만든다.
        // json 형식으로 만들 때 await을 사용하지 않으면 오류가 난다.
        const profile = await userProfile.json();
        const repos = await userRepo.json();
        
        // 잘 받아오는 걸 확인할 수 있다.
        console.log(profile);

        return {profile, repos}
    }
}