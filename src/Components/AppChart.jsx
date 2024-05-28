import { PieChart } from '@mui/x-charts/PieChart';

function AppChart({ apps }) {
  const appsStatus = apps.map((app) => {
    return app.status;
  })

  const interviewingArr = appsStatus.filter((status) => {
    return status === "Interviewing" 
  });

  const applicationSentArr = appsStatus.filter((status) => {
    return status === "Application Sent" 
  });

  const applicationClosedArr = appsStatus.filter((status) => {
    return status === "Application Closed" 
  });

    return (
      <PieChart
        series={[
          {
            data: [
              { id: 0, value: applicationClosedArr.length, label: 'Application Closed' },
              { id: 1, value: interviewingArr.length, label: 'Interviewing' },
              { id: 2, value: applicationSentArr.length, label: 'Application Sent' },
            ],
            highlightScope: { faded: 'global', highlighted: 'item' },
            faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
          },
        ]}
        width={500}
        height={200}
      />
    );
  }

  export default AppChart;