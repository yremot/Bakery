import React from 'react'

export default function NotFound() {
  return (
    <div style={{width:'100%', height:'100vh',display:'flex',flexDirection:'column',justifyContent:'center',alignContent:'center'}}>
      <p style={{font:"bold 80px 'Noto Sans KR'", textAlign:'center'}}>404</p>
      <p style={{font:"normal 36px/150% 'Noto Sans KR'", textAlign:'center',marginBottom:'8px'}}>Pages Not Found</p>
      <p style={{font:"normal 20px/150% 'Noto Sans KR'", textAlign:'center'}}>해당 페이지를 찾을 수 없습니다.</p>
    </div>
  )
}
