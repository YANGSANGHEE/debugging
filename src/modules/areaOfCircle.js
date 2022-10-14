import calc from "../core-modules/calculrator.js";
// moudle 파일에서 default로 export 했기 때문에 name 정정 가능

/*
원의 넓이 구하는 공식
반지름 x 반지름 x PI
*/

/**
 * 원의 넓이를 구하는 함수 입니다.
 * @param {number} circleRadius : 픽셀로 들어갈 데이터 필요.
 * @returns number and int
 * 
 * 리턴이 정수형태로 들어가 있기 때문에, 인자(argument)는 꼭 정수가 아니어도 사용할 수 있습니다.
 * 
 */

export default function areaOfCircle(circleRadius) {
  let radiusSquaredValue = calc.multiplication(circleRadius, circleRadius);
  let getResultInt = calc.multiplication(radiusSquaredValue, Math.PI);
  return Math.ceil(getResultInt);//소수값 올림
}
