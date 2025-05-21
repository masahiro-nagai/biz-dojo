// src/App.tsx
import React from 'react';
import LoginPage from './pages/LoginPage'; // 作成したLoginPageをインポート
import './App.css'; // 必要に応じてApp.cssも調整

function App() {
  return (
    <div className="App">
      <LoginPage />
    </div>
  );
}

export default App;