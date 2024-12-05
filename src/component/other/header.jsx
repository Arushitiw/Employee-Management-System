const Header = ({ data }) => {
    console.log("Header data prop:", data); // Add this line to inspect the content
  
    return (
      <div className="flex items-end justify-between">
        <h1 className="text-2xl font-medium">
          Hello <br />
          <span className="text-3xl font-semibold">
            {data?.firstName || "Guest"} 👋
          </span>
        </h1>
        <button className="bg-red-500 text-lg font-medium text-white px-5 py-2 rounded-sm">
          Log out
        </button>
      </div>
    );
  };
  