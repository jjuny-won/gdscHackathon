import './App.css';
import React, { useState } from 'react';

function App() {
  const conditions = [
    '상대방 그려주기',
    '애칭 만들어주기',
    '상대방과 웃긴 포즈로 사진찍기',
    '칭찬 한마디씩 적고, 칭찬 하기',
    'SNS or Github 맞팔하기',
    '좋아하는 음식 알기',
    '최근 본 영화 알기',
    '서로의 맛집 추천'
  ];

  const [selectedCondition, setSelectedCondition] = useState('');

  const getRandomCondition = () => {
    const randomIndex = Math.floor(Math.random() * conditions.length);
    setSelectedCondition(conditions[randomIndex]);
  };

  return(
<div className="bingo-container">
      <h1>내 짝꿍은 바로 너!</h1>

      <div className="bingo-content">
        <p>빙고 미션은?</p>
        <div className= "bingo-box">
        <p>{selectedCondition || '여기에 미션이 표시 됩니다.'}</p>
        </div>
        <button onClick={getRandomCondition}>미션 뽑기</button>

      </div>
      <img src="https://res.cloudinary.com/startup-grind/image/upload/dpr_2.0,fl_sanitize/v1/gcs/platform-data-dsc/contentbuilder/logo_dark_stacked_5giak2X.svg" alt="GDSC Gif" />

    </div>
  );
   

}

export default App;
