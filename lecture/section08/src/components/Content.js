// Content 컴포넌트: 사진 목록을 화면에 렌더링하는 역할
export default function Content({ $app,  initialState}) {
    this.state = initialState; // 현재 사진 데이터 배열
    this.$target = document.createElement('div'); // 사진을 담을 div 생성
    $app.appendChild(this.$target); // 루트 엘리먼트에 div 추가

    // 템플릿 함수: state(사진 배열)를 기반으로 HTML 문자열 생성
    this.template = () => {
        let temp = "";

        if (this.state) {
            // state 배열의 각 요소(el)는 사진 객체
            this.state.forEach((el) => {
                temp += `<img src=${el.url}></img>`; // 각 사진의 url로 img 태그 생성
            });
        }
        return temp;
    }
    // render 함수: 실제로 화면에 렌더링
    this.render = () => {
        this.$target.innerHTML = this.template(); // div에 HTML 삽입
    };
    // setState 함수: 새로운 state로 갱신하고, render 호출
    this.setState = (newState) => {
        this.state = newState;
        this.render();
    };

    this.render(); // 컴포넌트 생성 시 최초 렌더링
} 
