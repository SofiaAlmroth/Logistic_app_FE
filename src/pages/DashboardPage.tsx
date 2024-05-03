import BarStacked from "../services/BarStacked";
import { Stat } from "../services/Stat";

function Dashboard() {
  return (
    <>
      <div
        style={{
          justifyContent: "center",
          marginTop: "20px",
          width: "100%",
        }}
      >
        <div style={{ marginLeft: "10px", marginBottom: "15px" }}>
          <Stat />
        </div>
        <div style={{}}>
          <BarStacked />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
