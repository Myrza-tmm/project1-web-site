
import React, { useState } from 'react';

export default function ResetPassword({
  onBack,
  onContinue
}) {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const isPasswordValid =
    password.length >= 8 &&
    /[A-ZА-ЯЁ]/.test(password) &&
    /[a-zа-яё]/.test(password);

  const passwordsMatch =
    password === confirmPassword &&
    confirmPassword.length > 0;

  const canContinue =
    isPasswordValid && passwordsMatch;

  const handleContinue = () => {
    if (!isPasswordValid) {
      alert('Құпиясөз кемінде 8 таңба, бас және кіші әріптерден тұруы керек.');
      return;
    }

    if (!passwordsMatch) {
      alert('Құпиясөздер сәйкес келмейді!');
      return;
    }

    onContinue();
  };

  const inputContainer = {
    width: '100%',
    height: 65,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#FAF7FC',
    border: '1px solid #EADCF0',
    borderRadius: 16,
    padding: '0 18px',
    marginTop: 14,
    boxSizing: 'border-box',
  };

  const inputStyle = {
    flex: 1,
    height: '100%',
    border: 'none',
    outline: 'none',
    background: 'transparent',
    color: '#1B1923',
    fontSize: 16,
    minWidth: 0,
  };

  const eyeButtonStyle = {
    border: 'none',
    background: 'transparent',
    fontSize: 21,
    cursor: 'pointer',
    padding: 5,
  };

  return (
    <div style={{
      minHeight: '100vh',
      width: '100%',
      background: 'linear-gradient(135deg, #F8E6FF, #F8F8FA, #F0D9FF)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 30,
      boxSizing: 'border-box',
      fontFamily: 'Arial, sans-serif',
    }}>

      <div style={{
        width: '100%',
        maxWidth: 600,
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        padding: '55px 60px',
        boxSizing: 'border-box',
        boxShadow: '0 15px 50px rgba(168,17,218,0.12)',
      }}>

        {/* АРТҚА ҚАЙТУ */}

        <button
          onClick={onBack}
          style={{
            width: 45,
            height: 45,
            borderRadius: 14,
            border: 'none',
            backgroundColor: '#F8E6FF',
            color: '#A811DA',
            fontSize: 25,
            cursor: 'pointer',
            marginBottom: 30,
            display: 'block',
            marginLeft: 0,
            marginRight: 'auto',
          }}
        >
          ←
        </button>

        {/* БЕЛГІШЕ */}

        <div style={{
          width: 85,
          height: 85,
          background: 'linear-gradient(135deg, #A811DA, #7900A8)',
          borderRadius: 25,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          marginBottom: 30,
          boxShadow: '0 8px 20px rgba(168,17,218,0.25)',
        }}>
          🔐
        </div>

        {/* ТАҚЫРЫП */}

        <h1 style={{
          fontSize: 32,
          fontWeight: 800,
          color: '#1B1923',
          margin: '0 0 15px',
        }}>
          Жаңа құпиясөз орнату
        </h1>

        <p style={{
          fontSize: 16,
          color: '#85818D',
          lineHeight: 1.7,
          marginBottom: 30,
        }}>
          Аккаунтыңыздың қауіпсіздігі үшін
          жаңа құпиясөз ойлап табыңыз.
        </p>

        <div style={inputContainer}>

          <span style={{
            fontSize: 22,
            marginRight: 14,
          }}>
            🔒
          </span>

          <input
            style={inputStyle}
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Жаңа құпиясөз"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            style={eyeButtonStyle}
          >
            {showPassword ? '🙈' : '👁️'}
          </button>

        </div>

        {/* ҚҰПИЯСӨЗ ТАЛАПТАРЫ */}

        <div style={{
          marginTop: 12,
          marginBottom: 25,
          fontSize: 13,
          lineHeight: 1.8,
          color: '#85818D',
        }}>
        </div>

        <div style={{
          ...inputContainer,
          marginTop: 0,
          marginBottom: 12,
          borderColor:
            confirmPassword.length > 0
              ? passwordsMatch ? '#168A45' : '#E57373'
              : '#EADCF0',
        }}>

          <span style={{
            fontSize: 22,
            marginRight: 14,
          }}>
            🔒
          </span>

          <input
            style={inputStyle}
            type={showConfirm ? 'text' : 'password'}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Құпиясөзді қайталаңыз"
          />

          <button
            type="button"
            onClick={() => setShowConfirm(!showConfirm)}
            style={eyeButtonStyle}
          >
            {showConfirm ? '🙈' : '👁️'}
          </button>

        </div>

        {/* СӘЙКЕСТІГІН ТЕКСЕРУ */}

        {confirmPassword.length > 0 && (
          <p style={{
            fontSize: 13,
            color: passwordsMatch ? '#168A45' : '#D9534F',
            marginTop: 5,
            marginBottom: 20,
          }}>
            {passwordsMatch
              ? '✓ Құпиясөздер сәйкес келеді'
              : '✕ Құпиясөздер сәйкес келмейді'}
          </p>
        )}

        {/* ЖАЛҒАСТЫРУ */}

        <button
          onClick={handleContinue}
          disabled={!canContinue}
          style={{
            width: '100%',
            padding: 19,
            border: 'none',
            borderRadius: 16,
            background: 'linear-gradient(135deg, #A811DA, #7900A8)',
            color: '#FFFFFF',
            fontSize: 17,
            fontWeight: 700,
            marginTop: 20,
            cursor: canContinue ? 'pointer' : 'not-allowed',
            opacity: canContinue ? 1 : 0.55,
            boxShadow: '0 8px 20px rgba(168,17,218,0.2)',
          }}
        >
          Құпиясөзді сақтау →
        </button>

        {/* ТӨМЕНГІ ЖАЗУ */}

        <p style={{
          textAlign: 'center',
          color: '#A09AA7',
          fontSize: 13,
          marginTop: 30,
        }}>
          Оқу порталы © 2026
        </p>

      </div>
    </div>
  );
}
