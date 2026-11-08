
import React, { useState } from 'react';

export default function SelectCity({ onBack, onContinue }) {
  const [name, setName] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const cities = [
    'Алматы',
    'Астана',
    'Шымкент',
    'Қарағанды',
    'Ақтөбе',
    'Ақтау',
    'Атырау',
    'Тараз',
    'Павлодар',
    'Өскемен',
    'Қостанай',
    'Қызылорда',
    'Орал',
    'Петропавл',
    'Түркістан',
    'Семей',
    'Көкшетау',
  ];

  return (
    <div style={{
      minHeight: '100vh',
      width: '100%',
      background: 'linear-gradient(135deg, #F8E6FF, #F8F8FA, #F0D9FF)',
      padding: 30,
      boxSizing: 'border-box',
      fontFamily: 'Arial, sans-serif',
    }}>

      {/* НЕГІЗГІ БӨЛІК */}

      <div style={{
        minHeight: 'calc(100vh - 60px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>

        <div style={{
          width: '100%',
          maxWidth: 650,
          backgroundColor: '#FFFFFF',
          borderRadius: 30,
          padding: '55px 65px',
          boxSizing: 'border-box',
          boxShadow: '0 15px 50px rgba(168,17,218,0.12)',
        }}>

          {/* АРТҚА ҚАЙТУ */}

          <button
            onClick={onBack}
            style={{
              width: 48,
              height: 48,
              backgroundColor: '#F8E6FF',
              border: 'none',
              borderRadius: 14,
              color: '#A811DA',
              fontSize: 30,
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 25,
            }}
          >
            ←
          </button>

          {/* ТАҚЫРЫП */}

          <h1 style={{
            color: '#1B1923',
            fontSize: 32,
            fontWeight: 800,
            margin: '0 0 15px',
          }}>
            Қалаңызды таңдаңыз
          </h1>

          <p style={{
            color: '#85818D',
            fontSize: 16,
            lineHeight: 1.7,
            marginBottom: 35,
          }}>
            Сізге көрсетілетін оқу орындары мен
            қызметтер таңдалған қалаға байланысты болады.
          </p>

          <div style={{
            position: 'relative',
            width: '100%',
          }}>

            <div
              onClick={() => setIsOpen(!isOpen)}
              style={{
                width: '100%',
                height: 65,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: '#FAF7FC',
                border: '1px solid #EADCF0',
                borderRadius: 16,
                padding: '0 18px',
                boxSizing: 'border-box',
                cursor: 'pointer',
              }}
            >

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
              }}>
                <span style={{ fontSize: 23 }}>🏙️</span>

                <span style={{
                  color: name ? '#1B1923' : '#AAA9B2',
                  fontSize: 16,
                }}>
                  {name || 'Қаланы таңдаңыз'}
                </span>
              </div>

              <span style={{
                color: '#A811DA',
                fontSize: 23,
              }}>
                {isOpen ? '⌃' : '⌄'}
              </span>

            </div>

            {/* ҚАЛАЛАР ТІЗІМІ */}

            {isOpen && (
              <div style={{
                position: 'absolute',
                top: 72,
                left: 0,
                width: '100%',
                maxHeight: 260,
                overflowY: 'auto',
                backgroundColor: '#FFFFFF',
                border: '1px solid #EADCF0',
                borderRadius: 16,
                boxShadow: '0 10px 30px rgba(168,17,218,0.12)',
                zIndex: 10,
              }}>

                {cities.map((city) => (
                  <div
                    key={city}
                    onClick={() => {
                      setName(city);
                      setIsOpen(false);
                    }}
                    style={{
                      padding: '15px 18px',
                      fontSize: 15,
                      color: name === city ? '#A811DA' : '#1B1923',
                      fontWeight: name === city ? 700 : 400,
                      backgroundColor:
                        name === city ? '#F8E6FF' : '#FFFFFF',
                      cursor: 'pointer',
                      borderBottom: '1px solid #F3EDF5',
                      display: 'flex',
                      justifyContent: 'space-between',
                    }}
                  >
                    {city}

                    {name === city && (
                      <span style={{ color: '#A811DA' }}>
                        ✓
                      </span>
                    )}
                  </div>
                ))}

              </div>
            )}

          </div>

          {/* ТАҢДАЛҒАН ҚАЛА */}

          {name && (
            <div style={{
              marginTop: 18,
              padding: 15,
              backgroundColor: '#F8E6FF',
              borderRadius: 14,
              display: 'flex',
              alignItems: 'center',
              gap: 12,
            }}>
              <span style={{ fontSize: 25 }}>📍</span>

              <div>
                <div style={{
                  color: '#85818D',
                  fontSize: 12,
                }}>
                  Таңдалған қала
                </div>

                <div style={{
                  color: '#A811DA',
                  fontSize: 15,
                  fontWeight: 700,
                  marginTop: 3,
                }}>
                  {name}
                </div>
              </div>
            </div>
          )}

          {/* ЖАЛҒАСТЫРУ */}

          <button
            onClick={() => {
              if (!name) {
                alert('Қаланы таңдаңыз!');
                return;
              }

              onContinue();
            }}
            disabled={!name}
            style={{
              width: '100%',
              padding: 19,
              background: 'linear-gradient(135deg, #A811DA, #7900A8)',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: 16,
              fontSize: 17,
              fontWeight: 700,
              marginTop: 30,
              cursor: name ? 'pointer' : 'not-allowed',
              opacity: name ? 1 : 0.55,
              boxShadow: '0 8px 20px rgba(168,17,218,0.2)',
            }}
          >
            Жалғастыру →
          </button>

          <p style={{
            textAlign: 'center',
            color: '#A09AA7',
            fontSize: 12,
            marginTop: 30,
          }}>
            Оқу порталы © 2026
          </p>

        </div>
      </div>
    </div>
  );
}
