"use client";

import { useEffect, useState } from 'react';

export default function CatPage() {
  const [catData, setCatData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/cat')
      .then(response => response.json())
      .then(data => setCatData(data))
      .catch(() => setError('데이터를 가져오는 데 실패했습니다.'));
  }, []);

  if (error) return <p>{error}</p>;
  if (!catData) return <p>로딩 중...</p>;

  return (
    <div>
      <h1>고양이 API</h1>
      <p>{catData.message}</p>
      <img src={catData.image} alt="고양이" />
    </div>
  );
}