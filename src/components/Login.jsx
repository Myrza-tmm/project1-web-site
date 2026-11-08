
import React, { useState } from 'react';

export default function Login({
  onForgetPassword,
  onRegister,
  onContinue,
}) {
  const [phone, setPhone] = useState('+7 ');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Телефон нөмірін форматтау
  const formatPhone = (value) => {
    let digits = value.replace(/\D/g, '');

    if (digits.startsWith('7')) {
      digits = digits.slice(1);
    }

    digits = digits.slice(0, 10);

    let result = '+7';

    if (digits.length > 0) {
      result += ' (' + digits.slice(0, 3);
    }

    if (digits.length >= 4) {
      result += ') ' + digits.slice(3, 6);
    }

    if (digits.length >= 7) {
      result += '-' + digits.slice(6, 8);
    }

    if (digits.length >= 9) {
      result += '-' + digits.slice(8, 10);
    }

    return result;
  };

  const phoneDigits = phone.replace(/\D/g, '');

  const isPhoneValid =
    phoneDigits.length === 11 &&
    phoneDigits.startsWith('7');

  const canContinue =
    isPhoneValid && password.length > 0;

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
        maxWidth: 1200,
        minHeight: 650,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        overflow: 'hidden',
        boxShadow: '0 15px 50px rgba(168,17,218,0.12)',
      }}>

        {/* СОЛ ЖАҚ БӨЛІК */}

        <div style={{
          background: 'linear-gradient(135deg, #A811DA, #7900A8)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 45,
          textAlign: 'center',
          color: '#FFFFFF',
        }}>

          <div style={{
            width: 120,
            height: 120,
            backgroundColor: 'rgba(255,255,255,0.15)',
            borderRadius: 35,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 65,
            marginBottom: 30,
          }}>
            📚
          </div>

          <h1 style={{
            fontSize: 42,
            fontWeight: 800,
            margin: '0 0 18px',
          }}>
            Оқу порталы
          </h1>

          <p style={{
            fontSize: 17,
            lineHeight: 1.8,
            maxWidth: 400,
            opacity: 0.95,
            margin: 0,
          }}>
            Білім алуға арналған бірыңғай
            ақпараттық жүйеге қош келдіңіз!
          </p>

          <div style={{
            marginTop: 45,
            fontSize: 75,
          }}>
            🎓
          </div>

          <p style={{
            fontSize: 14,
            opacity: 0.8,
            marginTop: 25,
          }}>
            Білім — болашақтың кілті!
          </p>

        </div>

        {/* ОҢ ЖАҚ БӨЛІК */}

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '55px 60px',
          backgroundColor: '#FFFFFF',
          boxSizing: 'border-box',
        }}>

          <div style={{
            width: '100%',
            maxWidth: 430,
          }}>

            {/* ТАҚЫРЫП */}

            <h2 style={{
              color: '#1B1923',
              fontSize: 32,
              fontWeight: 800,
              margin: '0 0 12px',
            }}>
              Жүйеге кіру
            </h2>

            <p style={{
              color: '#85818D',
              fontSize: 15,
              lineHeight: 1.7,
              marginBottom: 35,
            }}>
              Жеке кабинетіңізге қош келдіңіз!
              Жалғастыру үшін деректеріңізді енгізіңіз.
            </p>

            <div style={inputStyle}>
              <span style={{ fontSize: 22 }}>
                📱
              </span>

              <input
                type="tel"
                value={phone}
                onChange={(e) => {
                  setPhone(formatPhone(e.target.value));
                }}
                placeholder="+7 (___) ___-__-__"
                style={fieldStyle}
              />
            </div>

            <div style={inputStyle}>
              <span style={{ fontSize: 22 }}>
                🔒
              </span>

              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Құпиясөзіңізді енгізіңіз"
                style={fieldStyle}
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  border: 'none',
                  background: 'transparent',
                  fontSize: 20,
                  cursor: 'pointer',
                }}
              >
                {showPassword ? '🙈' : '👁️'}
              </button>
            </div>

            {/* ҚҰПИЯСӨЗДІ ҰМЫТУ */}

            <p
              onClick={onForgetPassword}
              style={{
                textAlign: 'right',
                color: '#A811DA',
                fontSize: 14,
                fontWeight: 600,
                cursor: 'pointer',
                marginTop: 5,
                marginBottom: 30,
              }}
            >
              Құпиясөзді ұмыттыңыз ба?
            </p>

            {/* КІРУ */}

            <button
              onClick={onContinue}
              disabled={!canContinue}
              style={{
                width: '100%',
                padding: 19,
                background: 'linear-gradient(135deg, #A811DA, #7900A8)',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: 16,
                fontSize: 17,
                fontWeight: 700,
                cursor: canContinue ? 'pointer' : 'not-allowed',
                opacity: canContinue ? 1 : 0.55,
                boxShadow: '0 8px 20px rgba(168,17,218,0.2)',
              }}
            >
              Кіру →
            </button>

            {/* ТІРКЕЛУ */}

            <p style={{
              textAlign: 'center',
              color: '#85818D',
              fontSize: 14,
              marginTop: 30,
            }}>
              Аккаунтыңыз жоқ па?{' '}

              <span
                onClick={onRegister}
                style={{
                  color: '#A811DA',
                  fontWeight: 700,
                  cursor: 'pointer',
                }}
              >
                Тіркелу
              </span>
            </p>

            {/* ТӨМЕНГІ ЖАЗУ */}

            <p style={{
              textAlign: 'center',
              color: '#A09AA7',
              fontSize: 12,
              marginTop: 35,
            }}>
              Оқу порталы © 2026
            </p>

          </div>
        </div>

      </div>

    </div>
  );
}

const labelStyle = {
  display: 'block',
  fontSize: 15,
  fontWeight: 700,
  color: '#1B1923',
  marginBottom: 10,
};

const inputStyle = {
  width: '100%',
  height: 62,
  display: 'flex',
  alignItems: 'center',
  gap: 12,
  backgroundColor: '#FAF7FC',
  border: '1px solid #EADCF0',
  borderRadius: 16,
  padding: '0 18px',
  marginBottom: 22,
  boxSizing: 'border-box',
};

const fieldStyle = {
  flex: 1,
  width: '100%',
  minWidth: 0,
  height: '100%',
  border: 'none',
  outline: 'none',
  background: 'transparent',
  fontSize: 15,
  color: '#1B1923',
};
