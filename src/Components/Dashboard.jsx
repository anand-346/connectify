import { useAuth } from  '../context/AuthContext';

function Dashboard() {
  const { currentUser, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">

        <header className="flex justify-between items-center mb-8 p-4 bg-white rounded-lg shadow">
          <h1 className="text-2xl font-bold text-blue-600">Dashboard</h1>
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <img 
                src={currentUser?.photoURL || 'https://ui-avatars.com/api/?name=User'} 
                alt="Profile" 
                className="w-8 h-8 rounded-full mr-2"
              />
              <span>{currentUser?.displayName || 'User'}</span>
            </div>
            <button 
              onClick={logout}
              className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600 transition"
            >
              Sign Out
            </button>
          </div>
        </header>

        <main className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Welcome to Your Dashboard</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium mb-2">Your Account</h3>
              <p className="text-sm text-gray-600">Email: {currentUser?.email || 'No email'}</p>
              <p className="text-sm text-gray-600">
                Joined: {new Date(currentUser?.metadata?.creationTime).toLocaleDateString()}
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium mb-2">Quick Actions</h3>
              <button className="block w-full text-left py-1 px-2 hover:bg-gray-100 rounded">
                View Profile
              </button>
              <button className="block w-full text-left py-1 px-2 hover:bg-gray-100 rounded">
                Settings
              </button>
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-medium text-blue-800 mb-2">Getting Started</h3>
            <p className="text-sm text-blue-700">
              Explore your dashboard and customize your experience.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;