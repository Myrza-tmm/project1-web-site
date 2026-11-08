
import React from 'react';

export default function MainPage({
  onBack,
  onContinue,
  onProfile,
  onServices,
}) {
  return (
    <div style={{
      minHeight: '100vh',
      width: '100%',
      backgroundColor: '#F8F8FA',
      fontFamily: 'Arial, sans-serif',
    }}>

      {/* ЖОҒАРҒЫ БӨЛІК */}

      <div style={{
        background: 'linear-gradient(120deg, #A811DA, #7900A8)',
        padding: '35px 7%',
        minHeight: 210,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: '#FFFFFF',
      }}>

        <div>
          <p style={{
            fontSize: 15,
            opacity: 0.9,
            margin: '0 0 12px',
          }}>
            Қош келдіңіз!
          </p>

          <h1 style={{
            fontSize: 34,
            fontWeight: 800,
            margin: 0,
          }}>
            Tursynbek M
          </h1>

          <p style={{
            fontSize: 15,
            opacity: 0.9,
            marginTop: 12,
          }}>
            Оқу порталының жеке кабинеті
          </p>
        </div>

        <button
          onClick={onProfile}
          style={{
            width: 65,
            height: 65,
            borderRadius: '50%',
            border: '2px solid rgba(255,255,255,0.5)',
            backgroundColor: 'rgba(255,255,255,0.18)',
            color: '#FFFFFF',
            fontSize: 32,
            cursor: 'pointer',
          }}
        >
          👤
        </button>

      </div>

      {/* НЕГІЗГІ БӨЛІМ */}

      <div style={{
        width: '100%',
        maxWidth: 1400,
        margin: '0 auto',
        padding: '35px 5%',
        boxSizing: 'border-box',
      }}>

        <h2 style={{
          fontSize: 25,
          fontWeight: 800,
          color: '#1B1923',
          marginBottom: 25,
        }}>
          Модульдер
        </h2>

        {/* НЕГІЗГІ КАРТОЧКАЛАР */}

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 22,
        }}>

          {/* ОНЛАЙН ТІРКЕЛУ */}

          <button
            onClick={onContinue}
            style={moduleStyle}
          >
            <div style={iconStyle}>
              📋
            </div>

            <div style={{ textAlign: 'left' }}>
              <h3 style={moduleTitle}>
                Онлайн тіркелу
              </h3>

              <p style={moduleText}>
                Онлайн өтінім беру және тіркелу
              </p>
            </div>

            <span style={arrowStyle}>→</span>
          </button>

          {/* СЕРВИСТЕР */}

          <button
            onClick={onServices}
            style={moduleStyle}
          >
            <div style={iconStyle}>
              ▦
            </div>

            <div style={{ textAlign: 'left' }}>
              <h3 style={moduleTitle}>
                Сервистер
              </h3>

              <p style={moduleText}>
                Қолжетімді қызметтерді пайдалану
              </p>
            </div>

            <span style={arrowStyle}>→</span>
          </button>

        </div>

        {/* ҚОСЫМША МОДУЛЬДЕР */}

        <h2 style={{
          fontSize: 25,
          fontWeight: 800,
          color: '#1B1923',
          marginTop: 45,
          marginBottom: 25,
        }}>
          Қосымша модульдер
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 20,
        }}>

          <div style={quickItem}>
            <span style={{ fontSize: 35 }}>📅</span>
            <h3 style={quickTitle}>Журнал</h3>
            <p style={quickText}>Оқу үлгерімі</p>
          </div>

          <div style={quickItem}>
            <span style={{ fontSize: 35 }}>🗓️</span>
            <h3 style={quickTitle}>Оқу кестесі</h3>
            <p style={quickText}>Сабақ кестесі</p>
          </div>

          <div style={quickItem}>
            <span style={{ fontSize: 35 }}>▦</span>
            <h3 style={quickTitle}>QR код</h3>
            <p style={quickText}>QR қызметі</p>
          </div>

        </div>

      </div>

    </div>
  );
}

/* СТИЛЬДЕР */

const moduleStyle = {
  width: '100%',
  minHeight: 125,
  backgroundColor: '#FFFFFF',
  display: 'flex',
  alignItems: 'center',
  gap: 18,
  padding: 22,
  border: 'none',
  borderRadius: 20,
  cursor: 'pointer',
  boxShadow: '0 4px 18px rgba(0,0,0,0.04)',
  textAlign: 'left',
};

const iconStyle = {
  width: 65,
  height: 65,
  minWidth: 65,
  backgroundColor: '#F8E6FF',
  borderRadius: 18,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: 32,
};

const moduleTitle = {
  color: '#1B1923',
  fontSize: 17,
  fontWeight: 700,
  margin: '0 0 8px',
};

const moduleText = {
  color: '#888888',
  fontSize: 13,
  margin: 0,
  lineHeight: 1.5,
};

const arrowStyle = {
  marginLeft: 'auto',
  color: '#A811DA',
  fontSize: 25,
  fontWeight: 700,
};

const quickItem = {
  backgroundColor: '#FFFFFF',
  minHeight: 165,
  borderRadius: 20,
  padding: 25,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 4px 18px rgba(0,0,0,0.04)',
};

const quickTitle = {
  fontSize: 16,
  color: '#1B1923',
  margin: '12px 0 5px',
};

const quickText = {
  fontSize: 13,
  color: '#888888',
  margin: 0,
};
