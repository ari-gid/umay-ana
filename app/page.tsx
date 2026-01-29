
export default function Home() {
  return (
    <main style={{
      background: "#FFF5F8",
      minHeight: "100vh",
      fontFamily: "sans-serif",
      padding: "40px"
    }}>
      
      <h1 style={{
        color: "#FF5FA2",
        fontSize: "36px",
        textAlign: "center"
      }}>
        UMAY-ANA
      </h1>

      <p style={{
        textAlign: "center",
        color: "#444",
        fontSize: "18px",
        marginTop: "10px"
      }}>
        Заботливая платформа для будущих мам 💗
      </p>

      <div style={{
        marginTop: "50px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))",
        gap: "20px"
      }}>

        {[
          { title: "📅 Калькулятор срока", desc: "Рассчитайте дату родов" },
          { title: "📖 Статьи", desc: "Полезные советы по неделям" },
          { title: "💬 Форум", desc: "Общайтесь с другими мамами" },
          { title: "👩‍⚕️ Врачи", desc: "Каталог специалистов" },
          { title: "🤖 AI Чат", desc: "Задайте вопрос ассистенту" }
        ].map((item) => (
          <div key={item.title} style={{
            background: "#FFFFFF",
            borderRadius: "12px",
            padding: "20px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.05)"
          }}>
            <h3 style={{ color: "#FF5FA2" }}>{item.title}</h3>
            <p style={{ color: "#555" }}>{item.desc}</p>
          </div>
        ))}

      </div>
    </main>
  );
}
