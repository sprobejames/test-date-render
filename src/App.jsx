function App() {
  const dates = [
    '7/28/2024, 12:00:00 AM',
    '7/29/2024, 12:00:00 AM',
    '7/30/2024, 12:00:00 AM',
    '7/31/2024, 12:00:00 AM',
    '8/1/2024, 12:00:00 AM',
    '8/2/2024, 12:00:00 AM',
    '8/3/2024, 12:00:00 AM',
    '8/4/2024, 12:00:00 AM',
    '8/5/2024, 12:00:00 AM',
    '8/6/2024, 12:00:00 AM',
  ];

  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="">
        <h1>Split space</h1>
        <ul className="flex gap-2">
          {dates.map((row, i) => {
            let date = row.split(' ');
            const formatted = new Date(date[0]).getDate();
            return <li key={i}>{formatted}</li>;
          })}
        </ul>

        <h1>Split comma space</h1>
        <ul className="flex gap-2">
          {dates.map((row, i) => {
            let date = row.split(', ');
            const formatted = new Date(date[0]).getDate();
            return <li key={i}>{formatted}</li>;
          })}
        </ul>
      </div>
    </div>
  )
}

export default App
