// 알맞은 속성의 값과 색상을 적용할 수 있는 모듈입니다.
// modules 폴더 내부의 typeTag.js 코드를 확인하고, 알맞게 활용해보세요!

import { setPokemonType } from '../modules/typeTag.js';

// PokemonList 컴포넌트: 포켓몬 리스트를 렌더링하고, 각종 클릭 이벤트를 처리합니다.
export default function PokemonList({ $app, initialState, handleItemClick, handleTypeClick }) {
    // 현재 컴포넌트의 상태(포켓몬 데이터 배열)를 저장합니다.
    this.state = initialState;
    
    // 이 컴포넌트가 담당할 DOM 요소를 생성합니다.
    this.$target = document.createElement('div');
    this.$target.className = 'pokemon-list';

    // 부모 엘리먼트($app)에 이 컴포넌트의 DOM을 추가합니다.
    $app.appendChild(this.$target);

    // 포켓몬 클릭, 타입 클릭 시 실행할 콜백 함수를 저장합니다.
    this.handleItemClick = handleItemClick;
    this.handleTypeClick = handleTypeClick;

    // 포켓몬 리스트의 HTML을 문자열로 생성하는 함수입니다.
    // this.state의 각 포켓몬 데이터를 기반으로 리스트를 만듭니다.
    this.template = () => {
        let temp = "";
        if (this.state) {
            this.state.forEach((el, idx) => {
                temp += `<div class="pokemon-wrapper">
                            <div class="img-wrapper" id="${el.id}">
                                <img src="${el.img}" alt="${el.name}"></img>
                            </div>
                            <div class="pokemon-info">
                                <div class="index">No.${el.id}</div>
                                <div class="name">${el.name}</div>
                                <div class="type">${setPokemonType(el.type)}</div> 
                            </div>
                        </div>`;
            });
        }
        return temp;
    }

    // 실제로 DOM에 리스트를 렌더링하고, 각종 이벤트를 바인딩하는 함수입니다.
    this.render = () => {
        // 1. 현재 상태(this.state)를 기반으로 HTML을 생성하여, this.$target의 내용으로 삽입합니다.
        this.$target.innerHTML = this.template();

        // 2. 각 포켓몬 이미지를 클릭했을 때 상세 페이지로 이동하도록 이벤트를 등록합니다.
        //    - 'img-wrapper' 클래스를 가진 모든 div를 선택합니다.
        //    - 각 div에 클릭 이벤트 리스너를 추가하여, 클릭 시 해당 포켓몬의 id를 handleItemClick 콜백에 전달합니다.
        this.$target.querySelectorAll('div.img-wrapper').forEach((el) => {
            el.addEventListener('click', () => {
                // el.id에는 포켓몬의 id가 들어있음
                this.handleItemClick(el.id);
            });
        });

        // 3. 각 타입 태그를 클릭했을 때, 해당 타입의 포켓몬만 필터링하도록 이벤트를 등록합니다.
        //    - 'type-tag' 클래스를 가진 모든 div를 선택합니다.
        //    - 각 div에 클릭 이벤트 리스너를 추가하여, 클릭 시 해당 타입의 id를 handleTypeClick 콜백에 전달합니다.
        this.$target.querySelectorAll('div.type-tag').forEach((el) => {
            el.addEventListener('click', () => {
                // el.id에는 타입명이 들어있음
                this.handleTypeClick(el.id);
            });
        });
    };

    // 외부에서 상태를 변경할 때 사용하는 함수입니다.
    // 새로운 상태(newState)를 받아서 this.state를 갱신하고, 다시 렌더링합니다.
    this.setState = (newState) => {
        this.state = newState;
        this.render();
    };

    // 컴포넌트가 생성될 때 최초로 한 번 렌더링을 실행합니다.
    this.render();
}