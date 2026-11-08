
import React, { useState, useEffect } from 'react';

export default function ForgetPassword({
  onBack,
  onContinue
}) {
  const [phone, setPhone] = useState('+7 ');
  const [seconds, setSeconds] = useState(0);
  const [message, setMessage] = useState('');

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

  // Таймер
  useEffect(() => {
    if (seconds <= 0) return;

    const timer = setTimeout(() => {
      setSeconds(prev => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [seconds]);

  // Код сұрау
  const handleSendCode = () => {
    if (!isPhoneValid) return;

    setMessage('Код сұрау жіберілді.');
    setSeconds(60);

    if (onContinue) {
      onContinue();
    }
  };

  // Кодты қайта сұрау
  const handleResendCode = () => {
    if (!isPhoneValid || seconds > 0) return;

    setMessage('Кодты қайта сұрау жіберілді.');
    setSeconds(60);

    // Нақты SMS жіберу қызметін осы жерге қосу керек
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
          Құпиясөзді ұмыттыңыз ба?
        </h1>

        <p style={{
          fontSize: 16,
          color: '#85818D',
          lineHeight: 1.7,
          marginBottom: 35,
        }}>
          Құпиясөзді қалпына келтіру үшін
          телефон нөміріңізді енгізіңіз.
        </p>

        {/* ТЕЛЕФОН НӨМІРІ */}

        <label style={{
          display: 'block',
          fontSize: 15,
          fontWeight: 700,
          color: '#1B1923',
          marginBottom: 12,
        }}>
          Телефон нөмірі
        </label>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 14,
          backgroundColor: '#FAF7FC',
          border: '1px solid #EADCF0',
          borderRadius: 16,
          padding: '18px 20px',
          marginBottom: 25,
        }}>

          <span style={{ fontSize: 23 }}>
            📱
          </span>

          <input
            type="tel"
            value={phone}
            onChange={(e) => {
              setPhone(formatPhone(e.target.value));
              setMessage('');
              setSeconds(0);
            }}
            placeholder="+7 (___) ___-__-__"
            style={{
              width: '100%',
              minWidth: 0,
              border: 'none',
              outline: 'none',
              background: 'transparent',
              fontSize: 17,
              color: '#1B1923',
              WebkitTextFillColor: '#1B1923',
            }}
          />

        </div>

        {/* КОД СҰРАУ БАТЫРМАСЫ */}

        <button
          onClick={handleSendCode}
          disabled={!isPhoneValid}
          style={{
            width: '100%',
            padding: 19,
            border: 'none',
            borderRadius: 16,
            background: 'linear-gradient(135deg, #A811DA, #7900A8)',
            color: '#FFFFFF',
            fontSize: 17,
            fontWeight: 700,
            cursor: isPhoneValid ? 'pointer' : 'not-allowed',
            opacity: isPhoneValid ? 1 : 0.55,
            boxShadow: '0 8px 20px rgba(168,17,218,0.2)',
          }}
        >
          Алға →
        </button>

        {/* ХАБАРЛАМА */}

        {message && (
          <p style={{
            textAlign: 'center',
            color: '#168A45',
            fontSize: 14,
            marginTop: 18,
          }}>
            ✓ {message}
          </p>
        )}

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
