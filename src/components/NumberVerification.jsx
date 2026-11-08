
import React, { useRef, useState, useEffect } from 'react';

export default function NumberVerification({
  onBack,
  onContinue
}) {
  const [code, setCode] = useState(['', '', '', '']);
  const [seconds, setSeconds] = useState(0);
  const [message, setMessage] = useState('');

  const inputRefs = useRef([]);

  const isCodeComplete = code.every(value => value !== '');

  // Код енгізу
  const handleChange = (text, index) => {
    const value = text.replace(/[^0-9]/g, '').slice(-1);

    const newCode = [...code];
    newCode[index] = value;

    setCode(newCode);
    setMessage('');

    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // Пернетақтаны басқару
  const handleKeyDown = (event, index) => {
    if (
      event.key === 'Backspace' &&
      code[index] === '' &&
      index > 0
    ) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  // Таймер
  useEffect(() => {
    if (seconds <= 0) return;

    const timer = setTimeout(() => {
      setSeconds(prev => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [seconds]);

  // Кодты қайта сұрау
  const handleResendCode = () => {
    if (seconds > 0) return;

    setSeconds(60);
    setCode(['', '', '', '']);
    setMessage('Жаңа код сұрауы жіберілді.');

    inputRefs.current[0]?.focus();

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
          📩
        </div>

        {/* ТАҚЫРЫП */}

        <h1 style={{
          fontSize: 32,
          fontWeight: 800,
          color: '#1B1923',
          margin: '0 0 15px',
        }}>
          Нөмірді растау
        </h1>

        <p style={{
          fontSize: 16,
          color: '#85818D',
          lineHeight: 1.7,
          marginBottom: 30,
        }}>
          Телефон нөміріңізге жіберілген
          4 таңбалы растау кодын енгізіңіз.
        </p>

        {/* КОД ЕНГІЗУ */}

        <label style={{
          display: 'block',
          fontSize: 15,
          fontWeight: 700,
          color: '#1B1923',
          marginBottom: 15,
        }}>
          Растау коды
        </label>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: 12,
          marginBottom: 25,
        }}>

          {code.map((value, index) => (
            <input
              key={index}
              ref={(ref) => {
                inputRefs.current[index] = ref;
              }}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={value}
              onChange={(event) =>
                handleChange(event.target.value, index)
              }
              onKeyDown={(event) =>
                handleKeyDown(event, index)
              }
              style={{
                width: '25%',
                maxWidth: 75,
                height: 70,
                boxSizing: 'border-box',
                border: value
                  ? '2px solid #A811DA'
                  : '1px solid #E5DCEB',
                borderRadius: 16,
                backgroundColor: '#FAF7FC',
                color: '#1B1923',
                fontSize: 26,
                fontWeight: 700,
                textAlign: 'center',
                outline: 'none',
              }}
            />
          ))}

        </div>

        {/* ЖАЛҒАСТЫРУ */}

        <button
          onClick={onContinue}
          disabled={!isCodeComplete}
          style={{
            width: '100%',
            padding: 19,
            border: 'none',
            borderRadius: 16,
            background: 'linear-gradient(135deg, #A811DA, #7900A8)',
            color: '#FFFFFF',
            fontSize: 17,
            fontWeight: 700,
            cursor: isCodeComplete
              ? 'pointer'
              : 'not-allowed',
            opacity: isCodeComplete ? 1 : 0.55,
            boxShadow: '0 8px 20px rgba(168,17,218,0.2)',
          }}
        >
          Жалғастыру →
        </button>

        {/* КОДТЫ ҚАЙТА СҰРАУ */}

        <button
          onClick={handleResendCode}
          disabled={seconds > 0}
          style={{
            width: '100%',
            padding: 17,
            marginTop: 14,
            border: '1px solid #D9D9DE',
            borderRadius: 16,
            backgroundColor: '#E8E8EC',
            color: '#55515C',
            fontSize: 16,
            fontWeight: 700,
            cursor: seconds > 0
              ? 'not-allowed'
              : 'pointer',
            opacity: seconds > 0 ? 0.7 : 1,
          }}
        >
          {seconds > 0
            ? `Кодты қайта сұрау (${seconds} сек.)`
            : '↻ Кодты қайта сұрау'}
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
