
import React from 'react';

export default function Profile({ onBack, onLogout }) {
  const menuItemStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '18px 20px',
    gap: 15,
    borderBottom: '1px solid #F1EAF4',
    cursor: 'pointer',
    fontSize: 16,
    color: '#1B1923',
    backgroundColor: '#FFFFFF',
  };

  const iconStyle = {
    width: 45,
    height: 45,
    borderRadius: 14,
    backgroundColor: '#F8E6FF',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 21,
  };

  return (
    <div style={{
      minHeight: '100vh',
      width: '100%',
      background: 'linear-gradient(135deg, #F8E6FF, #F8F8FA, #F0D9FF)',
      padding: 30,
      boxSizing: 'border-box',
      fontFamily: 'Arial, sans-serif',
    }}>

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
          padding: '40px 55px',
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

          {/* ПРОФИЛЬ */}

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '25px 15px',
            background: 'linear-gradient(135deg, #A811DA, #7900A8)',
            borderRadius: 22,
            marginBottom: 30,
          }}>

            <div style={{
              width: 90,
              height: 90,
              backgroundColor: '#FFFFFF',
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: 45,
            }}>
              👤
            </div>

            <h2 style={{
              color: '#FFFFFF',
              fontSize: 24,
              fontWeight: 800,
              margin: '15px 0 5px',
            }}>
              Tursynbek M
            </h2>

            <p style={{
              color: '#FFFFFF',
              opacity: 0.85,
              fontSize: 15,
              margin: 0,
            }}>
              Group IS-25-4K
            </p>

            <div style={{
              marginTop: 15,
              padding: '7px 18px',
              borderRadius: 20,
              backgroundColor: 'rgba(255,255,255,0.18)',
              color: '#FFFFFF',
              fontSize: 13,
            }}>
              Студент
            </div>

          </div>

          {/* МӘЗІР ТАҚЫРЫБЫ */}

          <h3 style={{
            color: '#1B1923',
            fontSize: 19,
            fontWeight: 700,
            marginBottom: 15,
          }}>
            Жеке кабинет
          </h3>

          {/* МӘЗІР */}

          <div style={{
            border: '1px solid #F1EAF4',
            borderRadius: 18,
            overflow: 'hidden',
          }}>

            <div style={menuItemStyle}>
              <div style={iconStyle}>👤</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600 }}>
                  Жеке ақпарат
                </div>
                <div style={{
                  fontSize: 12,
                  color: '#99939F',
                  marginTop: 4,
                }}>
                  Профиль мәліметтері
                </div>
              </div>
              <span style={{ color: '#A811DA', fontSize: 22 }}>
                ›
              </span>
            </div>

            <div style={menuItemStyle}>
              <div style={iconStyle}>🔔</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600 }}>
                  Хабарламалар
                </div>
                <div style={{
                  fontSize: 12,
                  color: '#99939F',
                  marginTop: 4,
                }}>
                  Жаңа хабарламалар
                </div>
              </div>
              <span style={{ color: '#A811DA', fontSize: 22 }}>
                ›
              </span>
            </div>

            <div style={menuItemStyle}>
              <div style={iconStyle}>⚙️</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600 }}>
                  Баптаулар
                </div>
                <div style={{
                  fontSize: 12,
                  color: '#99939F',
                  marginTop: 4,
                }}>
                  Қосымша баптаулар
                </div>
              </div>
              <span style={{ color: '#A811DA', fontSize: 22 }}>
                ›
              </span>
            </div>

            <div style={{
              ...menuItemStyle,
              borderBottom: 'none',
            }}>
              <div style={iconStyle}>❔</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600 }}>
                  Көмек көрсету
                </div>
                <div style={{
                  fontSize: 12,
                  color: '#99939F',
                  marginTop: 4,
                }}>
                  Қолдау қызметі
                </div>
              </div>
              <span style={{ color: '#A811DA', fontSize: 22 }}>
                ›
              </span>
            </div>

          </div>

          {/* ШЫҒУ */}

          <button
            onClick={onLogout}
            style={{
              width: '100%',
              padding: 17,
              marginTop: 25,
              border: '1px solid #FFE0E0',
              borderRadius: 15,
              backgroundColor: '#FFF5F5',
              color: '#FF3B30',
              fontSize: 16,
              fontWeight: 700,
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 10,
            }}
          >
            <span style={{ fontSize: 21 }}>↪</span>
            Шығу
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
