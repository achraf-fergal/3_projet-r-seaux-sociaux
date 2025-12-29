import Card from "./lik";

export function Post() {
  return (
    <div
      style={{
        boxShadow: "0 8px 20px rgba(0,0,0,0.18)", // ✅ shadow
        borderRadius: "16px",
        width: "35vw",
        height: "60vh",
        margin: "100px auto",
        padding: "20px",
        background: "#fff",
        transition: "0.3s ease",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "15px",
          marginBottom: "15px",
        }}
      >
        <img
          src="https://smartasset.com/wp-content/uploads/sites/2/2017/09/rsz_robert-standard-1.jpg"
          alt=""
          width="60"
          height=""
          style={{ borderRadius: "50%" }}
        />
        <h5 style={{ margin: 0 ,fontFamily:"system-ui"
}}>Robert Kiyosaki</h5>
      </div>

      <img
        src="https://londonreal.tv/wp-content/uploads/2023/01/02.-Video-Thumbs-Robert-Kiyosaki-2-600x338.jpg"
        alt=""
        style={{
          width:"30vw",
          height:"40vh",

        }}
      />

      <Card />
    </div>
  );
}
