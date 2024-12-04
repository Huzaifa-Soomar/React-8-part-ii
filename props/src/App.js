import './App.css';
import Udo from './components/udo';
import Sdo from './components/sdo';
import Mdo from './components/mdo';



function App() {
  const user1 = {
    name: "Huzaifa",
    email: "xyz@mail.com",
    role: "Bob The Builder",
    pic: "images.png", // Replace with a valid URL or local image
  };

  const stats1 = {
    totalUser: "250",
    activeUser: "120",
    newSignups: "90",
    acttivePercentage: "40%",
  };

  const message = {
    message1: "This is My Dashboard",
    message2: "It is my Progress",
    message3: "Hope I am doing Great!",
  };

  return (
    <div className="dashboard">
      <div className="header">Dashboard</div>
      <div className="grid">
        <div className="card user-info">
          <Udo user={user1} />
        </div>
        <div className="card stats">
          <Sdo stats={stats1} />
        </div>
        <div className="card message">
          <Mdo message={message} />
        </div>
        {/* Add placeholders for graph cards */}
        <div className="card graph">Graph 1</div>
        <div className="card graph">Graph 2</div>
        <div className="card graph">Graph 3</div>
      </div>
    </div>
  );
}

export default App;
