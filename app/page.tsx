export default function Home() {
  return (
    <main style={{
      background: "#FFF5F8",
      minHeight: "100vh",
      fontFamily: "sans-serif",
      padding: "20px"
    }}>

      {/* Header */}
      <h1 style={{
        color: "#FF5FA2",
        fontSize: "32px",
        textAlign: "center",
        fontWeight: "700"
      }}>
        UMAY-ANA
      </h1>

      <p style={{
        textAlign: "center",
        color: "#555",
        marginTop: "8px",
        fontSize: "16px"
      }}>
        Заботливая платформа для будущих мам 💗
      </p>

      {/* Hero Card */}
      <div style={{
        background: "#FFFFFF",
        borderRadius: "16px",
        padding: "20px",
        marginTop: "25px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
      }}>
        <h2 style={{ color: "#FF5FA2" }}>
          Твоя беременность • 14 неделя 🤍
        </h2>
        <p style={{ color: "#444", marginTop: "8px" }}>
          Всё развивается хорошо. Сейчас второй триместр — самый спокойный период.
        </p>
      </div>

      {/* Calculator */}
      <div style={{
        background: "#FFFFFF",
        borderRadius: "16px",
        padding: "20px",
        marginTop: "20px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
      }}>
        <h3 style={{ color: "#FF5FA2" }}>📅 Калькулятор срока</h3>
        <p style={{ color: "#555", marginTop: "6px" }}>
          Введите дату последней менструации:
        </p>
        <input type="date"
          style={{
            marginTop: "10px",
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #FFD1E1",
            width: "100%"
          }}
        />
        <button style={{
          marginTop: "12px",
          background: "#FF5FA2",
          color: "#fff",
          padding: "10px",
          borderRadius: "8px",
          border: "none",
          width: "100%",
          fontSize: "16px"
        }}>
          Рассчитать
        </button>
      </div>

      {/* Navigation */}
      <div style={{
        marginTop: "30px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(140px,1fr))",
        gap: "12px"
      }}>
        {[
          { title: "💬 Форум", link: "/forum" },
          { title: "📖 Статьи", link: "/articles" },
          { title: "👩‍⚕️ Врачи", link: "/doctors" },
          { title: "🤖 AI-помощник", link: "/ai" },
          { title: "👤 Профиль", link: "/profile" }
        ].map((item) => (
          <a key={item.title}
             href={item.link}
             style={{
               background: "#FFFFFF",
               padding: "14px",
               borderRadius: "12px",
               textAlign: "center",
               textDecoration: "none",
               color: "#FF5FA2",
               fontWeight: "600",
               boxShadow: "0 2px 8px rgba(0,0,0,0.04)"
             }}>
            {item.title}
          </a>
        ))}
      </div>

      {/* Articles Preview */}
      <h3 style={{
        marginTop: "35px",
        color: "#FF5FA2"
      }}>
        📚 Статьи для тебя
      </h3>

      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: "12px",
        marginTop: "10px"
      }}>
        {[
          "14–16 неделя беременности: что нормально",
          "Питание во втором триместре",
          "Как справляться с тревогой"
        ].map((title) => (
          <div key={title}
            style={{
              background: "#FFFFFF",
              padding: "14px",
              borderRadius: "12px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.04)"
            }}>
            <p style={{ color: "#FF5FA2", fontWeight: "600" }}>
              {title}
            </p>
          </div>
        ))}
      </div>

      {/* AI Quick */}
      <div style={{
        marginTop: "25px",
        background: "#FFE6F0",
        padding: "16px",
        borderRadius: "14px"
      }}>
        <p style={{ color: "#444" }}>
          Есть вопрос? Спроси нашего AI-помощника 🤍
        </p>
        <a href="/ai"
           style={{
             display: "inline-block",
             marginTop: "10px",
             background: "#FF5FA2",
             color: "#fff",
             padding: "10px 14px",
             borderRadius: "8px",
             textDecoration: "none"
           }}>
          Перейти в чат
        </a>
        <p style={{
          fontSize: "12px",
          color: "#777",
          marginTop: "8px"
        }}>
          AI не заменяет консультацию врача
        </p>
      </div>

    </main>
  );
}
