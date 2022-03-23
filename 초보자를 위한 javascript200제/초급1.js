/* /////////////// 예외처리하기 /////////////////// */
  /* throw
  코드에서 잘못될 가능성을 예상하고 발생시키는 에러
  고의로 에러를 발생시켜 예외를 알린다. */
  function checkNum(val){
    if(typeof val !== 'number') throw '유효하지 않은 값입니다.2';
    console.log('숫자형 값으로 확인되었습니다');
  }
  
  // checkNum(100);
  // checkNum('Wrong Type');
  // checkNum('완료');

  /* try-catch-finally
    try 블록 안에서 발생 에러 잡음
    catch 블록으로 제어권 넘김
    finally 블록은 에러 발생 상관없이 실행
  */
  try { 
    checkNum(100);  // checkNum() 함수 실행 > finally
    checkNum('Wrong type'); // checkNum() 함수 실행 > catch(e에 throw값을 가져옴 ) > finally
    //return을 사용한다면 catch 쪽이 아닌 일반 콘솔에 출력해줘야 하나, 
    //catch e변수로 할당을 해주는 역할이 있음
  }catch (e){
    console.log(`에러가 발생했습니다 >>> ${e}`);
  }finally{
    console.log('완료');
  }

  /* 출력 단축키 = ctrl + alt + N */