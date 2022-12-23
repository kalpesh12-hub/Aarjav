
import './App.css';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PowerBIEmbed
          embedConfig={{
            type: 'report',   // Supported types: report, dashboard, tile, visual and qna
            id: 'fff6a4e4-b56f-4734-805f-405a92bf75d6',
            embedUrl: 'https://app.powerbi.com/reportEmbed?reportId=fff6a4e4-b56f-4734-805f-405a92bf75d6&groupId=f2a6b294-ef89-4e41-b6b1-b49adb002715&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVNPVVRILUVBU1QtQVNJQS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsibW9kZXJuRW1iZWQiOnRydWUsInVzYWdlTWV0cmljc1ZOZXh0Ijp0cnVlfX0%3d',
            accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNWQ3ZDU0YzQtODE4Yi00YTNkLWFjOGMtM2VhNzJlNmFkZDY0LyIsImlhdCI6MTY3MTc2ODI5MCwibmJmIjoxNjcxNzY4MjkwLCJleHAiOjE2NzE3NzI0NDIsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VEFBQUErNnF6NjhJR2ZBNXV3dFNnaGUrSDFkRGFTa1dRZ1NvelRLMXR2TWJ5V1VLQStwQzAvOFIwbnNJZ0hDNkNWc0dzIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiQWxlcnRzIiwiZ2l2ZW5fbmFtZSI6IlBvd2VyIEJJIiwiaXBhZGRyIjoiMTgwLjE1MS4xMzIuMTk4IiwibmFtZSI6IlBvd2VyIEJJIEFsZXJ0cyIsIm9pZCI6IjhmOTRiYTM4LWNkMWQtNDVlNS1iOTZhLWQzMzk2YmVjM2RiOSIsInB1aWQiOiIxMDAzMjAwMTNGRDYwNzM1IiwicmgiOiIwLkFWUUF4RlI5WFl1QlBVcXNqRDZuTG1yZFpBa0FBQUFBQUFBQXdBQUFBQUFBQUFCVUFJRS4iLCJzY3AiOiJ1c2VyX2ltcGVyc29uYXRpb24iLCJzdWIiOiJtS2REWnRxUEliZk44ZGx6aGpnUG9zYWFGNkFIVDAtQU1JVlNQOW9tUHVBIiwidGlkIjoiNWQ3ZDU0YzQtODE4Yi00YTNkLWFjOGMtM2VhNzJlNmFkZDY0IiwidW5pcXVlX25hbWUiOiJiaTRuYXZAc2hhbGluYS5jb20iLCJ1cG4iOiJiaTRuYXZAc2hhbGluYS5jb20iLCJ1dGkiOiJNRlpkZWtNbXEwaUN2aFBLMFZqbEFBIiwidmVyIjoiMS4wIiwid2lkcyI6WyJhOWVhODk5Ni0xMjJmLTRjNzQtOTUyMC04ZWRjZDE5MjgyNmMiLCIxMTY0ODU5Ny05MjZjLTRjZjMtOWMzNi1iY2ViYjBiYThkY2MiLCJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXX0.pLx1Mm8fy1FHKO29jPXUwC_cbCv5DUIUkXgaWyydnm82tWOhILWQ4Vx2dbmTJKAkgielc3XmMXV8XBv8JG1GYHyqC1wpSu1Xab4RizH3ntQNOLTZippEdrBNV5Z4elohai-1crC7IDOb2b_cUViqOMj7K_xbprEjnXTHRJwgfzWEXvhAU4_4OcXVONCFEAbISbIU8g0rCuVZbCeMpk2tk4KshM_b9qVc5URskYsLYxkJQJ58isTHgKdwPXrsb7743UYp6gzS4PklVekpqMQ8UcRaDs94MrPhkm0H9s7WKj-hg3UgvHIm8i5x0B0xNkIC71lbIpFd2W-RpyTtATPqmQ',
            tokenType: models.TokenType.Aad,
            settings: {
              panes: {
                filters: {
                  expanded: false,
                  visible: false
                }
              },
              background: models.BackgroundType.Transparent,
            }
          }}

          eventHandlers={
            new Map([
              ['loaded', function () { console.log('Report loaded'); }],
              ['rendered', function () { console.log('Report rendered'); }],
              ['error', function (event) { console.log(event.detail); }]
            ])
          }

          cssClassName={"Embed-container"}

          getEmbeddedComponent={(embeddedReport) => {
            window.report = embeddedReport;
          }}
        />

      </header>
    </div>
  );
}

export default App;
