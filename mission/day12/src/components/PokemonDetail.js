import { setPokemonType } from "../modules/typeTag.js";

// PokemonDetail 컴포넌트: 포켓몬 상세 정보를 보여주는 역할
export default function PokemonDetail({ $app, initialState }) {
  // 포켓몬 상세 정보 상태 저장
  this.state = initialState;
  // 상세 정보를 표시할 DOM 요소 생성
  this.$target = document.createElement("div");
  this.$target.className = "pokemon-detail";

  // 부모 앱에 상세 정보 DOM 추가
  $app.appendChild(this.$target);

  // 상세 정보 화면의 HTML 구조를 반환하는 함수
  this.template = () => {
    // 포켓몬의 각종 정보 구조 분해 할당
    const { name, info, description, img, height, id, type, weight } =
      this.state;

    // 상세 정보 화면의 HTML 템플릿 생성
    let temp = `
        <div class="detail-wrapper">
            <div class="left-wrapper">
                <img src="${img}"></img>
            </div>
            <div class="right-wrapper">
                <div class="pokemon-info">
                    <div class="index">No.${id}</div>
                    <div class="name">${name}</div>                 
                    <div class="type">${setPokemonType(type)}</div>
                    <div class="description">${description}</div>
                </div>
                <div class="detail-info">
                    <div>
                        <div class="label">키</div>
                        <div class="info">${height}m</div>
                    </div>
                    <div>
                        <div class="label">분류</div>
                        <div class="info">${info}</div>
                    </div>
                    <div>
                        <div class="label">몸무게</div>
                        <div class="info">${weight}kg</div>
                    </div>
                </div>
            </div>
        </div>`;
    return temp;
  };

  // 화면을 렌더링하는 함수: 템플릿을 DOM에 삽입
  this.render = () => {
    this.$target.innerHTML = this.template();
  };

  // setState: 상태를 변경하고, 화면을 다시 렌더링하는 함수
  this.setState = (newState) => {
    this.state = newState;
    this.render();
  };

  // 최초 렌더링
  this.render();
}
