
// 가격 세자리수 콤마설정 함수 
// hook은 리액트 전용 함수
// util은 일반 함수
// api는 외부 데이터

const regExp = {
    comma: (value) => {
        if (value) return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
}

export default regExp