"use client";

import { useEffect, useState } from 'react';

export default function DogPage() {
  const [dogData, setDogData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/dog')
      .then(response => response.json())
      .then(data => setDogData(data))
      .catch(() => setError('데이터를 가져오는 데 실패했습니다.'));
  }, []);

  if (error) return <p>{error}</p>;
  if (!dogData) return <p>로딩 중...</p>;

  return (
    <div>
      <h1>강아지 API</h1>
      <p>{dogData.message}</p>
      <img src={dogData.image} alt="강아지" />
    </div>
  );
}