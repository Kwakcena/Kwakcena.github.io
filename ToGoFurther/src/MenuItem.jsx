import styled from '@emotion/styled';

/*
자주 쓰이는 방식
어떤 object를 반환할 때 return 키워드를 없애고 () 로 묶어서 반환할 수 있음.
() => {
  return {
    xxx
  }
}

() => ({
  ddd
})
*/

const MenuItem = styled.li(({ active }) => ({
  marginRight: '1em',
  '& button': {
    padding: '.4em 1em',
    border: '1px solid #CCC',
    background: active ? '#EEE' : 'transparent',
    color: '#333',
    textDecoration: 'none',
    cursor: 'pointer',
    '&:hover': {
      fontWeight: 'bold',
      color: '#000',
    },
  },
}));

export default MenuItem;
