// src/pages/LoginPage.tsx
import React, { useState } from 'react';
// import { supabase } from '../supabaseClient'; // Supabase連携は後ほど
// import { useNavigate } from 'react-router-dom'; // 画面遷移も後ほど

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  // const navigate = useNavigate(); // 画面遷移も後ほど

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage(''); // メッセージをクリア
    setLoading(true);
    // ここにSupabaseのログイン処理を後で追加します
    console.log('Login attempt with:', { email, password });
    // ダミーの処理（後でSupabase連携に置き換えます）
    setTimeout(() => {
      if (email === "test@example.com" && password === "password") {
        setMessage('ログイン成功（仮）');
        // navigate('/'); // ログイン成功後、メインページへ遷移（後ほど）
      } else {
        setMessage('メールアドレスまたはパスワードが違います（仮）');
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.title}>BizDojoへようこそ！</h2>
        {message && <p style={styles.message}>{message}</p>}
        <form onSubmit={handleLogin}>
          <div style={styles.inputGroup}>
            <label htmlFor="email" style={styles.label}>メールアドレス</label>
            <input
              type="email"
              id="email"
              style={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="email@example.com"
            />
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="password" style={styles.label}>パスワード</label>
            <input
              type="password"
              id="password"
              style={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="パスワード"
            />
          </div>
          <button type="submit" style={styles.button} disabled={loading}>
            {loading ? 'ログイン中...' : 'ログイン'}
          </button>
        </form>
        <p style={styles.footerText}>
          アカウントをお持ちでないですか？{' '}
          {/* <Link to="/register" style={styles.link}>新規登録</Link> */} {/* 登録ページへのリンクは後ほど */}
          <a href="#" onClick={() => alert('新規登録ページへ（後で実装）')} style={styles.link}>新規登録</a>
        </p>
        <p style={styles.footerText}>
           {/* <Link to="/forgot-password" style={styles.link}>パスワードをお忘れですか？</Link> */}
           <a href="#" onClick={() => alert('パスワードリセットページへ（後で実装）')} style={styles.link}>パスワードをお忘れですか？</a>
        </p>
      </div>
    </div>
  );
};

// 簡単なスタイル定義 (後でCSSファイルに分けることを推奨)
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#f0f4f8', // 明るいブルー系の背景
  },
  formContainer: {
    padding: '40px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '400px',
    textAlign: 'center',
  },
  title: {
    marginBottom: '24px',
    color: '#007aff', // ブルー系のタイトルカラー
    fontSize: '28px',
  },
  inputGroup: {
    marginBottom: '20px',
    textAlign: 'left',
  },
  label: {
    display: 'block',
    marginBottom: '8px',
    color: '#4a4a4a',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '12px',
    border: '1px solid #d1d1d1',
    borderRadius: '4px',
    boxSizing: 'border-box', // paddingとborderをwidth/heightに含める
    fontSize: '16px',
  },
  button: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#007aff', // ブルー系のボタンカラー
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    transition: 'background-color 0.2s',
  },
  // buttonHover: { // :hover 擬似クラスはインラインスタイルでは直接指定できない
  //   backgroundColor: '#0056b3',
  // },
  message: {
    color: 'red', // エラーメッセージは赤など
    marginBottom: '16px',
  },
  footerText: {
    marginTop: '20px',
    fontSize: '14px',
    color: '#555',
  },
  link: {
    color: '#007aff',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};

export default LoginPage;