
import React, { useState } from 'react';

export default function Register({ onBack, onContinue }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('+7 ');
  const [password, setPassword] = useState('');
  const [isAgreed, setIsAgreed] = useState(false);
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

  const isPasswordValid =
    password.length >= 8 &&
    /[A-ZА-ЯЁ]/.test(password) &&
    /[a-zа-яё]/.test(password);

  const canContinue =
    name.trim().length > 0 &&
    isPhoneValid &&
    isPasswordValid &&
    isAgreed;

  const handleContinue = () => {
    if (!name.trim()) {
      alert('Атыңызды енгізіңіз!');
      return;
    }

    if (!isPhoneValid) {
      alert('Телефон нөмірін дұрыс енгізіңіз!');
      return;
    }

    if (!isPasswordValid) {
      alert('Құпиясөз кемінде 8 таңба, бас және кіші әріптерден тұруы керек!');
      return;
    }

    if (!isAgreed) {
      alert('Пайдалану шарттарына келісуіңіз керек!');
      return;
    }

    onContinue();
  };

  const inputContainer = {
    width: '100%',
    height: 62,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#FAF7FC',
    border: '1px solid #EADCF0',
    borderRadius: 16,
    padding: '0 18px',
    marginTop: 16,
    boxSizing: 'border-box',
  };

  const inputStyle = {
    flex: 1,
    height: '100%',
    border: 'none',
    outline: 'none',
    background: 'transparent',
    color: '#1B1923',
    fontSize: 15,
    minWidth: 0,
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
        maxWidth: 1200,
        minHeight: 700,
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
          }}>
            Білім алуға арналған бірыңғай
            ақпараттық жүйеге қош келдіңіз!
          </p>

          <div style={{
            marginTop: 35,
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
          padding: '45px 60px',
          backgroundColor: '#FFFFFF',
          boxSizing: 'border-box',
        }}>

          <div style={{
            width: '100%',
            maxWidth: 430,
          }}>

            {/* БЕЛГІШЕ */}

            <div style={{
              width: 70,
              height: 70,
              backgroundColor: '#F8E6FF',
              borderRadius: 22,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: 35,
              marginBottom: 20,
            }}>
              👤
            </div>

            {/* ТАҚЫРЫП */}

            <h2 style={{
              color: '#1B1923',
              fontSize: 32,
              fontWeight: 800,
              margin: '0 0 10px',
            }}>
              Тіркелу
            </h2>

            <p style={{
              color: '#85818D',
              fontSize: 15,
              lineHeight: 1.7,
              marginBottom: 25,
            }}>
              Жаңа аккаунт ашу үшін төмендегі
              мәліметтерді толтырыңыз.
            </p>

            <div style={inputContainer}>
              <span style={{ fontSize: 22 }}>👤</span>

              <input
                style={inputStyle}
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Аты-жөніңізді енгізіңіз"
              />
            </div>

            <div style={inputContainer}>
              <span style={{ fontSize: 22 }}>📱</span>

              <input
                style={inputStyle}
                type="tel"
                value={phone}
                onChange={(e) => setPhone(formatPhone(e.target.value))}
                placeholder="+7 (___) ___-__-__"
              />
            </div>

            <div style={inputContainer}>
              <span style={{ fontSize: 22 }}>🔒</span>

              <input
                style={inputStyle}
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Құпиясөз ойлап табыңыз"
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

            {/* КЕЛІСІМ */}

            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 12,
              marginTop: 20,
            }}>

              <button
                type="button"
                onClick={() => setIsAgreed(!isAgreed)}
                style={{
                  width: 23,
                  height: 23,
                  minWidth: 23,
                  borderRadius: 6,
                  border: '2px solid #A811DA',
                  backgroundColor: isAgreed ? '#A811DA' : '#FFFFFF',
                  color: '#FFFFFF',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  cursor: 'pointer',
                  padding: 0,
                }}
              >
                {isAgreed && '✓'}
              </button>

              <p style={{
                flex: 1,
                color: '#777777',
                fontSize: 13,
                lineHeight: 1.6,
                margin: 0,
              }}>
                Тіркелу арқылы сіз пайдалану шарттарымен келісесіз.
                <span style={{
                  color: '#A811DA',
                  fontWeight: 700,
                  cursor: 'pointer',
                }}>
                  {' '}Пайдалану шарттары
                </span>
              </p>

            </div>

            {/* ТІРКЕЛУ БАТЫРМАСЫ */}

            <button
              onClick={handleContinue}
              disabled={!canContinue}
              style={{
                width: '100%',
                padding: 18,
                background: 'linear-gradient(135deg, #A811DA, #7900A8)',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: 16,
                fontSize: 17,
                fontWeight: 700,
                marginTop: 25,
                cursor: canContinue ? 'pointer' : 'not-allowed',
                opacity: canContinue ? 1 : 0.55,
                boxShadow: '0 8px 20px rgba(168,17,218,0.2)',
              }}
            >
              Жалғастыру →
            </button>

            {/* КІРУГЕ ҚАЙТУ */}

            <p style={{
              textAlign: 'center',
              color: '#85818D',
              fontSize: 14,
              marginTop: 25,
            }}>
              Аккаунтыңыз бар ма?{' '}

              <span
                onClick={onBack}
                style={{
                  color: '#A811DA',
                  fontWeight: 700,
                  cursor: 'pointer',
                }}
              >
                Кіру
              </span>
            </p>

            <p style={{
              textAlign: 'center',
              color: '#A09AA7',
              fontSize: 12,
              marginTop: 20,
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
  fontSize: 14,
  fontWeight: 700,
  color: '#1B1923',
  marginTop: 15,
  marginBottom: 0,
};
