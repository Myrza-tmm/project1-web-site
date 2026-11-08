
import React from 'react';

const services = [
  { name: 'GPA калькуляторы', icon: '🧮', description: 'Орташа балды есептеу' },
  { name: 'Сауалнамалар', icon: '📋', description: 'Сауалнамаларды толтыру' },
  { name: 'Жатақхана', icon: '🏠', description: 'Жатақхана туралы ақпарат' },
  { name: 'Анықтамалар', icon: '📄', description: 'Қажетті анықтамалар' },
];

export default function Services({ onBack }) {
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
          maxWidth: 1000,
          backgroundColor: '#FFFFFF',
          borderRadius: 30,
          padding: 45,
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

          <div style={{
            width: 75,
            height: 75,
            backgroundColor: '#F8E6FF',
            borderRadius: 22,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 38,
            marginBottom: 20,
          }}>
            ▦
          </div>

          <h1 style={{
            color: '#1B1923',
            fontSize: 32,
            fontWeight: 800,
            margin: '0 0 12px',
          }}>
            Сервистер
          </h1>

          <p style={{
            color: '#85818D',
            fontSize: 16,
            lineHeight: 1.7,
            marginBottom: 35,
          }}>
            Сізге қажетті оқу қызметтері мен
            мүмкіндіктерді осы бөлімнен таба аласыз.
          </p>

          {/* СЕРВИСТЕР */}

          <div className="services-grid">

            {services.map((s) => (
              <button
                key={s.name}
                type="button"
                style={{
                  minHeight: 190,
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #F0E5F5',
                  borderRadius: 20,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  cursor: 'pointer',
                  padding: 20,
                  transition: '0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#A811DA';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow =
                    '0 8px 22px rgba(168,17,218,0.10)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#F0E5F5';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >

                <div style={{
                  width: 75,
                  height: 75,
                  backgroundColor: '#F8E6FF',
                  borderRadius: 22,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: 36,
                  marginBottom: 18,
                }}>
                  {s.icon}
                </div>

                <span style={{
                  fontWeight: 700,
                  color: '#1B1923',
                  fontSize: 16,
                  textAlign: 'center',
                }}>
                  {s.name}
                </span>

                <span style={{
                  color: '#99939F',
                  fontSize: 12,
                  textAlign: 'center',
                  marginTop: 8,
                }}>
                  {s.description}
                </span>

              </button>
            ))}

          </div>

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

      {/* БЕЙІМДЕЛГЕН ДИЗАЙН */}

      <style>{`
        .services-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 20px;
        }

        @media (min-width: 1100px) {
          .services-grid {
            grid-template-columns: repeat(4, minmax(0, 1fr));
          }
        }

        @media (max-width: 600px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 600px) {
          .services-grid button {
            min-height: 150px !important;
          }
        }
      `}</style>

    </div>
  );
}
