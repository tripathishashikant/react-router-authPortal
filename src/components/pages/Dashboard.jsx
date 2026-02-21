const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Dashboard</h2>
      
      <div className="stats-grid">
        <div className="card welcome-card">
          <h3 className="card-title">Welcome Back!</h3>
          <p className="card-content">Here's a quick overview of your account.</p>
        </div>

        <div className="card">
          <h4 className="card-title-sm">Profile Views</h4>
          <p className="card-stat text-indigo">1,234</p>
          <p className="card-stat-change">+15% from last week</p>
        </div>

        <div className="card">
          <h4 className="card-title-sm">Posts Created</h4>
          <p className="card-stat text-green">56</p>
          <p className="card-stat-change">+8 from last month</p>
        </div>

        <div className="card">
          <h4 className="card-title-sm">Followers</h4>
          <p className="card-stat text-blue">789</p>
          <p className="card-stat-change">+2.5% from last week</p>
        </div>
      </div>

      <div className="card recent-activity">
        <h3 className="card-title">Recent Activity</h3>
        <ul>
          <li className="activity-item">
            <span className="activity-badge badge-green">NEW POST</span>
            <span>You published "Getting Started with React Router".</span>
            <span className="activity-time">2 hours ago</span>
          </li>
          <li className="activity-item">
            <span className="activity-badge badge-blue">NEW FOLLOWER</span>
            <span>Jane Doe started following you.</span>
            <span className="activity-time">1 day ago</span>
          </li>
          <li className="activity-item">
            <span className="activity-badge badge-indigo">PROFILE UPDATE</span>
            <span>You updated your bio.</span>
            <span className="activity-time">3 days ago</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;