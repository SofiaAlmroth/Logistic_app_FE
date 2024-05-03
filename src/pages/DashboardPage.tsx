import BarStacked from "../services/BarStacked";
import { Stat } from "../services/Stat";

function Dashboard() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "20px",
          width: "100%",
        }}
      >
        <div style={{ marginLeft: "10px", marginBottom: "15px" }}>
          <Stat />
        </div>
        <div style={{ width: "75%" }}>
          <BarStacked />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
